document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".nextBtn");
    const errorMessage = document.querySelector(".error-message");
  
    nextButton.addEventListener("click", function (event) {
      event.preventDefault(); // 이벤트 기본 동작을 중지합니다.
  
      const inputID = document.querySelector(".inputID");
      const inputPW = document.querySelector(".inputPW");
      const checkPW = document.querySelector(".checkPW");
  
      if (inputID.value === "" || inputPW.value === "" || checkPW.value === "") {
        errorMessage.textContent = "입력되지 않은 정보가 있습니다.";
  
        // 1초 후에 에러 메시지를 숨깁니다.
        setTimeout(function () {
          errorMessage.textContent = "";
        }, 1000);
      } else {
        // 비밀번호 일치 여부를 확인
        const inputPW = document.querySelector(".inputPW").value;
        const checkPW = document.querySelector(".checkPW").value;
  
        if (inputPW !== checkPW) {
          errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
  
          // 1초 후에 에러 메시지를 숨깁니다.
          setTimeout(function () {
            errorMessage.textContent = "";
          }, 1000);
        } else {
          // 모든 필드가 올바르게 입력되었을 때 다음 페이지로 이동
          window.location.href = "join2.html";
        }
      }
    });
  });
  