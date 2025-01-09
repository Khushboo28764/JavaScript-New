// Immediately Invoked Function Expression (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();
// why do we use iife 
(function chai(){
    console.log(`DB CONNECTED`)

})();
(()=>{
    console.log(`DB CONNECTED TWO`);
})();
((name)=>{
   console.log(`DB CONNECTED TWO  ${name}`);
})('Khushboo')

// Javascript Execution Context 
// {}- Global -this
// =>Global Execution Context
// =>Function Execution Context
// =>Eval Execution Context
// {}->Memory Creation Phase
// ->Exection Phase
