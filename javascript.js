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

  /*  let btn = document.querySelectorAll(".btn");

   btn.forEach((button)=>{
    button.addEventListener("click", function(e){
      e.target.innerText = "Clicked!";
    });
   }); */


   /* let btn = document.getElementById("btn");

   btn.addEventListener("click", changeRed);
   function changeRed(){
    btn.style.backgroundColor = "red";
   }

   btn.addEventListener("mouseover", changeColor);
    function changeColor(){

      btn.style.backgroundColor = "blue";
    }

    btn.addEventListener("mouseout", changeGreen);
    function changeGreen(){

      this.style.backgroundColor = "green";
    }

    btn.addEventListener("click", changeText);
    function changeText(){
      this.innerText = "Clicked!";
    }

    btn.addEventListener("dblclick", reset);
    function reset(){
      this.innerText = "Enter";
    } */
   
    /*   const btn = document.getElementById("btn");
      btn.addEventListener("mouseover", function(){
        btn.style.backgroundColor = "yellow";
        btn.style.color = "black";
      });

      btn.addEventListener("mouseout", function(){
        btn.style.backgroundColor = "purple";
        btn.style.color = "white";
      }); */

      /* const btn = document.getElementById("btn"); */
      const input = document.getElementById("input");
      const output = document.getElementById("output");

      input.addEventListener("input", function(){
        if(input.value === ""){
          output.innerText = "Start Typing bro";
          output.style.color = "black";
        }
           
         else if(input.value.length >= 10){
            output.style.color = "red";
            output.innerText = input.value;
          }
  
        else{
             output.innerText = input.value;
             output.style.color = "black";
        }
        
      })



      
   
      

   
