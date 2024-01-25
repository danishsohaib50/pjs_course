let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "HELLO WORLD"
elem[0].style.backgroundColor = "orange"
elem[0].style.height = "300px"


     let bal = document.createElement('input');
     bal.className = "form-control mt-3"
     elem[0].appendChild(bal);

     bal.addEventListener('keyup' , myFunc);
     function myFunc(){
        console.log("FUNCTION IMPLEMENT ON INPUT FIELD")
     }
     
     let newBtn = document.createElement('button');

     elem[0].appendChild(newBtn);
     newBtn.innerHTML = "CLICK HERE";
     newBtn.className = "btn btn-dark mt-3";
     newBtn.style.display = "block";
     newBtn.style.fontsize = "24px";
     newBtn.style.letterSpacing = "14px";
     newBtn.style.margin = "0px auto";
     
     newBtn.addEventListener('click' , pencil);
         function pencil(){
             console.log("The Button is clicked!")
             newBtn.textContent = "Wow!";
             bal.value = ""
         }

