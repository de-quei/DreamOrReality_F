function togglePassword() {
    var passwordInput = document.querySelector('.inputPW');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function submitLogin() {
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
  
    axios
    .post("http://3.34.190.40:3000/user/login", {
      userid: id,
      pw: pw,
    })
    .then((response) => {
      const token = response.data.token;
  
      localStorage.setItem("token", token);
      localStorage.setItem("userid", id);
  
      console.log("로그인 성공");
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {      
        console.log("아이디와 비번일치 X")
      } else {
        console.log("오류뭐노")
        console.error("Error during logi?n:", error.message);
      }
    });
  
  
  }