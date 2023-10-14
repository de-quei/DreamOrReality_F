//비밀번호 일치와 영문자,숫자포함 메세지의 우선순위가 필요할듯
document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".nextBtn");
    const errorMessage = document.querySelector(".error-message");
  
    nextButton.addEventListener("click", function (event) {
      event.preventDefault(); // 이벤트 기본 동작을 중지합니다.
  
      const inputID = document.querySelector(".inputID");
      const inputPW = document.querySelector(".inputPW");
      const checkPW = document.querySelector(".checkPW");
  
      // 비밀번호 양식 확인 (숫자와 문자 둘 다를 포함해야 함)
      const hasNumber = /\d/.test(inputPW.value);
      const hasLetter = /[a-zA-Z]/.test(inputPW.value);
  
      if (inputID.value === "" || inputPW.value === "" || checkPW.value === "") {
        errorMessage.textContent = "입력되지 않은 정보가 있습니다.";
  
        // 1초 후에 에러 메시지를 숨깁니다.
        setTimeout(function () {
          errorMessage.textContent = "";
        }, 1000);
      } else if (!(hasNumber && hasLetter)) {
        errorMessage.textContent = "비밀번호는 숫자와 문자를 모두 포함해야 합니다.";
  
        // 1초 후에 에러 메시지를 숨깁니다.
        setTimeout(function () {
          errorMessage.textContent = "";
        }, 1000);
      } else if (inputPW.value !== checkPW.value) {
        errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
  
        // 1초 후에 에러 메시지를 숨깁니다.
        setTimeout(function () {
          errorMessage.textContent = "";
        }, 1000);
      } else {
        // 모든 필드가 올바르게 입력되었을 때 다음 페이지로 이동
        window.location.href = "join2.html";
      }
    });
  });