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
