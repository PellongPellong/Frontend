// Base32 디코딩 함수
function base32ToHex(base32) {
    const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let hex = "";

    for (let i = 0; i < base32.length; i++) {
        const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
        bits += val.toString(2).padStart(5, '0');
    }

    for (let i = 0; i + 4 <= bits.length; i += 4) {
        const chunk = bits.substr(i, 4);
        hex = hex + parseInt(chunk, 2).toString(16);
    }
    return hex;
}

// OTP 생성 함수
function generateOTP(secret) {
    const epoch = Math.round(new Date().getTime() / 1000.0);
    const time = Math.floor(epoch / 30).toString(16).padStart(16, '0');
    const key = base32ToHex(secret);

    const hmac = new jsSHA("SHA-1", "HEX");
    hmac.setHMACKey(key, "HEX");
    hmac.update(time);
    const hmacResult = hmac.getHMAC("HEX");

    const offset = parseInt(hmacResult.substr(hmacResult.length - 1), 16);
    const binary = ((parseInt(hmacResult.substr(offset * 2, 8), 16) & 0x7fffffff) % 1000000).toString();
    return binary.padStart(6, '0');
}

// OTP 검증 함수
function verifyOTP(inputOTP, secret) {
    const generatedOTP = generateOTP(secret);
    return inputOTP === generatedOTP;
}

// 사용자 입력 OTP 검증 실행 함수
function checkOTP() {
    const otpInput = document.getElementById('otpInput');
    const inputOTP = otpInput.value;
    const secret = "WDS7YIJMLUG2W3AD"; // 예시 비밀 키 (Base32로 인코딩된 문자열)

    let check = /^[0-9]+$/;
    if (!inputOTP) {
        alert('인증번호를 입력해주세요.');
        return;
    } else if (!check.test(inputOTP)) {
        alert('인증번호는 숫자만 가능합니다.');
        return;
    }

    const result = verifyOTP(inputOTP, secret);
    const otp_value = result ? "valid" : "invalid"
    sessionStorage.setItem('otp_certification', otp_value);

    if (otp_value == "valid") {

        document.getElementById('otp_layer').classList.remove('open');
        document.querySelector(".manage-btn").style.display = "none";
        document.querySelector(".logout-btn").style.display = 'block';
        document.querySelector("#iframe-widget").contentWindow.otp_certificate("CREATE")
        otpInput.value = '';
        alert("OTP 인증 완료")
    } else {
        alert("OTP 인증번호가 일치하지 않습니다.")
        otpInput.focus()
    }
    otpInput.value = '';

}

function otp_logout() {
    sessionStorage.removeItem("otp_certification");
    document.querySelector(".manage-btn").style.display = "block"
    document.querySelector(".logout-btn").style.display = 'none';
    document.querySelector("#iframe-widget").contentWindow.otp_certificate("DELETE")


}