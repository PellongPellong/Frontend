


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang='ko'>
<head> 


<!-- Google tag (gtag.js) -->








<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">

<title>실시간 유동인구 확인서비스</title>

<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon" href="/bigdatamap/html/jeju/widget/img/favicon.ico" />


<!-- CSS -->
<link rel="stylesheet" href="/bigdatamap/html/jeju/widget/css/common.css"/>

<!-- JS -->
<script src="/bigdatamap/pcms/common/pluigs/jQuery/jquery-3.6.1.min.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/common.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/loading.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/addrlink.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/search.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/top10.js"></script>

<script src="/bigdatamap/js/mobile/mobile.js"></script>
<script src="/bigdatamap/pcms/common/pluigs/swiper/swiper.min.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/timeWeather.js"></script>
<script>
	$.ajax({
		url : "/bigdatamap/html/jeju/widget/js/districtAnalysis.json",
		success : (response) => {
			// console.log(response)
		},
		error : (error) => {
			console.log(error)
		}
	})
</script>

<script>
//특수문자, 특정문자열(sql예약어) 제거
function checkSearchedWord(obj){
	obj.value = obj.value+" ";
	//특수문자 제거
	if(obj.value.length >0){
		var expText = /[%=><]/ ;
		if(expText.test(obj.value) == true){
			obj.value = obj.value.split(expText).join(""); 
		}
		//체크 문자열
		var sqlArray = new Array( //sql 예약어
			"OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC", "UNION",  "FETCH", "DECLARE", "TRUNCATE"
		);
		
		var regex;
		var regex_plus ;
		for(var i=0; i<sqlArray.length; i++){
			regex = new RegExp("\\s" + sqlArray[i] + "\\s","gi") ;
			if (regex.test(obj.value)) {
				obj.value =obj.value.replace(regex, "");
				alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
			}
			regex_plus = new RegExp( "\\+" + sqlArray[i] + "\\+","gi") ;
			if (regex_plus.test(obj.value)) {
				obj.value =obj.value.replace(regex_plus, "");
				alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
			}
		}
	}
	return obj.value = obj.value;
}
let searchType = 0
function mainSearchReceive(text, type){
	searchType = type;
	searchUrlJuso(text)
}
function searchUrlJuso(text){
	var frm;
	if(!text){
		frm = document.AKCFrm;
	}else{
		frm = {keyword : {value : text}}
	}
	
	if (searchType == 0) {
		// 키워드 검색 부분
		keywordSearchPlay(frm.keyword.value);
		return;
	}
	let filterText;
	filterText = checkSearchedWord(frm.keyword).indexOf("제주") < 0 ? "제주 " : "";
	frm.keyword.value =  filterText + checkSearchedWord(frm.keyword); // 특수문자 및 sql예약어 제거, 20160912
	$("#keyword").val(validateJuso($("#keyword").val())); //공백 및 특수문자 제거
	$("#keyword").val(regExpCheckJuso($("#keyword").val()));
	console.log("키워드 검색 ", frm.keyword.value)


	$.ajax({
			url :"https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do"  //인터넷망
		,type:"post"
		,data:$("#AKCFrm").serialize()
		,dataType:"jsonp"
		,crossDomain:true
		,success:function(xmlStr){
			if(navigator.appName.indexOf("Microsoft") > -1){
				var xmlData = new ActiveXObject("Microsoft.XMLDOM");
				xmlData.loadXML(xmlStr.returnXml)
			}else{
				var xmlData = xmlStr.returnXml;
			}
			console.log("여기 여기 여기 ========")
			console.log($("#AKCFrm").serialize())
			$(".popSearchNoResult").html("");
			var errCode = $(xmlData).find("errorCode").text();
			var errDesc = $(xmlData).find("errorMessage").text();
			
			var totalCount = $(xmlData).find("totalCount").text();
			var currentPage = $(xmlData).find("currentPage").text();
			
			if( parseInt(totalCount) > 1000 && currentPage == "1" )
				alert("검색 결과가 너무 많습니다(1,000건 이상)\n검색어 예를 참조하여 검색하시기 바랍니다.");
			
			if(errCode != "0"){
				alert(errDesc);
			}else{
				if(xmlStr != null){
					makeList(xmlData, frm.keyword.value );
				}
			}
		}
			,error: function(xhr,status, error){
				//alert("에러발생");
				alert("검색에 실패하였습니다. \n 다시 검색하시기 바랍니다.");
			}
	});
		
}


function makeList(xmlStr, word){
	
	var htmlStr = "";
	if( $(xmlStr).find("totalCount").text() == "0" ){
	
		htmlStr +=' ';
		htmlStr += '<div class="popSearchNoResult">';
		htmlStr += '	검색된 내용이 없습니다.';
		htmlStr += '</div>';
		htmlStr += '<button type="button">확인</button>'
		htmlStr +='';
		document.querySelector(".popSearchInput").value = "";
	}else{
		
		htmlStr += '<p class="text-guide">도로명주소 검색 결과 <strong>('+ $(xmlStr).find("totalCount").text()+'건)</strong></p>';
		htmlStr += '<table class="data-table" style="margin-top:3px;">';
		htmlStr += '	<caption>검색 결과</caption>';
		htmlStr += '	<colgroup>';
		htmlStr += '		<col style="width:8%">';
		htmlStr += '		<col style="width:72%">';
		htmlStr += '		<col style="width:20%">';
		htmlStr += '	</colgroup>';
		htmlStr += '	<thead>';
		htmlStr += '		<tr>';
		htmlStr += '			<th scope="col">No</th>';
		htmlStr += '			<th scope="col">도로명주소</th>';
		htmlStr += '			<th scope="col">우편번호</th>';
		htmlStr += '		</tr>';
		htmlStr += '	</thead>';
		htmlStr += '	<tbody>';
				
		var currentPage = parseInt($(xmlStr).find("currentPage").text());
		var countPerPage = parseInt($(xmlStr).find("countPerPage").text());
		var listNum = (currentPage*countPerPage)-(--countPerPage);
		var num = 0; 
		$(xmlStr).find("juso").each(function(){
		
			num++;
			
			var resultType = "4"; 

			htmlStr += '<tr>';
			htmlStr +='	<td class="subj" style="text-align:center;">'+(listNum++)+'</td>';
			
			if( resultType == "1" ){

				htmlStr += '	<td class="subj" colspan="2" id="roadAddrTd'+num+' style="text-align:left; padding-left: 5px; line-height: 0.5em;">';
				htmlStr += '		<a href="javascript:setMaping(\''+num+'\')">';
				htmlStr += '			<div tabindex="6">';
				htmlStr += '				<div id="roadAddrDiv'+num+'"><b>'+$(this).find('roadAddr').text()+'</b></div>';
				htmlStr += '			</div>';
				htmlStr += '		</a>';
				htmlStr += '		<span id="jibunAddrDiv'+num+'" style="display:none;">'+$(this).find('jibunAddr').text()+'</span>';
				htmlStr +='		<div id="roadAddrPart1Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart1').text()+'</div>';
				htmlStr +='		<div id="roadAddrPart2Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart2').text()+'</div>';
				htmlStr +='		<div id="engAddrDiv'+num+'" style="display:none;">'+$(this).find('engAddr').text()+'</div>';
				htmlStr += '	</td>';
				
			}else if( resultType == "2" ){
				
				htmlStr += '	<td class="subj" colspan="2" id="roadAddrTd'+num+' style="text-align:left; padding-left: 5px; line-height: 0.5em;">';
				htmlStr += '		<a href="javascript:setMaping(\''+num+'\')">';
				htmlStr += '			<div tabindex="6">';
				htmlStr += '				<div id="roadAddrDiv'+num+'"><b>'+$(this).find('roadAddr').text()+'</b></div>';
				htmlStr +='				<span style="font-size:11px;">[지번] <span id="jibunAddrDiv'+num+'">'+$(this).find('jibunAddr').text()+'</span></span>';
				htmlStr += '			</div>';
				htmlStr += '		</a>';
				htmlStr +='		<div id="roadAddrPart1Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart1').text()+'</div>';
				htmlStr +='		<div id="roadAddrPart2Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart2').text()+'</div>';
				htmlStr +='		<div id="engAddrDiv'+num+'" style="display:none;">'+$(this).find('engAddr').text()+'</div>';
				htmlStr += '	</td>';				
				
			}else if( resultType == "3" ){
				
				htmlStr +='	<td class="subj" id="roadAddrTd'+num+' style="text-align:left; padding-left: 5px; line-height: 0.5em;">';
				htmlStr +='		<a href="javascript:setMaping(\''+num+'\')">';
				htmlStr +='			<div tabindex="6">';
				htmlStr +='				<div id="roadAddrDiv'+num+'"><b>'+$(this).find('roadAddr').text()+'</b></div>';
				htmlStr +='			</div>';
				htmlStr +='		</a>';
				htmlStr += '		<span id="jibunAddrDiv'+num+'" style="display:none;">'+$(this).find('jibunAddr').text()+'</span>';
				htmlStr +='		<div id="roadAddrPart1Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart1').text()+'</div>';
				htmlStr +='		<div id="roadAddrPart2Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart2').text()+'</div>';
				htmlStr +='		<div id="engAddrDiv'+num+'" style="display:none;">'+$(this).find('engAddr').text()+'</div>';
				htmlStr +='	</td>';		

			}else{
				
				htmlStr +='	<td class="subj" id="roadAddrTd'+num+' style="text-align:left; padding-left: 5px; line-height: 0.5em;">';
				htmlStr +='		<a href="javascript:setMaping(\''+num+'\')">';
				htmlStr +='			<div tabindex="6">';
				htmlStr +='				<div id="roadAddrDiv'+num+'"><b>'+$(this).find('roadAddr').text()+'</b></div>';
				htmlStr +='				<span style="font-size:11px;">[지번] <span id="jibunAddrDiv'+num+'">'+$(this).find('jibunAddr').text()+'</span></span>';
				htmlStr +='			</div>';
				htmlStr +='		</a>';
				htmlStr +='		<div id="roadAddrPart1Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart1').text()+'</div>';
				htmlStr +='		<div id="roadAddrPart2Div'+num+'" style="display:none;">'+$(this).find('roadAddrPart2').text()+'</div>';
				htmlStr +='		<div id="engAddrDiv'+num+'" style="display:none;">'+$(this).find('engAddr').text()+'</div>';
				htmlStr +='	</td>';

			}
			
			htmlStr +='	<td class="subj" style="text-align:center" id="zipNoTd'+num+'"> ';
			htmlStr +='		<div id="zipNoDiv'+num+'">'+$(this).find('zipNo').text()+'</div>';
			htmlStr +='	</td>';
			htmlStr +='	<input type="hidden" id="admCdHid'+num+'" value="'+$(this).find('admCd').text()+'">';
			htmlStr +='	<input type="hidden" id="rnMgtSnHid'+num+'" value="'+$(this).find('rnMgtSn').text()+'">';
			htmlStr +='	<input type="hidden" id="bdMgtSnHid'+num+'" value="'+$(this).find('bdMgtSn').text()+'">';
			htmlStr +='	<input type="hidden" id="detBdNmListHid'+num+'" value="'+$(this).find('detBdNmList').text()+'"> ';
			htmlStr +='	<input type="hidden" id="bdNmHid'+num+'" value="'+$(this).find('bdNm').text()+'"> ';
			htmlStr +='	<input type="hidden" id="bdKdcdHid'+num+'" value="'+$(this).find('bdKdcd').text()+'"> ';
			htmlStr +='	<input type="hidden" id="siNmHid'+num+'" value="'+$(this).find('siNm').text()+'">';
			htmlStr +='	<input type="hidden" id="sggNmHid'+num+'" value="'+$(this).find('sggNm').text()+'"> ';
			htmlStr +='	<input type="hidden" id="emdNmHid'+num+'" value="'+$(this).find('emdNm').text()+'"> ';
			htmlStr +='	<input type="hidden" id="liNmHid'+num+'" value="'+$(this).find('liNm').text()+'"> ';
			htmlStr +='	<input type="hidden" id="rnHid'+num+'" value="'+$(this).find('rn').text()+'"> ';
			htmlStr +='	<input type="hidden" id="udrtYnHid'+num+'" value="'+$(this).find('udrtYn').text()+'">  ';
			htmlStr +='	<input type="hidden" id="buldMnnmHid'+num+'" value="'+$(this).find('buldMnnm').text()+'">  ';
			htmlStr +='	<input type="hidden" id="buldSlnoHid'+num+'" value="'+$(this).find('buldSlno').text()+'">  ';
			htmlStr +='	<input type="hidden" id="mtYnHid'+num+'" value="'+$(this).find('mtYn').text()+'">  ';
			htmlStr +='	<input type="hidden" id="lnbrMnnmHid'+num+'" value="'+$(this).find('lnbrMnnm').text()+'">   ';
			htmlStr +='	<input type="hidden" id="lnbrSlnoHid'+num+'" value="'+$(this).find('lnbrSlno').text()+'">  ';
			htmlStr +='	<input type="hidden" id="emdNoHid'+num+'" value="'+$(this).find('emdNo').text()+'">  ';
			htmlStr +='</tr> ';				
		});
		
		htmlStr += '	</tbody>';
		htmlStr += "</table>";
		htmlStr += '<div class="paginate" id="pageApi"></div>';
	}
	
	$(".search-layer").addClass("open");
	$(".popSearchNoResult").html(htmlStr);
	$(".popSearchInput").blur()
	$("#searchContentBox").css("height","");
	$('.popSearchNoResult button').on('click', function() {
		console.log("테스트")
		$('.search-layer').removeClass('open');
	})

	pageMake(xmlStr);
}

// xml타입 페이지 처리 (주소정보 리스트 makeList(xmlData); 다음에서 호출) 
function pageMake(xmlStr){
	var total = $(xmlStr).find("totalCount").text(); // 총건수
	var pageNum =  $(xmlStr).find("currentPage").text();// 현재페이지
	var paggingStr = "";
	if(total < 1){
	}else{
		var PAGEBLOCK= 10;
		var pageSize= parseInt( $(xmlStr).find("countPerPage").text() );
		var totalPages = Math.floor((total-1)/pageSize) + 1;
		var firstPage = Math.floor((pageNum-1)/PAGEBLOCK) * PAGEBLOCK + 1;		
		if( firstPage <= 0 ) firstPage = 1;		
		var lastPage = firstPage-1 + PAGEBLOCK;
		if( lastPage > totalPages ) lastPage = totalPages;		
		var nextPage = lastPage+1 ;
		var prePage = firstPage-5 ;
		
		if(totalPages > 1){
			if( firstPage > PAGEBLOCK ){
				paggingStr +=  "<a class='skip prev' href='javascript: $(\"#currentPage\").val("+prePage+");  searchUrlJuso();'>이전으로</a>  " ;
			}
			for( i=firstPage; i<=lastPage; i++ ){
				if( pageNum == i )
					paggingStr += "<strong>" + i + "</strong>  ";
				else
					paggingStr += "<a href='javascript:$(\"#currentPage\").val("+i+");  searchUrlJuso();'>" + i + "</a>  ";
			}		
			if( lastPage < totalPages ){
				paggingStr +=  "<a class='skip next' href='javascript: $(\"#currentPage\").val("+nextPage+");  searchUrlJuso();'>다음으로</a>";
			}
		}
		$("#pageApi").html(paggingStr);
	
	}	
}	


function setParent(){
	var rtRoadAddr = $.trim($("#rtRoadAddr").val());
	var rtAddrPart1 = $.trim($("#rtAddrPart1").val());
	var rtAddrPart2 = $.trim($("#rtAddrPart2").val());
	var rtEngAddr = $.trim($("#rtEngAddr").val());
	var rtJibunAddr = $.trim($("#rtJibunAddr").val());
	var rtAddrDetail = $.trim($("#rtAddrDetail").val());
	var rtZipNo = $.trim($("#rtZipNo").val());
	var rtAdmCd = $.trim($("#rtAdmCd").val());
	var rtRnMgtSn = $.trim($("#rtRnMgtSn").val());
	var rtBdMgtSn = $.trim($("#rtBdMgtSn").val());
	var rtDetBdNmList = $.trim($("#rtDetBdNmList").val());
	var rtBdNm = $.trim($("#rtBdNm").val());
	var rtBdKdcd = $.trim($("#rtBdKdcd").val());
	var rtSiNm = $.trim($("#rtSiNm").val());
	var rtSggNm = $.trim($("#rtSggNm").val());
	var rtEmdNm = $.trim($("#rtEmdNm").val());
	var rtLiNm = $.trim($("#rtLiNm").val());
	var rtRn = $.trim($("#rtRn").val());
	var rtUdrtYn = $.trim($("#rtUdrtYn").val());
	var rtBuldMnnm = $.trim($("#rtBuldMnnm").val());
	var rtBuldSlno = $.trim($("#rtBuldSlno").val());
	var rtMtYn = $.trim($("#rtMtYn").val());
	var rtLnbrMnnm = $.trim($("#rtLnbrMnnm").val());
	var rtLnbrSlno = $.trim($("#rtLnbrSlno").val());
	var rtEmdNo = $.trim($("#rtEmdNo").val());
	
	var rtRoadFullAddr = rtAddrPart1;
	if(rtAddrDetail != "" && rtAddrDetail != null){
		rtRoadFullAddr += ", " + rtAddrDetail;
	}
	if(rtAddrPart2 != "" && rtAddrPart2 != null){
		rtRoadFullAddr += " " + rtAddrPart2;
	}
	
	// IE에서 opener관련 오류가 발생하는 경우, 부모창에서 지정한 이름으로 opener를 재정의
	if(opener == null || opener == undefined) opener = window.open("", "jusoPopup");
	
	opener.jusoCallBack(rtRoadFullAddr, rtAddrPart1, rtAddrDetail, rtAddrPart2, rtEngAddr, rtJibunAddr, rtZipNo, rtAdmCd, rtRnMgtSn, rtBdMgtSn, rtDetBdNmList, rtBdNm, rtBdKdcd, rtSiNm, rtSggNm, rtEmdNm, rtLiNm, rtRn, rtUdrtYn, rtBuldMnnm, rtBuldSlno, rtMtYn, rtLnbrMnnm, rtLnbrSlno, rtEmdNo);
	window.open("about:blank","_self").close();
	
}

function setMaping(idx){
	
	var roadAddr = $("#roadAddrDiv"+idx).text()
	var addrPart1 = $("#roadAddrPart1Div"+idx).text();
	console.log(addrPart1)
	// if(addrPart1.indexOf("제주") < 0){
	// 	return;
	// }
	var addrPart2 = $("#roadAddrPart2Div"+idx).text();
	var engAddr = $("#engAddrDiv"+idx).text();
	var jibunAddr = $("#jibunAddrDiv"+idx).text();
	var zipNo = $("#zipNoDiv"+idx).text();
	var admCd = $("#admCdHid"+idx).val();
	var rnMgtSn = $("#rnMgtSnHid"+idx).val();
	var bdMgtSn = $("#bdMgtSnHid"+idx).val();
	var detBdNmList = $("#detBdNmListHid"+idx).val();
	var bdNm = $("#bdNmHid"+idx).val();
	var bdKdcd = $("#bdKdcdHid"+idx).val();
	var siNm = $("#siNmHid"+idx).val();
	var sggNm = $("#sggNmHid"+idx).val();
	var emdNm = $("#emdNmHid"+idx).val();
	var liNm = $("#liNmHid"+idx).val();
	var rn = $("#rnHid"+idx).val();
	var udrtYn = $("#udrtYnHid"+idx).val();
	var buldMnnm = $("#buldMnnmHid"+idx).val();
	var buldSlno = $("#buldSlnoHid"+idx).val();
	var mtYn = $("#mtYnHid"+idx).val();
	var lnbrMnnm = $("#lnbrMnnmHid"+idx).val();
	var lnbrSlno = $("#lnbrSlnoHid"+idx).val();
	var emdNo = $("#emdNoHid"+idx).val();
	// console.log("1: " + roadAddr)
	// console.log("2: " + zipNo)
	// console.log("3: " + admCd)
	// console.log("4: " + rnMgtSn)
	// console.log("5: " + bdMgtSn)
	// console.log("6: " + detBdNmList)
	// console.log("7: " + bdNm)
	// console.log("8: " + bdKdcd)
	// console.log("9: " + siNm)
	// console.log("10: " + sggNm)
	// console.log("11: " + emdNm)
	// console.log("12: " + liNm)
	// console.log("13: " + rn)
	// console.log("14: " + udrtYn)
	// console.log("15: " + buldMnnm)
	// console.log("16: " + buldSlno)
	// console.log("17: " + mtYn)
	// console.log(Nm)
	$("#rtRoadAddr").val(roadAddr);
	$("#rtAddrPart1").val(addrPart1);
	$("#rtAddrPart2").val(addrPart2);
	$("#rtEngAddr").val(engAddr);
	$("#rtJibunAddr").val(jibunAddr);
	$("#rtZipNo").val(zipNo);
	$("#rtAdmCd").val(admCd);
	$("#rtRnMgtSn").val(rnMgtSn);
	$("#rtBdMgtSn").val(bdMgtSn);
	$("#rtDetBdNmList").val(detBdNmList);
	$("#rtBdNm").val(bdNm);
	$("#rtBdKdcd").val(bdKdcd);
	$("#rtSiNm").val(siNm);
	$("#rtSggNm").val(sggNm);
	$("#rtEmdNm").val(emdNm);
	$("#rtLiNm").val(liNm);
	$("#rtRn").val(rn);
	$("#rtUdrtYn").val(udrtYn);
	$("#rtBuldMnnm").val(buldMnnm);
	$("#rtBuldSlno").val(buldSlno);
	$("#rtMtYn").val(mtYn);
	$("#rtLnbrMnnm").val(lnbrMnnm);
	$("#rtLnbrSlno").val(lnbrSlno);
	$("#rtEmdNo").val(emdNo);

	$(".search-layer").removeClass('open');
	// console.log(rtBdNm)
	// console.log(addrPart1 + "주소");
	addressSearchPlay(addrPart1)
}


function init(){
	var browerName = navigator.appName;
	var browerAgent = navigator.userAgent;
	self.resizeTo(650, 620);
	
}

$(document).ready(function(){
	placeHolder();
	$('#searchRdNm').bind('click', function(){
			$('.popWrap3').css({'display':'block','top':'21px','right':'121px'});
		});
	$('#popupClose2').bind('click', function(){
			$('.popWrap3').css('display','none');
		});
	
	$('.choIdx a').click(function(event){
		$('.choIdx a').removeClass('on');
		if($(this).hasClass('off')){
			return;
		}else{
			$(this).addClass('on');
			event.preventDefault();
			var target =this.hash;
			var $target=$(target);
			var top = $(target).position().top-106;
			if(prevPosition ==0){
				$('#roadNameList2').scrollTop(top);
				prevPosition = top;
			}else{
				$('#roadNameList2').scrollTop(prevPosition+top);
				prevPosition = prevPosition + top;
			}
			
			if($('#roadNameList2')[0].scrollHeight - $('#roadNameList2').scrollTop() == $('#roadNameList2').innerHeight()){
				prevPosition = $('#roadNameList2').scrollTop();
			}
		}
	});
	$('#roadNameList2').children().css('display','none');
	$('#roadNameList2').scroll(function(){prevPosition = this.scrollTop;});
});
window.onresize = placeHolderPoint;

function placeHolderPoint(){
	$(":input[placeholderTxt]").each(function(){
		var labelId = "label"+this.id;
		var objVal = $(this).val();
		var placeTxt = $(this).attr("placeholderTxt");
		var left = parseInt($(this).offset().left);
		var top = parseInt($(this).offset().top);
		
		$("#"+labelId).css({"left":left+"px","top":top+"px"});
	});
}

function placeHolder(){
	$(":input[placeholderTxt]").each(function(){
		var labelId = "label"+this.id;
		var objVal = $(this).val();
		var placeTxt = $(this).attr("placeholderTxt");
		var left = parseInt($(this).offset().left);
		var top = parseInt($(this).offset().top);
		$(this).after("<label for='"+this.id+"' id='"+labelId+"' style ='position:absolute;left:"+left+"px;top:"+top+"px; font-size:15px;color:#1898d2;font-weight:bold; padding-left:10px;padding-top:11px;'><b>"+placeTxt+"</b></label>");
		
		if(objVal !=""){
			$("#"+labelId).hide();
		}
		
		$(this).focus(function(){
			$("#"+labelId).hide();
		});
		
		$(this).blur(function(){ 
			if($(this).val() == ""){
				$("#"+labelId).show();
			}
		});
	});
}

function addrDetailChk(){
	var evtCode = (window.netscape) ? ev.which : event.keyCode;
	if(evtCode == 63 || evtCode == 35 || evtCode == 38 || evtCode == 43 || evtCode == 92 || evtCode == 34){ // # & + \ " 문자제한
		alert('특수문자 ? # & + \\ " 를 입력 할 수 없습니다.');
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	}
}

function addrDetailChk1(obj){
	if(obj.value.length > 0){
		var expText = /^[^?#&+\"\\]+$/;
		if(expText.test(obj.value) != true){
			alert('특수문자 ? # & + \\ " 를 입력 할 수 없습니다.');
			obj.value="";
		}
	}
}

function popClose(){
	window.close();
}

function addrJuminRenew(idx){
	$("#detDivX"+idx).show();
	$("#detListDivX"+idx).show();
	$("#detDiv"+idx).hide();
	
}
function addrJuminRenewX(idx){
	$("#detDivX"+idx).hide();
	$("#detListDivX"+idx).hide();
	$("#detDiv"+idx).show();
	
}

$(function(){
		var docHeight = $("#resultList").height(); // 결과 DIV 높이 가져옴
		
		$("#keyword").on("keydown", function(event){
				if (event.which == 13) {    
			event.keyCode = 0;  
			$("#currentPage").val(1);
			searchUrlJuso(); 
		}
		});
});

function trim(strSource) {
	return strSource.replace(/(^\s*)|(\s*$)/g, ""); 
}

$(function() {
	$('.search-layer').on('click', function() {
		$(this).removeClass('open');
	})

	$('.search-layer .popSearchNoResult').on('click', function(e) {
		e.stopPropagation();
	})
})
</script>

</head>

<body onload="init();" oncontextmenu="return false" onselectstart="return false" ondragstart="return false" class ="visualSection scroll-visible"> 
	<div id="map" style="display:none"></div>
	
	<div class="body-inner">
		<form action="/bigdatamap/jeju/widget/search_list.do" name="submitForm" method="get">
			<input type="hidden" name="searchType" class="searchType" value="address">
			<input type="hidden" name="keyword" class="keyword" value="" />
		</form>

		<form name="rtForm" id="rtForm" method="post">
			<input type="hidden" name="inputYn" id="inputYn" value="Y"/>  
			<input type="hidden" name="roadFullAddr" id="roadFullAddr"/>  
			<input type="hidden" name="roadAddrPart1" id="roadAddrPart1"/>
			<input type="hidden" name="roadAddrPart2" id="roadAddrPart2"/>
			<input type="hidden" name="engAddr" id="engAddr"/>            
			<input type="hidden" name="jibunAddr" id="jibunAddr"/>        
			<input type="hidden" name="zipNo" id="zipNo"/>                
			<input type="hidden" name="addrDetail" id="addrDetail"/>
			<input type="hidden" name="admCd" id="admCd" />
			<input type="hidden" name="rnMgtSn" id="rnMgtSn" />
			<input type="hidden" name="bdMgtSn" id="bdMgtSn" />
			
			<input type="hidden" name="detBdNmList" id="detBdNmList" /> 
			<input type="hidden" name="bdNm" id="bdNm" /> 
			<input type="hidden" name="bdKdcd" id="bdKdcd" /> 
			<input type="hidden" name="siNm" id="siNm" /> 
			<input type="hidden" name="sggNm" id="sggNm" /> 
			<input type="hidden" name="emdNm" id="emdNm" /> 
			<input type="hidden" name="liNm" id="liNm" /> 
			<input type="hidden" name="rn" id="rn" /> 
			<input type="hidden" name="udrtYn" id="udrtYn" /> 
			<input type="hidden" name="buldMnnm" id="buldMnnm" /> 
			<input type="hidden" name="buldSlno" id="buldSlno" /> 
			<input type="hidden" name="mtYn" id="mtYn" /> 
			<input type="hidden" name="lnbrMnnm" id="lnbrMnnm" /> 
			<input type="hidden" name="lnbrSlno" id="lnbrSlno" /> 
			<input type="hidden" name="emdNo" id="emdNo" /> 
		</form>
	
		<div class="intro-wrap2">
			<div class="title-area">
				<span class="logo"></span>
				<strong class="title1">제주관광 빅데이터서비스 플랫폼</strong>
				<p class="title2">내가 가려는 곳 인근에 <br>지금 몇 명이 있는지 <br>궁금하다면 검색해보세요!</p>
			</div>
	
			<!-- 관광지 검색 -->
			<form name="AKCFrm" id="AKCFrm" method="post" >
				<input type="hidden" name="iframe"  value=""   />
				<input type="hidden" name="confmKey" value="U01TX0FVVEgyMDIyMDIyNDE0NDE1MzExMjI3NjQ=" />
				<input type="hidden" name="encodingType"   value=""   />
				<input type="hidden" name="cssUrl" value="" />
				<input type="hidden" name="resultType" value="4" />
				<input type="hidden" name="currentPage" id="currentPage" value="1" />
				<input type="hidden" name="countPerPage" value="5" />
				
				<input type="hidden" name="rtRoadAddr"  id="rtRoadAddr"  />
				<input type="hidden" name="rtAddrPart1" id="rtAddrPart1" />
				<input type="hidden" name="rtAddrPart2" id="rtAddrPart2" />
				<input type="hidden" name="rtEngAddr"   id="rtEngAddr"   />
				<input type="hidden" name="rtJibunAddr" id="rtJibunAddr" />
				<input type="hidden" name="rtZipNo" id="rtZipNo" />
				<input type="hidden" name="rtAdmCd" id="rtAdmCd" />
				<input type="hidden" name="rtRnMgtSn" id="rtRnMgtSn" />
				<input type="hidden" name="rtBdMgtSn" id="rtBdMgtSn" />
				
				<input type="hidden" name="rtDetBdNmList" id="rtDetBdNmList" />
				<input type="hidden" name="rtBdNm" id="rtBdNm" />
				<input type="hidden" name="rtBdKdcd" id="rtBdKdcd" />
				<input type="hidden" name="rtSiNm" id="rtSiNm" />
				<input type="hidden" name="rtSggNm" id="rtSggNm" />
				<input type="hidden" name="rtEmdNm" id="rtEmdNm" />
				<input type="hidden" name="rtLiNm" id="rtLiNm" />
				<input type="hidden" name="rtRn" id="rtRn" />
				<input type="hidden" name="rtUdrtYn" id="rtUdrtYn" />
				<input type="hidden" name="rtBuldMnnm" id="rtBuldMnnm" />
				<input type="hidden" name="rtBuldSlno" id="rtBuldSlno" />
				<input type="hidden" name="rtMtYn" id="rtMtYn" />
				<input type="hidden" name="rtLnbrMnnm" id="rtLnbrMnnm" />
				<input type="hidden" name="rtLnbrSlno" id="rtLnbrSlno" />
				<input type="hidden" name="rtEmdNo" id="rtEmdNo" />
				
				<input type="hidden" name ="searchType"    id="searchType" />
				<input type="hidden" name ="dsgubuntext"   id="dsgubuntext" />   
				<input type="hidden" name ="dscity1text"   id="dscity1text" />
				<input type="hidden" name ="dscounty1text" id="dscounty1text" />
				<input type="hidden" name ="dsemd1text"    id="dsemd1text" />
				<input type="hidden" name ="dsri1text"     id="dsri1text" />
				<input type="hidden" name ="dsrd_nm1text"  id="dsrd_nm1text" />
				<input type="hidden" name ="dssan1text"    id="dssan1text" />
		
				<div class="pop-address-search">
					<div class="pop-address-search-inner">
						<div id="searchContentBox">
							<fieldset>
								<legend>도로명주소 검색</legend>
		
								<div class="search-type-box">
									<div class="search-type left">
										<span class="type-text">키워드</span>
										<button type="button" class="search-type-btn" data-type="0">
											<span class="btn-inner"></span>
										</button>
										<span class="type-text">주소</span>
									</div>
									<p class="search-tip">카테고리 검색 기능을 활용해보세요!</p>
								</div>
	
		
								<!-- <div class="search-type">
									<button type="button" class="search-type-btn keyword-search-btn active" data-type="0">
										<span>키워드검색</span>
									</button>
									<button type="button" class="search-type-btn address-search-btn" data-type="1">
										<span>주소검색</span>
									</button>
								</div> -->
								<div class="search-wrap">
									<input type="text" class="popSearchInput" title="검색어를 입력하세요" name="keyword" id="keyword" value=""  tabindex="1" placeholder="축제 및 관광지명을 입력해주세요">
									<input type="submit" title="검색"  tabindex="2" class="search-btn">
								</div>
								<!-- <a class="close" href="javascript:popClose();" title="창닫기" tabindex="3">닫기</a> -->
							</fieldset>
							
							<!-- nodata -->
							<div class="search-layer">
								<div class="popSearchNoResult"></div>
							</div>
							<!-- //nodata -->
						</div>
					</div>
		
				</div>
			</form>
	
			<!-- 축제 진행/예정 목록 -->
			<!-- <div class="festival-util util-wrap">
				<button type="button" class="write-btn">등록</button>
			</div> -->

			<div class="swiper festival-wrap">
				<div class="swiper-wrapper">
					
				</div>
			</div>
	
			<!-- 실시간 관광객 유동인구 정보 -->
			<form name="listForm" class="list-form" action="/bigdatamap/jeju/widget/view.do">
				<input type="hidden" class="placeName" name="placeName" value=""/>
				<input type="hidden" class="position" name="position" value=""/>
				<input type="hidden" class="addr" name="addr" value=""/>
				<input type="hidden" class="round" name="round" value=""/>
				<input type="hidden" class="startDate" name="startDate" value=""/>
				<input type="hidden" class="endDate" name="endDate" value=""/>
				<input type="hidden" class="adjustRange" name="adjustRange" value=""/>
	 
				<div class="heading">
					<strong class="heading-title">실시간 관광객 유동인구 정보</strong>
					<span class="data-date"></span> 
				</div>
	
				<div class="data-tab">
					<span class="btn-area" data-pos="left"></span>
					<button type="button" class="data-tab-btn active" data-tab="attraction" data-pos="left">핫플레이스</button>
					<button type="button" class="data-tab-btn" data-tab="festival" data-pos="right">제주축제</button>
				</div>
	
				<div class="info-container">
					<div id="attraction" class="info-content active">
						<ul class="location-list"></ul>
					</div>
	
					<div id="festival" class="info-content">
						<ul class="location-list"></ul>
					</div>
				</div>
	
			</form>
		</div>
	</div>

	<script>
		let timeElement = document.querySelector(".data-date");
		timeReset(null, timeElement);

		// 시간제어
		function timeReload(data) {
			let split_res = data.split('^')[0];
			new_today_hour = split_res.slice(8, 10);
			new_today_min = split_res.slice(10, 12);
			let timeDom = document.querySelector(".data-date");
			timeDom.textContent = "Update. " + new_today_hour + "시 " + new_today_min + "분 기준";
		}
	</script>

	<script>
		// otp_인증
		const utilWrap = document.querySelector(".util-wrap");
		function otp_certificate(MODE){
			const otp_certify = sessionStorage.getItem("otp_certification")
			if(MODE == "DELETE"){
				document.querySelector(".write-btn").remove();
				return;
			}
			if(!otp_certify) return;
			
				const writeBtn = document.createElement("button")
				writeBtn.classList.add("write-btn")
				writeBtn.textContent = "등록";
				writeBtn.addEventListener("click", (e) => {
					window.parent.utilControl("write")
				})
				utilWrap.append(writeBtn)
				return;
		}
		otp_certificate()
	</script>

	<script>
		onLoading({type: 'page', element: 'body'}) // 페이지 로딩 시작
		setTimeout(() => {
			offLoading({type: 'page', element: 'body'}); // 페이지 로딩 제거
		}, 300);

		// 축제, 명소 탭메뉴
		{
			let buttons = document.querySelectorAll('.data-tab-btn');
			let buttonArea = document.querySelector('.data-tab .btn-area');
			buttons.forEach(button => {
				button.addEventListener('click', (e) => {
					let target = e.currentTarget;
					let id = target.getAttribute('data-tab');
					let targetContent = document.querySelector('#' + id);
					let otherButton = document.querySelector('.data-tab-btn.active');
					let otherContent = document.querySelector('.info-container .info-content.active');
					otherButton.classList.remove('active');
					otherContent.classList.remove('active');
					target.classList.add('active');
					targetContent.classList.add('active');

					let position = target.getAttribute('data-pos');
					buttonArea.setAttribute('data-pos', position);
				})
			})
		}
	</script>

	<script>
		document.querySelector("#AKCFrm").addEventListener("submit", (e) => {
			e.preventDefault();
			$('#currentPage').val(1);
			searchUrlJuso();
		})
	</script>

	<script>
		// 디바이스 너비 1024 감지 호출
    document.addEventListener("DOMContentLoaded", function () {
			let checkInterval = setInterval(() => {
				if (window.parent.checkWidth) {
					window.parent.checkWidth();
					clearInterval(checkInterval);
				}
			}, 100);
    })
	</script>

	<script>
		let touchmoving = false;
		window.addEventListener("touchstart", (e) => {
			touchmoving = false;
		})
		window.addEventListener("touchmove", (e) => {
			touchmoving = true;
		})
	</script>
	
	<script>
		
		
		let slideList = []
		function dataReload() {
			slideList = []
			dataLoad()
		}
		const attractionList = new LocationListLoad({
				wrap : "attraction",
				url : "/bigdatamap/api/kor/tour/ranking.do"
    	})
		const festivalList = new LocationListLoad({
				wrap : "festival",
				url : "/bigdatamap/api/kor/festival/ranking.do"
    	})
		async function dataLoad() {
			onLoading({type: 'class', element: '.data-date', theme: 'white', size: 'small'});
			onLoading({type: 'class', element: '.festival-wrap', theme: 'white'});
			onLoading({type: 'class', element: '.intro-wrap2 .info-container', theme: 'white'});

			let dateDom = null;
			let timeDom = document.querySelector(".data-date");
			//	await timeReset(dateDom, timeDom);
			offLoading({type: 'class', element: '.data-date'});

			// locationListLoad("attraction", "https://jeju.live.acego.net/api/siteCd/tour/ranking.do");
			// locationListLoad("festival", "https://jeju.live.acego.net/api/siteCd/festival/ranking.do");
			

			attractionList.init();
			festivalList.init();

			offLoading({type: 'class', element: '.intro-wrap2 .info-container'});
			
			await slideListLoad();
			offLoading({type: 'class', element: '.festival-wrap'});

			slideListDiff();

      let checkInterval = setInterval(() => {
        if (window.parent.pageReloadOffLoading) {
          window.parent.pageReloadOffLoading('.pc-wrap');
          clearInterval(checkInterval);
        }
      }, 100);
		}
		dataLoad()

		function slideListDiff() {
			slideList.forEach((data, i) => {
				let diffClass
				$.getJSON("https://jeju.mms.gislab.co.kr/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X="+ data.lot+"&Y="+data.lat+"&R=" + data.radius, (response) => {
						try {
							
							const dataArray = response;
							let popSum = dataArray[8].OUT_NOW_POP_SUM;

							const dayOfWeek = new Date().getDay();
							let popDiffNum = Math.round((popSum - dataArray[dayOfWeek + 9][new_today_hour]) / 10) * 10;

							// let popDiffNum = Math.round((dataArray[0].NOW_POP_SUM - dataArray[dayOfWeek+1][new_today_hour]));
							let popDiff = (popSum / dataArray[dayOfWeek + 9][new_today_hour]);
							diffClass = popDiff > 1 ? "up" : "down";
							diffClass = popDiff == 1 ? null : diffClass;
							// 지난주대비 <span class="num">1.09</span>배 <span class="diff">증가</span>
							let diffText = popDiff > 1 ? " 증가" : " 감소"
							diffText = popDiff == 1 ? "로 동일" : diffText;

							const p = document.querySelectorAll(".swiper-slide .festival-link")[i].querySelector('.district-contrast');

							// if(dataArray[dayOfWeek+1][new_today_hour] == 0){
							// 	p.style.display = "none"
							// 	throw new Error("데이터 0")

							// }
							
							if (diffClass != null && Math.abs(popDiffNum) != 0 && popDiffNum ) {
								document.querySelectorAll(".swiper-slide .festival-link")[i].classList.add(diffClass)
								p.innerHTML = `지난주대비 <span class="num">약 ${(Math.abs(popDiffNum)).toLocaleString()}명 ${diffText}</span>`
							} else {
								p.innerHTML = `지난주대비 <span class="num">동일</span>`
							}

							p.classList.add('onload');
							setTimeout(() => {
								p.classList.remove('part-loading');
								p.classList.remove('white');
								p.classList.remove('small');
								p.classList.remove('onload');
							}, 300);

						} catch (error) {

							console.log("Slide API 에러")
							console.log(error)
						}
					})
			})

			// $.ajax({
			// 	async : false,
			// 	url : "https://mms.gislab.co.kr:444/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X="+ data.lot+"&Y="+data.lat+"&R=" + data.radius,
			// 	success : (response) => {
			// 		try{
			// 			const dataArray = JSON.parse(response)
			// 			let popSum = dataArray[0].NOW_POP_SUM;

			// 			const dayOfWeek = new Date().getDay();
			// 			let popDiff = (dataArray[0].NOW_POP_SUM / dataArray[dayOfWeek+1][today_hour]).toFixed(2);
			// 			let diffClass = popDiff > 1? "up" : "down";
			// 			diffClass = popDiff == 0? "" : diffClass;
			// 			console.log("333==")
			// 			console.log(diffClass)
			// 			return diffClass
			// 		}catch(error){
			// 			console.log("Slide API 에러")
			// 			console.log(error)
			// 		}
			// 	},

			// 	error : (error) => {
			// 		console.log(error)
			// 	}
			// })
		}

		function slideListLoad() {
			const slideWrap = document.querySelector(".swiper .swiper-wrapper")
			return new Promise((resolve, reject) => {


				$.ajax({
					url: "/bigdatamap/html/jeju/widget/js/districtAnalysis.json",
					success: (response) => {
						let position =
							"유림공원/127.357405/36.3600817/대전 유성구 어은로 27/대전 유성구 봉명동 496-39/150/https://place.map.kakao.com/8478591"
						const responseArray = response.dataList;
						slideList = responseArray;
						let tags = ""
						responseArray.forEach((response, i) => {

							tags += createSlideDom(response, i)
						})
						slideWrap.innerHTML = tags

						var swiper = new Swiper(".festival-wrap", {
							slidesPerView: 2,
							spaceBetween: 7,
							freeMode: true,
							on: {
								touchMove: function () {
									// 슬라이드가 움직일 때는 클릭 이벤트 방지
									document.querySelector('html').classList.add('dragging');
								},
								touchEnd: function () {
									// 슬라이드 이동이 끝나면 클릭 이벤트 활성화
									document.querySelector('html').classList.remove('dragging');
								}
							}
						});

						function createSlideDom(response, index) {
							return `
							<div class="swiper-slide">
								<a href="#" class="festival-link" data-id = ${index} >
									<div class="link-img">
										<img src=${response.imgUrl} alt="">
									</div>
									<strong class="link-title">
										${response.title}
									</strong>
									<p class="district-contrast part-loading white small"></p>
								</a>
							</div>
							`
						}

						slideWrap.querySelectorAll(".swiper-slide").forEach((slide, i) => {
							slide.querySelector(".festival-link").addEventListener("click", function (e) {
								e.preventDefault();
								window.parent.offSpecialButton();
								const id = this.dataset.id;
								document.listForm.placeName.value = encodeURI(responseArray[id].title);
								document.listForm.position.value = encodeURI(responseArray[id].lot + "/" +
									responseArray[id].lat);
								document.listForm.addr.value = encodeURI("" + "/" + responseArray[id].addr);
								document.listForm.round.value = encodeURI(responseArray[id].radius);
								let data = {
									address_name: responseArray[id].addr,
									category_group_code: "",
									category_group_name: "",
									category_name: "",
									distance: "",
									id: "",
									phone: "",
									place_name: responseArray[id].title,
									place_url: responseArray[id].url ? responseArray[id].url : "",
									road_address_name: "",
									x: responseArray[id].lot,
									y: responseArray[id].lat,
								}

								listForm.submit();
								
								mainMapMove(data)
								
								window.parent.removeCategoryActive();
							})
						})

						resolve(null)
						// console.log("777-====")
						// console.log(positionArray)
						// document.listForm.placeName.value = encodeURI(positionArray.name);
						// document.listForm.position.value = encodeURI(positionArray.positionY+"/"+positionArray.positionX);
						// document.listForm.addr.value = encodeURI(positionArray.address_load+"/"+positionArray.address);
						// document.listForm.round.value = encodeURI(positionArray.radius);
						// let data = {
						// 	address_name : positionArray.address,
						// 	category_group_code : "",
						// 	category_group_name : "",
						// 	category_name : "",
						// 	distance : "",
						// 	id : "",
						// 	phone : "",
						// 	place_name : positionArray.name,
						// 	place_url : positionArray.url,
						// 	road_address_name : positionArray.address_load,
						// 	x : positionArray.positionY,
						// 	y : positionArray.positionX,
						// }

						// listForm.submit()
						// mainMapMove(data)
					},
					error: (error) => {
						console.log(error)
					}
				})
			})
		}

		function mainMapMove(data) {
				const pathNameArray = window.parent.location.pathname.split("/");
			if (pathNameArray[pathNameArray.length-1].indexOf("main") > -1) {
				console.log('555-')
				console.log("써치 페이지")
				window.parent.iframeUpDown(true)
				window.parent.mainMapMove(data)
			}
		}
	</script>

	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=16aee8026b34cc1e29ec0969827cecb5&libraries=services,clusterer,drawing"></script>

	<script>
		// 지도 생성
		var mapContainer = document.getElementById('map'),
			mapOption = {
				center: new kakao.maps.LatLng(33.450701, 126.570667),
				level: 3
			};
		var map = new kakao.maps.Map(mapContainer, mapOption);

		// 주소를 좌표로 변환
		var geocoder = new kakao.maps.services.Geocoder();
		// 	function furmSubmit(addr){
		// 		geocoder.addressSearch(addr, function(result, status) {
		// 		if (status === kakao.maps.services.Status.OK) {
		// 			// positionList.push({x : result[0].x, y : result[0].y, address})
		// 			document.submitForm.x.value = result[0].x
		// 			document.submitForm.y.value = result[0].y
		// 			document.submitForm.addr.value = addr
		// 			document.submitForm.submit()
		// 		}
		// 	}
		// )}

		// const searchTypeButtons = document.querySelectorAll("#searchContentBox .search-type-btn");
		// searchTypeButtons.forEach((searchBtn, i) => {
		// 	searchBtn.addEventListener("click", (e) => {
		// 		searchType = parseInt(searchBtn.getAttribute("data-type"));
		// 		const target = e.target.closest(".search-type-btn");
		// 		const otherLink = siblings(target);
		// 		target.classList.add('active');
		// 		otherLink[0].classList.remove('active');
		// 	})
		// })
		const searchTypeBox = document.querySelector(".search-type")
		const searchTypeButton = searchTypeBox.querySelector(".search-type-btn");
		searchTypeButton.addEventListener("click", (e) => {
			searchType = parseInt(searchTypeButton.getAttribute("data-type"));
			if (!searchType) {
				searchTypeButton.setAttribute("data-type", 1)
				searchTypeBox.classList.remove("left")
				searchTypeBox.classList.add("right")
				searchType = 1
			} else {
				searchTypeButton.setAttribute("data-type", 0)
				searchTypeBox.classList.remove("right")
				searchTypeBox.classList.add("left")
				searchType = 0
			}

			// const target = e.target.closest(".search-type-btn");
			// const otherLink = siblings(target);
			// target.classList.add('active');
			// otherLink[0].classList.remove('active');
		})

		function keywordSearchPlay(word) {
			let regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@#$%&\\\=\(\'\"]/g;
			let searchInput = document.querySelector('#searchContentBox .popSearchInput');
			if (word == "") {
				alert("검색어를 입력해주세요.");
				return false;
			} else if (word.length < 2) {
				alert("검색어는 두글자 이상 입력해주세요");
				return false;
			} else if (regExp.test(word)) {
				alert("특수문자는 사용하실 수 없습니다.");
				return false;
			}

			// 카카오 키워드 검색
			if (word.indexOf("제주") < 0) {
				word = '제주 ' + word;
			}
			document.submitForm.keyword.value = word;
			document.submitForm.searchType.value = "keyword";
			document.submitForm.submit();
		}

		function addressSearchPlay(address) {
			document.submitForm.keyword.value = address
			document.submitForm.searchType.value = "address"
			document.submitForm.submit()
		}

		// siblings 커스텀
		function siblings(element) {
			return [...element.parentElement.children].filter(value => value != element);
		}
	</script>

	<script>
		function mainSearch(word) {
			// document.querySelector(".search-wrap #keword").value = word
			
			// document.querySelector("#AKCFrm").submit()
		}
	</script>

	<script>
		const urlParams = new URL(location.href).searchParams;

		const mainSearchWord = decodeURI(urlParams.get('searchWord'));
		const mainSearchType = decodeURI(urlParams.get('searchType'));

		if (mainSearchType == "keyword" || mainSearchType == "address") {

			if (mainSearchType == "keyword") {
				searchType = 0;
				keywordSearchPlay(mainSearchWord);
			} else {
				searchType = 1;
				document.querySelector("#keyword").value = mainSearchWord;
				document.querySelector(".search-wrap .search-btn").click();
			}
			history.replaceState({}, null, location.pathname);
		}
	</script>
</body>
</html>
