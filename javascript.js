const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#enterEmail");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

submit.addEventListener("click", loginSubmit);
function loginSubmit(){
  document.getElementById("fpara").innerText = "";
  document.getElementById("Lpara").innerText = "";
  document.getElementById("Epara").innerText = "";
  document.getElementById("passwordP").innerText = "";

  if(firstname.value === ""){
    document.getElementById("fpara").innerText = "Enter first name";
  }

  if(lastname.value === ""){
     document.getElementById("Lpara").innerText = "Enter last name";
  }
  
  if(!email.value.includes("@")){
    document.getElementById("Epara").innerText = `Error you missed the symbol ${"@"}`;
    if(email.value === ""){
      document.getElementById("Epara").innerText = "Hey You forget to enter email id";
    }
  }

  else {
    document.getElementById("Epara").innerText = "Looks good";
  }

  if(password.value.length < 8){
    document.getElementById("passwordP").innerText = "Password should be atlleast 8 characters";
   if(password.value === ""){
      document.getElementById("passwordP").innerText = "Password is Empty😐";
    }
  }

 

  else {
    document.getElementById("submit").innerText = "Login Successfully ✔"
  }

}