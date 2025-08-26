const user={
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
       console.log(`${this.username} , welcome to the website`);
       console.log(this);
       
         }
}
// user.welcomeMessage() // hitesh , welcome to the website
// user.username="sam"
// user.welcomeMessage() // sam , welcome to the website 
 
// console.log(this); // {} due to node environment

// function chai(){
//     let username="hitesh"
//     console.log(this.username); // undefined
    
// }
// chai() 


// const chai = function(){
//     let username="hitesh"
//     console.log(this.username); // undefined
    
// }

// const chai = () => {
//     let username="hitesh"
//     console.log(this); // {}
    
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo2 = (num1,num2) => num1 + num2 // implicit return
// console.log(addTwo2(5,3));

const myArray = [1,2,3,4,5]
myArray.forEach()
 
