let grade = prompt("Enter Your Grade");
console.log(grade);
console.log(typeof(grade));

let per = parseInt(prompt("Enter Your Per"));
console.log(per);
console.log(typeof(per));

//turnary operation

let result = grade === "A" && per === 90 || grade ==="B" && per === 80 ||  grade ==="C" && per === 70 ? "PASS" : "FAIL";
console.log(result);