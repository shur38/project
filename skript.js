// function showFirstMessage(){

//   console.log('hello world');
// }
// showFirstMessage();
// let num =20;
// let num1 = 21;
// function showFirstMessage(text){

//   console.log(text);
//    num  = num1 + 20;
// }
// showFirstMessage('hello world'+num+num1);
// console.log(num);
// function calc(a, b){
//   return(a+b);
// }
// console.log(calc(3,6));
// console.log(calc(55,12));

// function ret(){
//   let num = 50*2;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum)
// const logger = function (){

//   console.log('hello world');

// };
// logger();

// const calc = (a,b) =>{
//   console.log('1');
//   return a+b
// }
// console.log(calc(33,33));



// let a = 3
// function addTwo(x) {
// let ret = x + 2
//  return ret
// }
//  let b = addTwo(a)
//  console.log(b)

//  let val1 = 2
// function multiplyThis(n) {
//   let ret = n * val1
//   return ret
// }
// let multiplied = multiplyThis(6)
// console.log('example of scope:', multiplied)

// let val = 7
//  function createAdder() {
//    function addNumbers(a, b) {
//     let ret = a + b
//      return ret
//    }
//    return addNumbers
//   }
//  let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum);

//  function createCounter() {
//     let counter = 0
//      const myFunction = function() {
//      counter = counter + 1
//      return counter
//     }
//    return myFunction
//    }
//    const increment = createCounter()
//   const c1 = increment()
//   const c2 = increment()
//   const c3 = increment()
//   console.log('example increment', c1, c2, c3)

//   let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

// let c = 4;
// const addX = x => n => n + x;
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

// function sayHi(name) {
//   var phrase = "Привет, " + name;
//   console.log( phrase );
// }

// sayHi('Вася');
