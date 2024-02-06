setInterval(function(){
    document.write("WOW")
},2000)

setTimeout(function(){
    console.log("PASHA")
},3000)

//PROMISEE

// let Promiseone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log({"THIS IS FIRST PROMISE"})
// })
// })

//second
let Promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "PASHA" , email : "PAsha@YAhoo.com"})
    },3000)
})

Promisetwo.then(function(user){
    console.log(user);
})



let Promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "pasha" , passward : "23654"})
    },4000)
})

Promisethree.then(function(myuser){
    return myuser.passward;
})
.then(function(apple){
    console.log(apple)
})


let Promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name : "CAMEL" , password : "147896325"})
        }else{
            reject("ERROR : SOMETHINHG WENT WRONG")
        }
    },4000)
})



Promisefour.then(function(userdata){
    return userdata.name
})
.then(function(mydata){
    console.log(mydata);
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("FINALLY!")
})