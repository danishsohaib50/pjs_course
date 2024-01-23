// DOM --->  DOCUMENT OBJECT MODEL
let elem = document.getElementById('second');
//console.log(elme);

//elem.innerHTML = "AN APPLE A DAY"
elem.textContent = "AN APPLE A DAY";
elem.style.backgroundColor = "red";
elem.style.textAlign = "center";
elem.classList.add('World');
elem.className = "Hello"
elem.classList.remove('Hello');

elem.classList.add('Wow');
elem.classList.add('great');
elem.classList.add('yes');

elem.classList.remove('yes');


// CLASS CONTIANER

let myDiv = document.getElementsByClassName('container');
myDiv[0].innerHTML = "Hello World";
myDiv[0].style.fonWeight = "bold";
myDiv[0].style.fontSize = "50px";

myDiv[0].classList.add ('Wow');
let newElem = document.createElement('p')

myDiv[0].appendChild(newElem);
// newElem[0].innerHTML = "Hello";

let newBtn = document.createElement('button');
myDiv[0].appendChild(newBtn);

newBtn.innerHTML = "Submit";
newBtn.style.fontSize = "24px";


//EVENTs
newBtn.addEventListener('click' , toggleBtn);
    function toggleBtn(){
        console.log("You clicked on me!")
        newBtn.innerHTML = "Wow";
    }








