let myData = {
    name : "Peter",
    city : "Karachi",
    age : "59",
    salary : "10000",
    grade : "C"
};

// Two method of gettintg data from an object 
//first method
console.log(myData["city"]);
console.log(myData["age"]);

//Sec method
console.log(myData.salary);
console.log(myData.grade);
console.log(myData);

//Getting data with using loop

for(let i in myData){
    console.log(i , myData[i]);
}

//ARITHEMETIC OPERATORS

let a = 50
let b= 54
 
console.log("The sum of a+b is : ", a+b);
console.log("The sum of a-b is : ", a-b);
console.log("The sum of a*b is : ", a*b);
console.log("The sum of a/b is : ", a/b);
console.log("The sum of a%b is : ", a%b);

//LOGICAL OPERATORS
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);



 console.log("END OPERATOR");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(!false && !false);

//comparison
// >Greater than
// < Less than
// < = Less than equal to
// >= Greater than equal to

// == it means equal
// === equal with type check 

