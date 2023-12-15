//1) use strict run the code in strict mode syntax is strin "use strict " define at the top of page
// why it is string not a any key word because it supprt latest borsers if without string we writ as
// key word then old browser wont allow thats why if write in string they ignore it 
// when we use and declare the variable without define then it gave error if not use strict then js 
// consider it as global declare varibale and give output
// use strict dont allow to use reserved words or key word as varaible
// dont give to use eval as vaiable
"use strict"

let as=1;

console.log(1);

// ////////////////////////////call by reference and call by value
// all the primative data types pass as call bye value 
//all the non primative like object array and function are passssed by reference
{
let a=1

function foo(a){
    
    a=a+1;
}
foo(a);
console.log(a);} // give output as 1 because we passing it by value means we are passing copy of a not entire a
               // in call by value we cant able to modify that a when it declare outside function

var b={"ok":"navin"}

function foo1(b){
    b.ok="amol"
}

foo1(b);
console.log(b); // this give ans as { ok: 'amol' } because it is passing by reference and we can only edit 
// or modify the properites of the object not entire object 
// 
// if i want to change b value as b={"okk":"pavan"} it dont get updated and we get b value as declare 

///////////Spread Operator
///The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// spread operator and rest operator is same its diffrent on the context to use
//Use the spread operator to combine the following arrays.
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo]; //spread operator

navin(arraysCombined,"navin","pavan");
// rest operator 
function navin(...arraysCombined){
    
    console.log(arraysCombined); //[ [ 'a', 'b', 'c', 1, 2, 3 ], 'navin', 'pavan' ] now this is the rest operator

}

//templet string  it used to declare multiline string with backticks
// object literals

var val=24;
var name="navin";

var ss=`my 
name is
${name}
my age is ${val}`

console.log(ss);  //the below is the output see that is multiline and we can assign the values to it
// my
// name is
// navin
// my age is 24

//js is dynamically typed languge that means we need to able to define the type of variable wwhile declaring
// java is statically typed lanaguage that means we need to define the type of variable

// == and === 
// == means equality  it only check the value 
0 == "0" // this give us the true
// because in this case js will convert one value to another type
// it convert number zero to string zero then compare 
//String(0)=="0" is give the true
//=== strickt equality : it chcek both type and value fo it

//=== in stickt equality it dont conver the one value to type it comapre the type and value both as same tmie

// so strict equality we need to use


////////checking NAN the value is not a number is very difficult 
// because if you check NaN==1 it give false but it has one problem
// if check NaN==NaN is false thats not correct

// another one is using isNaN function
// it has it problem isNan("1") give false is correct
// but if you check isNaN("A") is give you the true because here its convert
// the String "A" to the numebr i.e Number("A") it give you NaN
// isNaN(NaN) is true


///////////////////////////////Scops in js

//1) glboal scope

var navin=1; // the var declare outside the function is global
window.moo=1;

//all global objects are property of the windwo object

function navin(){
    var n="navin"
}

console.log(n); // give the error because we decleard n whihch in block level or function level scope
// that we cant acess outside the function

for (var i=0;i<=0;i++){
    var j=5;

}
console.log(j); //will give the output or j's value as 5 because for loop is in the global scope so the
// variable declared in that is also global scope in nature


////////////Block levek scope
//let
{
    let n=5;
    {
        console.log(n); //gives the answer 5 because it declare asb block for outside not inside
    }
}
console.log(n); //give error becasue we use let inside the black so it is block level we cant change it

//const is the another key word that allow us to declare variable it also has block sope and we can not change its value


/////////Variable hosting
//a JavaScript mechanism where variables and function declarations are moved to the top of 
//their scope before code execution. Inevitably, this means that no matter where functions and variables 
//are declared, they are moved to the top of their scope regardless of whether their scope is global 
//or local..

console.log(n);
var n =1;

//so with variables hositing the declaration is moved to top of the scrope
// belwo code is example of hosting above code
var n;
console.log(n);
n=1


//this hosting is same as for function as well
navin();
function name(){
    var n;
    console.log(n);
    n=1
}
//after hositing
function name(){
    var n;
    console.log(n);
    n=1
}
navin();
//this hositing is not work if you assign the function to variable and and declare and define of that fun
//ex

var n;
console.log()
n();
n= ()=>console.log("1");

//it gives you the error as n is not function because js treat n as variable not function and do the hosting 


var n=true;
function foo(n){

    c=false+n
}
foo(n);
console.log(c);

//////////Scope chaining 
//The scope chain is how Javascript looks for variables. When looking for variables through the nested 
//scope, the inner scope first looks at its own scope. If the variable is not assigned locally, 
//which is inside the inner function or block scope, then JavaScript will look at the outer scope 
//of said function or block to find the variable.


function foo(){

    console.log(myVar);

}

function goo(){

    var myVar=1
    
    foo();

}
goo(); //Uncaught ReferenceError: myVar is not defined
//at foo (<anonymous>:3:17) this gives you error chaingng means its find the variable from one scope to another
//and lastly the global 


function goo(){
    var myVarr=1.
  
    function foo(){
        console.log(myVarr);
    }
    foo();
}

goo()  //

//imdatitlly invoc function 
// is used imaadatily  invoca the function 
//why we used this because without function if you declare one var vaiable it glboal 

var nn="navin" // so this is global variable declared in one js file

//if you use the same name variable in diffrent js file and acessing that variable
//then the valu of this wil assign to that so to enccounter this problem
// we round all the code into one function so that the declalred var should be functional scop

function nnn(){
    // all the page code
}

(function(){
   //here is the code and this syntack is imdatily invoc function
})();


//closure
//it reference to the vaiable outer of the functon
// closure is take the reference of the function when you return the function form anywhere
var foo=[]
for(var i=0;i<10;i++){

    foo[1]=function(){return i}

}

console.log(foo[0]) // All these output as 10 because closure pointing to the current value of i 
console.log(foo[1])// before you calling that function i value should be 10
console.log(foo[2])// thats why when we are returning the value of i then that is 10

// to solve this we use imate invoc function

var foo0=[]
for(var k=0;k<10;k++){
     (function(){
        var j=k
        foo[k]=function(){return j}

     })();
    

}

console.log(foo[0])// this value should be the 0 because it invocking there only at line 262

//Destructing Arrays

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");

//function discrituring

function na({x=0}){  //x=0 is defualt value if you can not pass anything to na function then console print defualt value zero
    console.log(x)
}

na({x:4}) //when you pass x:4 even if the defualt value there it will take assinged value

//Looping

//1 normal
// we can use break and continoue
// when we use break it will direclty come out of the for loop
// when we use continuoue the code after that key word not ecectute and it again to go run the loop/
// it simply skip the code which we right after continuse
for (var i=0;i<5;i++){

    console.log(i);
}

//if we define for inside loop and reuturn it exit from the function

function navinnn(){
    for (var i=0;i<5;i++){
        console.log(i)
        return
    }
}

navinnn();

//2 for each loop over arry

let arry=[1,3,4]
arry.push(5);
arry.forEach(function(value){
     console.log(value)
})

//3 forin loop desiged to loop over the objet property

let action={a:1,b:2}

for (let prop in action){
    console.log(prop);// a and b
  console.log(action[prop]);// values of a and b i.e 1 and 2
}

//we can use with array like bewlo one but x give the index but it is string
// we can use break and continue
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let x in cars) {
  text += cars[x] + " ";
  
}

// 4 for-of loop which is designed for arrray which not give you index it give you direct value
// we can use break and continue
 let naveena=[1,2,3,4,5]
for(let value of naveena ){
    console.log(value);
    continue;
    console.log(typeof(value));
   
}

///This keyword

//In JavaScript, the this keyword refers to an object
//eg
// here in this example this keyword refer to object pavan 
// to acess the firstname and lastname which within the object pavan we need to use this keyword
// if we not used this keyword we get firstname and lastname is not defined error
//Which object depends on how this is being invoked (used or called)
var pavan={
    firstname:"navin",
    lastName:"pavan",
    fullForm: function(){
        console.log(this.firstname +""+ this.lastName)
    }
}

pavan.fullForm();

////////////////The this keyword refers to different objects depending on how it is used:

//In an object method, this refers to the object.
console.log(this);  //Alone, this refers to the global object and window object
//: global {window: global, self: global, location: {…}, closed: false, frames: global, …}1: global 

//In a function, this refers to the global object.
function oo(){
    console.log(this);
}
oo();
//0: global {window: global, self: global, location: {…}, closed: false, frames: global, …}1: global 
var pavan={
    firstname:"navin",
    lastName:"pavan",
    fullForm: function(){
        console.log(this.firstname +""+ this.lastName)
    }
}

pavan.fullForm(); // this refer or point to pavan object
var fun=pavan.fullForm();
fun(); // here this refer to the glboal object
// depend upon how we call the function object that will change what is value of this
//here fun() we call alone without function caller like pavan.fullform() thats why its refer to window or glboal


///In a function, in strict mode, this is undefined.
//In an event, this refers to the element that received the event.
//Methods like call(), apply(), and bind() can refer this to any object.


 var nal={
    name:"navin",
    checkThis:function(){
        console.log(this.name +"1st");

        function chekOther(){
            this.moo=1
            console.log(this.name+"2nd");
        }
        
        chekOther();

        console.log(this.moo)

    }

    

 }

 nal.checkThis();
 // in the above example the first console will print the name as navin
 // but secaond cant it print because it reffer to the goabl variable and the value of naa is not present
 // in last conosle also it not print because we are define the moo value it set to be the global 
 // in use strickt you use then it dont allow it set to the global
 // to solve this issue the simple known solution is to use the self or assing this to any object
 // so that it can use as var in entire scope of object

 var nal={

    
    name:"navin",
    checkThis:function(){
        var self=this;
        console.log(self.name +"1st");

        function chekOther(){
        self.moo=1
            console.log(self.name+"2nd");
        }
        
        chekOther();

        console.log(self.moo)

    }

    

 }

 nal.checkThis();

 //////////////////call ,apply and bind function //locking down or stabilaze the this keyword
 /// the functions in the js are objects

 function nn(){

    console.log(nn.name)// name is interanl property used by the function we can assign the property alos

 }
nn.navin=1 // this way we can assign the poeprty and it will take because function also a object

nn();


//call 


function nnm(b,c,d){

    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);

}

nnm.call(1,2,3,4) // in this way we can apply the value to this keyword to stablize that 
// in the below code the 2nd will not print because it assign to global so to make sure that
// this key for 2nd also refer to nal object to do that we use call and pass the value of this
// to this so that this will be refer to this object only so the 2nd also print

var nal={

    
    name:"navin",
    checkThis:function(){
       
        console.log(this.name +"1st");

        function chekOther(){
        
            console.log(this.name+"2nd");
        }
        
        chekOther.call(this);

       

    }

    

 }

 nal.checkThis();

 // apply
 // apply also same as the call the only diffrence is that we can pass array of 2nd arguement 
 // unlike call

 nn.apply(1,[2,3,4]); // this we cant able to do in call

 /////////////bind key word
 // same which the bind the value of this to the entire object
 // we can use diffrent property value of diffrent object in our object
 
 const person1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member); // here the output is hege nislsen so this one advantage of bind
  /////////

  //When a function is used as a callback, this is lost.

//This example will try to display the person name after 3 seconds, but it will display undefined instead:

Example
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);

/// stablize the this 
// we use like below to bind this with person so it alwyas refer to obj
let display = person.display.bind(person);
setTimeout(display, 3000);



////////////////////fat arrow

//Arrow Function

hello = () => {
  return "Hello World!";

}

//It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

hello = () => "Hello World!";

//If you have parameters, you pass them inside the parentheses:
hello = (val) => "Hello World!+val";

//In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello World!+val";

// fat arrow also used to stablize this 

var nal={
    name:"navin",
    checkThis:function(){
       setTimeout(function(){
        console.log(this.name +"1st");
       })
    }
 }

 nal.checkThis();
 // in above examplet the value of first is printed aas blank
 // still we are calling the checkthis with function call nal.checkThis() but it is not printing
 // the function inside the setimout point to window or global thats we it cant print the this
// same as call, apply, bind we can also use fat arrow to stablize this
// by simpley convert iner function to fat arrow function
// so fat arrow always take this which can do bye function key word
// if we wanted to convert the checkthis into fat arrow it still not print because
// the fat arrow always take this which out of scope we convert that functin to fat then it take this which gobal and outer the scope
//this
var nal={
    name:"navin",
    checkThis:function(){
        //this
       setTimeout(()=>{
        console.log(this.name +"1st");
       })
    }
 }

 nal.checkThis();

 ///////////asyncronus programming

 //Callback  A JavaScript callback is a function which is to be executed after another function has finished execution.

 //Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.


function callNow(i){
    i();           //this is call backfuntion

}

callNow(()=>console.log("yes it is"));


////////normal callback problem
// so below messge print the error saying that message is not defined
//because first call now is execute the i() where the value of message is not there it is undefined
// so it is give error to solve this we introduce async or asyncronise way of right code 

function callNow(i){
    i;           //this is call backfuntion

}

callNow(()=>console.log(messagee));

let messagee="yes it is"

/// async code
//Functions running in parallel with other functions are called asynchronous
//A good example is JavaScript setTimeout()


function callNow(i){
    setTimeout(i,2)
            //this is call backfuntion

}

callNow(()=>console.log(message));
// here it first execute callNow then again setimout which execute i value after 2 time dealy
// meaanwhile it execute var message so now we have messge value after 2 time dealy is execute i
// where we have the value of message and it print the value
var message="yes it is";

//callback is not async it is sync call
// by doing other activites like settimout we make them as async




//CORS
//cros orgin resourche sharing

//JSONP
// need to request the JSONP and the fucntion which we get and invock eg belwo
//

(navin({
    id:1,
    name:navin,
    age:20
}))

// in jasonp we will request to the api to send the data like this
// in jason form with function name
// this function we need to invoked and get the data from it


///Event propagation bubbling and event captureing 
// by default bubbling we listen

//What is “propagation”?

//Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination. The event needs to pass through every node on the DOM until it reaches the end, or if it is forcibly stopped.

//Event Bubbling and Capturing

//Bubbling and Capturing are the two phases of propagation. In their simplest definitions, bubbling travels from the target to the root, and capturing travels from the root to the target

//capturing is from root to target from top to bottom
// bubbling from target(child) to root(parent)

//we can change the which phase we want to listen 
//event listner last parameter is the boolen if we make it false it bubbling and if true it is capturing

//progpation wont contiue if previous listner is completed
////Stop propgation will stop the progration fro going to root to target or target to root
///prevent defualt wont stop it will conitue the propgation

// sort method use to sort the array or boject


//promises
// are used to handle async operations in js
//inverstion of control

//before promised we use callback function to performe the async operation
//callback function is function declared in another function
createroder(order,function(orderid){
    proceestoPayment(orderid)
})
//so here we are passing our proceeedtoPayment function i.e callback to createrorder
// so that after ordercreate it will execute but
// there is one problem with is inverstion of control we dont know exeactly
// it will do the processtopayment because it depnd on createorder
// which much be wrriten by somebody we never knows so solve this issue we got promises

////////promise return us the empty object below
// after exectuing the creater order it fill the data in that object 
//and we are attaching our call back to that func

const promise=createroder(order);

promise.then(function(orderid){
    proceestoPayment(orderid)
})
//so we are not complety depend on the createroder because it will give us promise
// means its fill that data after it execute complety
//Promise is object which representing eventual complition and failure of async operation



/////////call back hell
createroder(order,function(orderid){
    proceestoPayment(orderid,function(paymentinfo){
        showoderSummery(paymentinfo,function(){
            showBalance();
        })
    })
})

//So above mention senarion if we are deal with e commerce website
// and there are number of apis whihc we dependent on each other 
// then we need to to like same callback in callback
// so our code increase horizontally and also deiffult to maitain this is called as callback hell
// so to over come this issue we use promises

createroder(order)   
  .then(function(orderid){
    return proceestoPayment(orderid)
  }).then(function(paymentinfo){
    return showoderSummery(paymentinfo)
   }).then(function(paymentinfo){
    return showBalance(paymentinfo)
   })
{data:undefined}