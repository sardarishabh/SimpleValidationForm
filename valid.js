//Validtion Code For Inputs
/* eslint-disable no-unused-vars */
function validation() {
    var email = document.forms["form"]["email"];
    localStorage.setItem("Email", email);
    var password = document.forms["form"]["password"];
    localStorage.setItem("Password", password);
  
    var email_error = document.getElementById("entry_error");
    var pass_error = document.getElementById("pass_error");
  
    var response = false;
  
    if (email.value.length >= 10) {
      email.style.border = "1px solid silver";
      email_error.style.display = "none";
      response = true;
    } else {
      email.style.border = "1px solid red";
      email_error.style.display = "block";
      email.focus();
      
      response = false;
    }
  
    if (password.value.length >= 8) {
      password.style.border = "1px solid silver";
      pass_error.style.display = "none";
      response = true;
    } else {
      password.style.border = "1px solid red";
      pass_error.style.display = "block";
      password.focus();
      
      response = false;
    }
    return response;
  }
  /* eslint-enable no-unused-vars */
  
