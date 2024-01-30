let btn = document.getElementById('togglebtn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');
btn.addEventListener('click' , toogleBulb);
function toogleBulb(){
    if(btn.textContent.includes('On') && mq.textContent.includes('On')){
        bulb.src = "./on.png.png";
        btn.textContent = "Turn Off";
        mq.textContent = "Turn Off";
        btn.className = `btn btn-outline-success`;
        btn.style.boxShadow = " 3px 3px 4px 4px green";
        mq.style.color = "yellow";
        mq.style.boxShadow = " 3px 3px 4px 4px green";
        bulb.style.boxShadow = " 3px 3px 4px 4px green";
        bulb.style.padding = "10px";


    }
    else{
        bulb.src = "off.png.png";
        btn.textContent = "Turn On";
        mq.textContent = "Turn On";
        btn.className = `btn btn-outline-danger`;
        btn.style.boxShadow = " 3px 3px 4px 4px red";
        mq.style.color = "yellow";
        mq.style.boxShadow = " 3px 3px 4px 4px red";
        bulb.style.boxShadow = " 3px 3px 4px 4px red";
        bulb.style.padding = "10px";
    }
}