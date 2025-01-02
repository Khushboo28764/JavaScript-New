//  Primitive
//  7 types : String, Number, Boolean, null, undefined,Symbol,
BigInt
const score = 100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

// Reference (Non primitive)
// Array, Objects, Functions
const hero=["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age:22,
}
// bracket ke andar wala part pura object hai
const myFunction=function(){
    console.log("Hello world")
}
// ++++++++++++++++++++++++++++++++++++++
// Stack(Primitive),Heap(Non-Primitive)
let myYoutubename=