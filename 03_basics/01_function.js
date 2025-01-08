function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("B");
    console.log("O");
    console.log("O");
}
//sayMyName();
//Parameter -number1 number2
//arguments-3,null
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

//addTwoNumbers(3, null)
// function addTwoNumbers(number1,number2){
//     let result=number1 + number2
//     return result;
    
// }
// const result=addTwoNumbers(3,5)
// console.log("Result:", result);
function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Khusboo"))
//console.log(loginUserMessage())
const user={
    username: "Khushboo",
    price: 199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user)
handleobject({
    username:"Khushboo",
    price:400
})
const myNewArray=[200,400,600]
function returnSecondValue(getArray){
      return getArray[1]
}
console.log(returnSecondValue(myNewArray))