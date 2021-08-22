//함수는 자바스크립트에서 가장중요한 핵심개념
function add (x,y){
    return x+y;
}
// f(2,5 ) = 7
add(2,5); //7
//함수는 일련의 과정을 문으로 구현하고 코드블럭으로 감싸서 하나의 실행 단위로 정의한것

function add(x,y){  //함수이름 매개변수
    return x+y;  //반환값

}
add(2,5);

function add(x,y){
    return x+y;
}

//함수호출
var result =add(2,5);

//함수 add에 인수 2,5를 전달하면서 호출하면 반활값 7을 반환한다.
console.log(result); //7

//함수는 필료할때 여러번 호출가능 코드의 재사용이라는 측면에서 매우 유용하다

//변수에 함수 리터럴을 할당

var f = function add(x,y){
    return x+y;
}

//함수 리터럴의 구성요소
//함수이름        함수이름은 식별자다.따라서 네이밍 규칙을 준수해야 한다.
            //  함수이름은 함수 몸체내에서만 참조할 수 있는 식별자다.
            //  함수이름은 생략할 수 있다. 이름이 있는 함수를 기명함수, 이름이 없는 함수를 무명함수라고 한다.(nemed function, anonymos function)
                
//매개변수 목록  // 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.
              // 각 매개변수에는 함수를 호출할떄 지정한 인수가 순서대로 할당된다. 즉 매개변수 목록은 순서에 의미가 있다.
              // 매개변수는 함수 몸체내에서 변수와 동일하게 취급한다. 따라서 매개변수도 변수와 마찬가지로 식별자 네이밍 규칙을 준수해야 한다.
//함수 몸체     //함수가 호출되었을 떄 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.
              //함수 몸체는 함수 호출에 의해 실행된다.
            
//ex 리터럴 은 사람이 이해 할수있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기 방식
//함수는 객체이디 일반객체는 호출할 수 없다 함수는 호출가능하다.

function add(x,y){
    return x+y;           //함수 선언문
}

var add = function(x,y){
    return x+y;              //함수 표현식
}                         

//  var add=new function('x','y','return x+y');  //function 생성자 함수

var add=(x,y)=>x+y;           //arrow function

//함수 선언문
function add(x,y){
    return x+y;
}

//함수참조
//console.dir은 console.log와 달리 함수 객체의프로퍼티까지 출력한다.
//단 node.js환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); //f add(x,y);

//함수호출
console.log(add(2,5)); //7

//함수선언문은 함수 이름을 생략 할 수 있다.
//function (x,y ){
 //   return x+y;
//}//error

//함수 선언문은 표혁식이 아닌 문이므로 변수에 할당 할 수 없다
//하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
var add = function add(x,y){
    return x+y;
}
//함수호출
console.log(add(2,5));  //7

//기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
//함수 선어문에서는 함수이름을 생략할 수 없다
function foo(){
    console.log('foo')
}
foo(); foo

//함수리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
//함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar(){console.log('bar');});
bar(); //referenceError:bar is not defined

//자바스크립트엔진은 생성된함수를 호출하기 위해 함수 일므과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
var add=function add(x,y){
    return x+y;

}
console.log(add(2,5)); //7
//함수는 함수이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.

//함수표현식
var add =function (x,y){
    return x+y;

}
console.log(add(2,5));//7

//기명함수 표혁식
var add =function foo (x,y){
    return x+y;
}

//함수 객체를 가리키는 식별자로 호출
consolr.log(add(2,5));

//함수이름으로 호출하면 referenceError이 발생한다.
//함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2.5)); //referenceError

//함수참조
console.dir(add); //f add(x,y)
console.dir(sub); //undefined

//함수호출
console.log(add(2,5)); //7
console.log(sub(2,5)); //TypeError

//함수선언문 
function add(x,y){
    return x+y;
}

//함수표현식 
var sub = function (x,y){
    return x-y;

    
}
//함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르다
//함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅 이라고한다.function hoisting
//변수 할당문의 값은 할당문이 실행되는 시점, 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는시점에 평가되어 함수 객체가된다.
//함수 표현식으로 함수를 정의하면 함수호이스팅이 발생하는것이 아니라 변수 호이스팅이 발생한다.
//함수 선언문으로 정의한 함수를 함수선언문 이전에 호출하면 함수 호이스팅에 의해 호출이 가능하다.

//생성자 함수는 객체를 생성하는 함수를 의미한다.객체를 생성하는 방식은 객체리터럴 이외에 다양한 방법이 있다. 
var add = new Function('x','y', 'return x+y');

console.log(add(2,5)); //7

var add1 = (function () {
    var a =10;
    return function (x,y) {
        return x+y+a;

    }
}());
console.log(add1(1,2)); //13

var add2 = (function () {
    var add2 = (function () {
        var a =10;
        return new Function('x','y', 'retuen x +y +a;');

        
    }());

    console.log(add2(1,2)); //referenceError
 
}());

//화살표함수
Const =add = (a,b)=>a+b;
console.log(add(2,5)); //7

//함수 선언문
function add(x,y) {
    return x+y;

}

//함수호출
//인수1과 2가 매개변수인 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1.2);

function add(x,y){
    console.log(x,y); //2,5
    return x+y;
}

add (2.5);
//add 함수의 매개변수x,y는 함수몸체 내부에서만 참조 할 수 있다.
console.log(x,y); //referenceError: x is not defined

function add(x,y) {
    return x+y;
    
}
console.log(add(2)); //NaN

function add(x,y) {
    return x+y;
    
}
console.log(add(2,5,10)); //7
//초과된 인수가 그냥 버려지는 것이 아닌 모든인수는 암묵적으로 arguments객체의 프로퍼티로 보관됨
function add(x,y) {
    console.log(arguments);
    //arguments(3)[2,5,10,callee:f, symbol(symbol.iterator):f]
    return x+y;
    
}
add(2,5,10);

function add(x,y) {
    return x+y;
    
}

function add(x,y){ 
return x+y;
    
}
console.log(add(2)); //NaN
console.log(add('a','b')); //'ab'

//자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다
//자바스크립트는 동적 타입 언어이다.따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.

function add(x,y) {
    if (typeof x !=='nuber' || typeof y !=='number'){
        //매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다
        throw new TypeError('인수는 모두 숫자 값이어야 합니다');
    }
    return x+y;
    
}

console.log(add(2)); //TypeError('인수는 모두 숫자 값이어야 합니다');
console.log(add('a','b')); //TypeError('인수는 모두 숫자 값이어야 합니다');

function add(a,b,c ){
    a= a||0;
    b=b||0;
    c=c||0;
    return a+b+c;
    
}
console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add());//0

function add(a=0,b=0,c=0) {
    return a+b+b;

    
}
console.log(add(1,2,3)); //6
console.log(add(1,2)); //3
console.log(add(1)); //1
console.log(add());//0

//이상적인 함수는 한가지 일만 해야 하며 가급적 작게 만들어야한다.!!

$.ajax({
    merhod:'POST',
    url :'/user',
    data:{id:1,name:'lee'},
    cache:false
});
//jQuery의 ajax매서드를 객체를 인수로 전달하는함수

function multiply(x,y) {
    return x*y; //반환문
    
}
//함수호출은 반환값으로 평가된다.
var result= multiply(2,5);
console.log(result); //15

//반환문은 두가지 역활 1.반환문은 함수의 실행을 중단하고 함수몸체를 빠져나간다.따라서 반환문 이후에 다른 문이 존재하먼 그 문은 실행되지 않고 무시한다.
function multiply(x,y) {
    return x*y; //반환문
    //반환문 이후에 다른문이 존재하면 실행되지 않고 무시된다.

    console.log('실행되지 앟는다')

}
console.log(multiply(3,5)); //15

function foo() {
    return;
    
}
console.log(foo()); //undefined;

function foo() {
    //반환문을 생략하면 암묵적으로 undefined가 반환된다.
    
}
console.log(foo()); //undefined

//function multiply(x,y) {
    //return키워드와 반환값 사이에 줄바꿈이 있으면
    return; //세미클론 자동삽입기능(Asi)에 의해 세미클론이 자동으로 추가된다.
    x*y; 무시된다.
    
//}
console.log(multiply(3,5)); //undefined
//반환문은 함수  몸체 내부에서만 새용가능하다

//매개변수 primitive 는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.

function changeVal(primitive,obj) {
    primitive +=100;
    obj.name ='kim';
    
}
//외부상태
var num = 100;
var person = {
    name :'lee'
}
console.log(num); //100
console.log(person); //{name:'lee'}

//  원시값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num,person);

//원시값은 원본이 회손되지 않는다.
console.log(num); //100

//객체는 원본이 훼손된다.
console.log(person); //깊은 복사를 통해 외부상태가 변경되는 부수효과를 없앨수 있다.

//익명 즉시 실행 함수
(function () {
    var a=3;
    var b=5;
    return a*b;

    
}());
//즉시 실햄함수는 이름이 없는 익명함수를 사용하는것이 일반적
//함수이름은 함수 몸체내에섬ㄴ 참조할수 있는 식별자 이므로 즉시 실행 함수를 다시 호출할 수없다

//기명 즉시 실행 함수
(function foo() {
    var a=3;
    var b=5;
    return a*b;
    
}());

foo(); //foo is not defined

//function () {
    
//}();  //Error = 즉시실햄함수는 반드시()안에 감싸야한다

//function foo() {
    //
    
//}(); Error 함수선언문이 끝나는 즉시 중괄호 뒤에 ;이 암묵적으로 추가되기 때문

//function foo(){}();  function foo(){};(); 

//(); tokken Error

console.log(typeof(function f() {})); //function
console.log(typeof(function () {})); //function

(function () {
    
}());


(function () {
    
})();
                      //그룹 연산자로 함수를 묶은 이류는 먼저 함수 리터럴을 평가해서 함수 객체를 생성하기 위해!, 먼저 
                      //함수 리터럴을 평가해서 함수 객체를 생성할 수 있다면 다음과 같이 그룹 연산자 이외의 연산자를 사용해도 좋다

!function () {
    
}();


(function () {
    
}());


+function () {
    
}();



//즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
    var a = 3;
    var b=5;
    return a*b;
    
}());

console.log(res); //15

//즉시 실햄 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a,b) {
    return a *b;

    
}(3,5));

console.log(res); //15

//재귀함수:함수가 자기 자신을 호출하는 것

function countdown(n) {
    for(var i =n; i >=0 ; i--)console.log(i);
    
}
countdown(10);

//재귀함수를 이용
function countdown(n) {
    if(n<0)return;
    console.log(n);
    countdown(n-1); //재귀호출
    
}
countdown(10);

//팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! =1*2*...*(n-1)*n
function factorial(n) {
    //탈출조건 : n이 1이하일떄 재귀 호출을 멈춘다
    if (n<=1)return1;
    //재귀호출
    return n*factorial(n-1);
    
}

console.log(factorial(0)); //0! =1
console.log(factorial(1)); //1! =1
console.log(factorial(2)); //2! =2*1=2
console.log(factorial(3)); //3! =3*2*1=6
console.log(factorial(4)); //4! =4*3*2*1=24
console.log(factorial(5)); //5! =5*4*3*2*1=120

//함수표현식
var factorial = function foo(n) {
    //탈출조건 :n이 1이하일떄 재귀호출을 멈춘다
    if (n<=1) return 1;
    //함수를 가리키는 식별자로 자기 자신을 재귀 호출
    return n * factorial (n-1);

    //함수 이름으로 자기 자신을 재귀 호출 할수도 있다.
    //console.log(factorial ===foo); //true
    //return n * foo (n-1);
}

console.log(factorial(5)); //5! = 5*4*3*2*1 =120

//반복문 구현
function factorial(n) {
    if(n<=1)return 1;

    var res =n;
    while (--n) res *=n;
    return res;
}

console.log(factorial(0)); //0! =1
console.log(factorial(1)); //1! =1
console.log(factorial(2)); //2! =2*1=2
console.log(factorial(3)); //3! =3*2*1=6
console.log(factorial(4)); //4! =4*3*2*1=24
console.log(factorial(5)); //5! =5*4*3*2*1=120

//재귀함수는 반복되는 처리는 반복문 없이 구현가능하지만 무한반복에 빠질위험이 있고 에러를 발생, 재귀함수를 사용하는게 더 이해하기 편할경우에만 한정적으로 사용하는것이 좋다

//함수 내부에 정의된함수 :중첩함수
//중첩함수를 포함하는 함수:외부함수
//중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역활을한다.

function outer() {
    var x= 1;

    //중첩함수
    function inner() {
        var x =2;
        //외부함수의 변수를 참조 할수 있다,
        console.log(x+y);//3

        
    }
    inner ();
}
outer();

//콜백함수 !!
//n 만큼 어떤 일을 반복한다.
function repeat(n) {
    //i를 출력한다.
    for(var i =0; i<n;i++)
    console.log(i);
}
repeat(5);; // 0 1 2 3 4 

//repeat함수는 console.log(i)에 강하게 의존하고 있어 다른일 할수가 없다.새롭게 함수를 정의해야 한다.

//n만큼 어떤 일을 반복한다.
function repeat1(n) {
    //i를 출려간다
    for (var i = 0;i<n;i++)console.log(i);
    
}
repeat1(5); //0 1 2 3 4

//n만큼 어떤 일을 반복한다.
function repeat2(n) {
    for (var i = 0; i <n; i++){
        //i가 홀수 일때만 출력한다
        if(i%2)console.log(i);
    }    
}
repeat2(); //1 3

//외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n,f) {
    for (var i = 0; i<n; i++){
        f(i); //i를 전달하면서 f를 호출
    }
    
}

var logAll = function (i) {
    console.log(i);
    
}

//반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);  //0 1 2 3 4

var logOdds = function (i) {
    if (i %2) console.log(i);
    
}

//반복 호출할 함수를 인수로 전달한다.
repeat(5,logOdds); //1 3

//함수의 매개변수를 통해 다른 함수의 내부로 전달하는 함수를 콜백함수라고 하며, 매개변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수를 고차함수라고 한다.
//콜백함수는 함수 외부에서 고차함수 내부로 주입하기 떄문에 자유롭게 교체가능, 고차함수는 콜백함수를 자신의 일부분으로 함성한다.
//고차함수는 매개변수를 통해 콜백함수의 호출 시점을 결정해서 호출한다. 
//콜백함수는 고차함수에 의해 호출되며 이때 고차함수는 필요에 따라 콜백함수에 인수를 전달할수 있다.


//익명함수 리터럴을 통해 콜백함수로 고차함수에 전달한다.
//익명함수 리터럴은 repeat함수를 호추할 떄마다 평가되어 함수 객체를 생성한다.
repeat(5,function (i) {
    if (i%2)console.log(i);

    
}); // 1 3

//logOdds함수는 단 한번만 생성된다.
var logOdds=function (i) {
    if(i%2) console.log(i);
    
}

//고차 함수에 함수 참조를 전달한다.
repeat (5,logOdds); // 1 3
//콜백함수는 함수형 프로그래밍 패러다임 뿐만 아니라 비동기 처리(이벤트처리, Ajax통신, 타이머함수)에 활용되는 중요한 패턴이다.

//콜백함수를 사용한 이벤트처리
//myButton버튼을 클릭하면 콜백함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
    console.log('button cliked!');    
});

//콜백함수를 사용한 비동기처리
//1초후에 메세지를 출력한다
setTimeout(function() {
    console.log('1초경과');
    
},1000);

//콜백함수를 사요아는 고차함수map
var res=[1,2,3].map(function (item) {
    return item*2;

    
});

console.log(res); //[2,4,6]

//콜백함수를 사용하는 고차함수 filter
res=[1,2,3].filter(function (item) {
    return item %2;
    
});

console.log(res);  //[1,3]

//콜백함수를 사용하는 코차함수 reduce
res=[1,2,3].reduce(function (acc,cur) {
    return acc +cur;

    
},0);

console.log(res); //6

//함수형 프로그래밍에서는 어떤 외부상태에 의존하지 않고 변경하지도 않는 , 즉 부수효과가 없는 함수를 순수 함수라하고, 
//외부상태에 의존하고나 외부상태를 변경하는, 즉 부수효과가 있는 함수를 비순수 함수라 한다,
//순수함수는 동일한 인수가 전달되면 언제나 동일한 값을 반혼하는 함수, 

var count = 0;

//순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
    return ++n;
}

//순수함수가 반환한 결과 값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); //1

count = increase(count);
console.log(count); //2

//비순수 함수의 특징은 순수함수와는 달리 외부상태를 변경하는 부수효과가 있다.
//즉 비순수 함수는 외부상태에 의존하거나 외부상태를 변경하는 함수이다.

var count =0; //현대 카운트를 나타내는 상태

//비순수 함수

function increase(n) {
    return ++count; //외부상태에 의존하며 외부상태를 변경한다

    
}
//비순수함수는 외부상태 (count)를 변경하므로 상태변화를 추적히기 어려워진다.
increase();
console.log(count); //1

increase();
console.log(count); //2

//함수가 외부상태를 변경하면 상태변화를 추적하기 어려워진다.따라서 함수 외부 상태의 변경을 지양하는 순수함수를 이용하는 편이 좋다






