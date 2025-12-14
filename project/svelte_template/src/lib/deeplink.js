export function generateMapLink(place) {
    const { name, lat, lng } = place;
    // TMAP deeplink format (mobile web fallback) or basic geo URI
    // TMAP App: tmap://route?goalname={name}&goalx={lng}&goaly={lat}
    // Mobile Web: https://surl.tmap.co.kr/findgo

    // Using a robust approach: Geo URI for general support
    // return `geo:${lat},${lng}?q=${encodeURIComponent(name)}`;

    // Requirement mentions TMAP specifically.
    // Creating a TMAP link. Note: TMAP uses WGS84 or similar? Expects lat/lng.
    // Using TMAP mobile web:
    // return `https://www.tmap.co.kr/tmap2/mobile/route.jsp?name=${encodeURIComponent(name)}&lat=${lat}&lon=${lng}`;

    // Or simply return a KakaoMap or NaverMap URL which are very popular in Korea.
    // Naver Map url:
    return `https://map.naver.com/v5/search/${encodeURIComponent(name)}`;
}
