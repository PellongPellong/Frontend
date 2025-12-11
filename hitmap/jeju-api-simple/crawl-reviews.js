// Playwright 기반 제주도 장소 리뷰 크롤러
// 사용법: node crawl-reviews.js

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// 설정
const CONFIG = {
    inputFile: './jeju-places.json',
    outputFile: './jeju-places-with-reviews.json',
    batchSize: 10, // 몇 개씩 저장할지
    delayBetweenPages: 1000, // 페이지 간 대기 시간 (ms)
    maxReviewsPerPlace: 20, // 한 장소당 최대 리뷰 수
    headless: true // false로 하면 브라우저 창이 보임
};

// 별점 추출 함수
function extractStarRating(reviewElement) {
    try {
        const starElements = reviewElement.querySelectorAll('.wrap_grade .figure_star.on');
        return starElements.length;
    } catch (error) {
        console.error('별점 추출 실패:', error.message);
        return 0;
    }
}

// 리뷰 텍스트 추출 함수
function extractReviewText(reviewElement) {
    try {
        const descElement = reviewElement.querySelector('.desc_review');
        return descElement ? descElement.textContent.trim() : '';
    } catch (error) {
        console.error('리뷰 텍스트 추출 실패:', error.message);
        return '';
    }
}

// 날짜 추출 함수
function extractDate(reviewElement) {
    try {
        const dateElement = reviewElement.querySelector('.txt_date');
        return dateElement ? dateElement.textContent.trim() : '';
    } catch (error) {
        return '';
    }
}

// 배지 추출 함수
function extractBadges(reviewElement) {
    try {
        const badgeElements = reviewElement.querySelectorAll('.badge_point');
        return Array.from(badgeElements).map(badge => badge.textContent.trim());
    } catch (error) {
        return [];
    }
}

// 한 장소의 리뷰 크롤링
async function crawlPlaceReviews(page, placeUrl, maxReviews = 20) {
    try {
        console.log(`  접속 중: ${placeUrl}`);
        
        // 페이지 접속
        await page.goto(placeUrl, { 
            waitUntil: 'networkidle',
            timeout: 30000 
        });

        // 리뷰 리스트가 로드될 때까지 대기
        await page.waitForSelector('.list_review', { timeout: 10000 }).catch(() => {
            console.log('  리뷰가 없는 장소입니다.');
            return null;
        });

        // 리뷰 데이터 추출
        const reviews = await page.evaluate((maxReviews) => {
            const reviewElements = document.querySelectorAll('.list_review > li');
            const extractedReviews = [];

            for (let i = 0; i < Math.min(reviewElements.length, maxReviews); i++) {
                const reviewEl = reviewElements[i];

                // 별점
                const stars = reviewEl.querySelectorAll('.wrap_grade .figure_star.on').length;

                // 리뷰 텍스트
                const descEl = reviewEl.querySelector('.desc_review');
                const reviewText = descEl ? descEl.textContent.trim() : '';

                // 날짜
                const dateEl = reviewEl.querySelector('.txt_date');
                const date = dateEl ? dateEl.textContent.trim() : '';

                // 배지
                const badgeEls = reviewEl.querySelectorAll('.badge_point');
                const badges = Array.from(badgeEls).map(b => b.textContent.trim());

                if (reviewText) {
                    extractedReviews.push({
                        star: stars,
                        review: reviewText,
                        date: date,
                        badges: badges
                    });
                }
            }

            return extractedReviews;
        }, maxReviews);

        console.log(`  ✓ 리뷰 ${reviews.length}개 수집 완료`);
        return reviews;

    } catch (error) {
        console.error(`  ✗ 크롤링 실패: ${error.message}`);
        return [];
    }
}

// 평균 별점 계산
function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.star, 0);
    return (sum / reviews.length).toFixed(2);
}

// 별점 분포 계산
function calculateRatingDistribution(reviews) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(review => {
        if (review.star >= 1 && review.star <= 5) {
            distribution[review.star]++;
        }
    });
    return distribution;
}

// 메인 크롤러 함수
async function main() {
    console.log('=== 제주도 장소 리뷰 크롤러 시작 ===\n');

    // JSON 파일 읽기
    if (!fs.existsSync(CONFIG.inputFile)) {
        console.error(`❌ ${CONFIG.inputFile} 파일을 찾을 수 없습니다.`);
        console.log('먼저 collect-places.html을 실행하여 장소 데이터를 수집하세요.');
        return;
    }

    const rawData = fs.readFileSync(CONFIG.inputFile, 'utf-8');
    const placesData = JSON.parse(rawData);
    const places = placesData.places || placesData;

    console.log(`📍 총 ${places.length}개 장소 발견`);
    console.log(`⚙️  설정: 배치 크기 ${CONFIG.batchSize}, 최대 리뷰 ${CONFIG.maxReviewsPerPlace}개\n`);

    // 브라우저 실행
    const browser = await chromium.launch({ 
        headless: CONFIG.headless,
        args: ['--disable-blink-features=AutomationControlled']
    });
    
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    const page = await context.newPage();

    // 진행 상황 변수
    let processedCount = 0;
    let successCount = 0;
    const startTime = Date.now();

    // 각 장소 크롤링
    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        
        console.log(`\n[${i + 1}/${places.length}] ${place.name}`);
        
        // 리뷰 크롤링
        const reviews = await crawlPlaceReviews(
            page, 
            place.review_url, 
            CONFIG.maxReviewsPerPlace
        );

        // 결과를 원본 객체에 추가
        if (reviews && reviews.length > 0) {
            place.reviews = reviews;
            place.review_count = reviews.length;
            place.average_rating = parseFloat(calculateAverageRating(reviews));
            place.rating_distribution = calculateRatingDistribution(reviews);
            successCount++;
        } else {
            place.reviews = [];
            place.review_count = 0;
            place.average_rating = 0;
            place.rating_distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        }

        place.crawled_at = new Date().toISOString();
        processedCount++;

        // 배치 단위로 중간 저장
        if ((i + 1) % CONFIG.batchSize === 0 || i === places.length - 1) {
            const outputData = {
                ...placesData,
                places: places,
                crawl_info: {
                    last_updated: new Date().toISOString(),
                    total_places: places.length,
                    processed: processedCount,
                    with_reviews: successCount
                }
            };

            fs.writeFileSync(
                CONFIG.outputFile,
                JSON.stringify(outputData, null, 2),
                'utf-8'
            );
            
            console.log(`\n💾 중간 저장 완료 (${processedCount}/${places.length})`);
        }

        // Rate Limiting
        await page.waitForTimeout(CONFIG.delayBetweenPages);
    }

    await browser.close();

    // 최종 통계
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000 / 60).toFixed(2);

    console.log('\n=== 크롤링 완료 ===');
    console.log(`총 처리: ${processedCount}개`);
    console.log(`리뷰 수집 성공: ${successCount}개`);
    console.log(`소요 시간: ${duration}분`);
    console.log(`결과 파일: ${CONFIG.outputFile}`);

    // 카테고리별 통계
    const categoryStats = {};
    places.forEach(place => {
        const cat = place.category_name_kr || '기타';
        if (!categoryStats[cat]) {
            categoryStats[cat] = { total: 0, with_reviews: 0, total_reviews: 0 };
        }
        categoryStats[cat].total++;
        if (place.review_count > 0) {
            categoryStats[cat].with_reviews++;
            categoryStats[cat].total_reviews += place.review_count;
        }
    });

    console.log('\n카테고리별 통계:');
    Object.entries(categoryStats).forEach(([cat, stats]) => {
        console.log(`  ${cat}: ${stats.with_reviews}/${stats.total}개 (리뷰 ${stats.total_reviews}개)`);
    });
}

// 에러 핸들링과 함께 실행
main().catch(error => {
    console.error('\n❌ 치명적 오류 발생:', error);
    process.exit(1);
});
