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
      // window.location.href = "login.html";
    }
  });
});

function submit() {
  const userid = localStorage.getItem("userid");
  var graduyear = document.getElementById("graduyearSelect").value;
  var reality = document.getElementById("reality").value;

  console.log(userid);
  
  axios
  .post("http://3.34.190.40:3000/user/signup3", { 
      userid: userid,
      graduateyear: graduyear,
      reality: reality,
    })
    .then((response) => {
      console.log("Registration response:", response.data);
      if (response.data.message === "User registered successfully") {
        console.log("Registration successful!");
      }
    })
    .catch((e) => {
      console.error("Error during registration:", e);
    });
}
  