//console.log('hello world');
/*let sum = 50 +40;//this is my first js
console.log(sum);
if(sum> 120){
    console.log("yamtete kudasai");
}else{
    console.log("caca vastagneka hayaa");
}
let firstName='abdul al aziz';
let age=23;
console.log(firstName);
console.log(age+7);
let fruits="Orange";
console.log(`${fruits} is my favorite fruit,i like to eat ${fruits}`);
var a=10;
var a=20;
a="Bangladesh";
console.log(a);
let b=20;
b=40;
console.log(b);
const person={
    firstName:'Abdul Al Aziz Mahi',
    Age:23,
}
person.country="Bangladesh";
person.Age=25;
console.log(person);
let a=45;
let b=20;
let c=a%b;
console.log(c);
let userInput=prompt("Enter your Number");
let number=parseInt('userInput');
if (number % 2===0){
    console.log('%{number} is even number');
}else{
    console.log('%{number} is odd number');
}
let x=10;
x=x+9;
x++;
console.log(x);
let y=15;
y=y-5;
console.log(y);

let p='7';
let q=5;
console.log(p==q);
console.log(p===q);
console.log(p>q);
console.log(p<q);
let firstName='Abdul aziz';
console.log(typeof firstName);
let fullName='Tony stark';
console.log('my Name is "tony stark"');
let age = 30;
let age2=40;
console.log(age+age2);
console.log(typeof age);
let numberBig=9;
let numberBig2=6;
console.log(numberBig/numberBig2);
console.log(typeof numberBig);
let fruits=['Apple','Orange','Banana','Peer'];
console.log(fruits[2]);
console.log(typeof fruits);
let student={
    Name:'Abdul al aziz',
    Age:23,
    Sex:'not yet',
}
console.log(student);
console.log(object);
function myfunction(fullName,Age,dateofBirth){
    console.log('Hello '+fullName + ' I am '+Age +' years old ' + 'my date of birth is '+  dateofBirth );
}
myfunction('Tony Stark',23,'23-11-2003'); 
myfunction('Steve Rogers',25,'18-11-2006'); 

let maths = function (x,y){
    console.log('Testing is it working or not');
};
console.log(maths(4,4));
function newFunc(){
    let firstName='Aziz';
    console.log(firstName);
}
newFunc();
let numbers=[5,6,9,10,13];
let sqNumbers=numbers.map (function(number){
    return number*number+3;
});
console.log(sqNumbers);
let add=function (x,y){
    return x*y;
};
console.log(add(5,8));
const mobileModel  ={
    brand :'Samsung',
    model :'s23 ultra',
    processor:'snapdragon Gen 3',
    camera: ['200mp','20mp' ,'20mp'],
    price: '1,0000 bdt',
    brandModel:function(){
    return 'Mobile brand is ${this.brand} and the model is ${this.model}';
    },
};
mobileModel.model ='s25 ultra';
mobileModel.processor='sexydragon';
console.log(mobileModel.model);
console.log(mobileModel['processor']);
console.log(Object. keys (mobileModel));
console.log(Object. values (mobileModel));
console.log(mobileModel.brandModel());

const obj1={
    a:1,
    b:2,
    c:3
};
const obj2={
    p:1,
    q:2,
    r:3
};
const obj3={
    x:1,
    y:2,
    z:3
};
const objFinal=Object.assign (obj1,obj2);
console.log(objFinal);
const array=['Happy','Sad','Angry','Confused',500,true];
console.log(array);
const language=new Array ('Happy','Sad','Angry','Confused',500,true);
language[4]='My name is Aziz';
language[6]='My name is Tony stark';
console.log(language);
console.log(language.toString());
console.log(language[2]);
console.log(language[3]);
console.log(language[5]);
console.log(language[6]);
console.log(language.join("  @"));
const person= [];
person['firstName']='Abdul Aziz';
person['lastName']='Mahi';
console.log(person);
const x=[1,2,3,4,5,6];
const y=[1,2,3,4,5,6];
const z=x.concat(y);
console.log(z);
//java script Events
function subscribe() {
    document.getElementById("text"). innerHTML=
    "Subscribed";
    document.getElementById("btn"). innerHTML=
    "Subscribed";
     document.getElementById("btn").style.backgroundColor='#262626';
    
}
function like(){
    document.getElementById('like').innerHTML=' <i class="fa-solid fa-thumbs-up"></i> Liked';
}
//JAVASCRIPT MATH
const num=31.26885;
let num2=5
console.log(Math.round  (num));
console.log(Math.ceil (num));
console.log(Math.pow(5,9));
console.log(Math.sqrt(121));
console.log(Math.abs(-1212));
console.log(Math.PI);
console.log(Math.max(3,5,6,7,2,9));
let upperValue=6;
let lowerValue=1;
let resultValue=Math.ceil (Math.random()*upperValue);
console.log(resultValue);
function rollDice(){
    let randomNumber=Math.floor(Math.random()*6) +1;
    let imageSource = randomNumber+'.png';
    document.getElementById('ludu'.src=imageSource);
}
//Javascript string
const sen='hi,i am from "Bangladesh"';
const sen2='hi,i\'m from "Bangladesh"';
const alpa="BIll gates says \n\"NO javed,no gunah,no like\""
const fullName='Abdul al aziz';
const country="Bangladesh";
console.log(sen);
console.log(sen2);
console.log(alpa);
console.log(fullName);
console.log(country);
document.getElementById('text').innerText=alpa 
let name="Abdul "+"Al Aziz";
let name2="my name is "+fullName+" and i am from "+country;
console.log(name2);
console.log(name2.toLocaleUpperCase());
const myDate=new Date();
console.log(myDate);
console.log(myDate.toDateString());
let updateDate = new Date('01-15-2002');

let myTime=Date.now();
function simpleTask(){
    for (let step=0; step<1000; step++){
        console.log('walking east to one step');
    }
}
let startTime=Date.now();
simpleTask();
let endTime=Date.now();
console.log('The task took ${endTime =startTime} milliseconfd to complete');

let myName='abdul aziz';
let jonSnow=myName;
console.log(jonSnow);

let student={
    name:'Abdul al aziz',
    age:23,
    sex:'not yety',
}
console.log(student);

let age =19;
if (age>18){
    console.log('you are not a child anymore.');
}else{
    console.log('why are you child');
}
let car=['BMW','Mersedes','Audi','Range Rover','Toyota','Lamborgini'];
car.push('Rolls Royes');
for (let i=0;i<car.length; i++){
    console.log(car[i]);
}
let num=0;
while (num<10){
    console.log(num);
    num++;
}
function guessTheNumber(difficulty){
    let randomNumber ;
    let attamps=0;
    let maxAttamps ;
    let range ;

    switch (difficulty){
        case 'easy':
            range=10;
            maxAttamps =4;
            randomNumber=Math.floor(Math.random() *10)+1;
            console.log(randomNumber);
           break;
        case 'medium':
             range=10;
            maxAttamps=100;
            randomNumber=Math.floor(Math.random() *100)+1;
            console.log(randomNumber);
            break;
        case 'hard':
             range=1000;
            maxAttamps=20;
            randomNumber=Math.floor(Math.random() *1000)+1;
            console.log(randomNumber);
            break;
        default:
            console.error("Invalid difficulty level.Choose 'easy','medium','hard'" );
    }
//get user input
 while(attamps<maxAttamps){
    let guess =parseInt(prompt(`Guess a number between 1 and ${range}(Inclusive).You have ${maxAttamps =attamps} attamps left`));
    attamps ++;

if (guess===randomNumber){
    console.log("Congratulation,you scored! you guess the number in, attamps ,  'attamps'");
}
    else if(guess< randomNumber)
        {console.log("Too low.try again");
    }else{
        console.log('too high');
    }
    console.log(guess);
 }
}



let difficulty=prompt('Choose Difficulty(Easy,Medium,Hard)').toLowerCase();

guessTheNumber(difficulty);
console.log(difficulty);

//javascript scope
//'use strict';
const myBtn = document.querySelector('button');
myBtn.addEventListener('Click',function (){
    console.log(this);
}); 
function square(num){
    return num* num;
}
//console.log(square(9));
function memoSqr(){
    let cache ={}

    return function optimizedSrq(num){
        if (num in cache){
            console.log('Returning from the cache memory');
            console.log(cache);
            return cache[num];

        } else {
          console.log('Computing Square');
          return (cache[num]= square(num));
        }
    };
}
const memoSquare = memoSqr();
console.log(memoSquare(9));
console.log(memoSquare(9));
console.log(memoSquare(9));
console.log(memoSquare(10));
console.log(memoSquare(99));

const fruits=['Apple','Orange','Grapes','Banana','Pear'];
for(let fruit=0;fruit<fruits.length; fruit++){
    console.log(fruits[fruit]);
}
for (const fruit of fruits) {
    console.log(fruit);
}
const myName='Abdul al aziz';
for (const name of myName) {
    console.log(`Each char of myname is ${name}`);
}
const country = new Map([
    ['Bn', 'Bangladesh'],
    ['IN', 'India'],
    ['Pk', 'Pakistan'],
    ['Ml', 'Maleysia'],
    ['Jp', 'Japan'],
]);
country.set('bu','Bhutan')
for (const key of country) {
    console.log(key);
}
const fruits=['Apple','Orange','Grapes','Banana','Pear'];
for(let fruit=0;fruit<fruits.length; fruit++){
    console.log(fruits[fruit]);
}
fruits.forEach((fruit,index,arr) => {
    console.log(fruit,index,arr);
});*/
const greenLine={
    bus:'Greenline Paribahan',
    bCode:'GL',
    ticket:[],
    book (seatNumber,name){
        console.log(`${name} booked a seat on ${this.bus} ticket ${this.bCode} :-${seatNumber}`);
        this.ticket.push({ticketInfo: `${this.bCode}
            ${seatNumber}`,name})
    },
};
greenLine.book('C1', 'Abdul al aziz');
greenLine.book('C2', 'Sajid Anwar Rayan');
console.log(greenLine);

const Shohagh={
    bus:'Shohagh',
    bCode:'SH',
    ticket:[],
}
const book= greenLine.book;