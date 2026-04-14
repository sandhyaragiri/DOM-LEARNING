/* const myheading = document.querySelector("h1");
myheading.innerText = "Welcome to the club";


const numbers = document.querySelectorAll("ul > li");
numbers.forEach((item)=>{
  item.style.background = "green";
  item.style.color= "white";
}); */

/* function changeToggle(){
  document.body.classList.toggle("darktoggle");
  if(document.body.classList.contains("darktoggle")){
    return document.getElementById("btnText").innerText= "☀️ Light Mode";
  }

  else{
    return document.getElementById("btnText").innerText = "🌙 Dark Mode";
  };
} */

/* let btn = document.getElementById("btn");

btn.addEventListener("click", changeText);
  function changeText(){
    if(btn.innerText === "Click Me"){
      btn.innerText = "Hello Sandhya!";
    }

    else {
      btn.innerText = "Click Me";
    }
  } */

   let btn = document.querySelectorAll(".btn");

   btn.forEach((button)=>{
    button.addEventListener("click", function(e){
      e.target.innerText = "Clicked!";
    });
   });
  
