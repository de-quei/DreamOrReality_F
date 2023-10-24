document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".nextBtn");
  const errorMessage = document.querySelector(".error-message");

  nextButton.addEventListener("click", function (event) {
      event.preventDefault(); // 이벤트 기본 동작을 중지합니다.

      const inputGENDER = document.querySelector(".inputGENDER");
      const inputCLASSOFGrade = document.querySelector(".inputGRADE");
      const inputCLASSOFClass = document.querySelector(".inputCLASS");
      const inputCLASSOFNumber = document.querySelector(".inputNUMBER");
      const inputDEPARTMENT = document.querySelector(".inputDEPARTMENT");

      if (inputGENDER.value === "" || 
          (inputCLASSOFGrade.value === "" || inputCLASSOFClass.value === "" || inputCLASSOFNumber.value === "") ||
          inputDEPARTMENT.value === "") {
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

function submit() {
    const userid = localStorage.getItem("userid");
    var gender = document.getElementById("genderSelect").value;
    var grade = document.getElementById("gradeSelect").value;
    var classNum = document.getElementById("classSelect").value;
    var number = document.getElementById("numberSelect").value;
    var department = document.getElementById("departmentSelect").value;
    
console.log(userid);

    axios
    .post("http://3.34.190.40:3000/user/signup2", {
        userid: userid,
        gender: gender,
        student_num: grade + classNum + number,
        department: department,
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