document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".nextBtn");
    const errorMessage = document.querySelector(".error-message");
  
    nextButton.addEventListener("click", function (event) {
      event.preventDefault(); // 이벤트 기본 동작을 중지합니다.
  
      const inputGRADUATEYEAR = document.querySelector(".inputGRADUATE-YEAR");
      const inputME = document.querySelector(".inputME");
  
      if (inputGRADUATEYEAR.value === "" || inputME.value === "") {
        errorMessage.textContent = "입력되지 않은 정보가 있습니다.";
  
        // 1초 후에 에러 메시지를 숨깁니다.
        setTimeout(function () {
          errorMessage.textContent = "";
        }, 1000);
      } else {
        // 모든 필드가 채워졌을 때 다음 페이지로 이동
        window.location.href = "join3.html";
      }
    });
  });
  