//Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB connected`);
    
// }() // error


// named iife
// (function chai(){
//     console.log(`DB connected`);
    
// } )() // DB connected

//no name iife
( (name) => {
    console.log(`DB connected Two ${name}`);
} ) ("hitesh") // DB connected Two hitesh
