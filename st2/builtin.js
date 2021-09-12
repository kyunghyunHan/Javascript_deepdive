//자바스크립트 객체는 다음과 같이 크게 3개의 객체로 분류할 수 있다.
//표준 빌트인 객체
//표준 빌트인 객체는 ECMAscropt사양에 정의된 객체를 말하며 , 애플리케이션 전역의 공통 기능을 제공한다. 표준 빌트인 객체는ECMAscropt사양에
//정의된 객체이므로 자바스크립트 실행환경과 관계없이 언제나 사용할 수 있다.
//표준 빌트인 객체는 전역 객체의 프로퍼티로써 제공된다. 따라서 별도의 선언없이 전역변수처럼 언제나 참조할 수 있다.

//호스트객체
//호스트객체는 ECMAscropt사양에 정의되어 있지 않지만 자바스크립트 실행환경 에서 추가로 제공하는 객체를 말한다.
//브라우저 환경에서는 dom,bom,canvas,xmlhttprequest,fetch,requestAnimationFrame,SVG,Web storage,Web component,Web worker와 같은 클라이언트 사이드WebAPI를 호스트 객체로 제공하고,node.Js환경에서는 node.js고유의 Api
//를 호스트객체로 제공한다

//사용자 정의 객체
//사용자 정의 객체는 펴준빌트인 객체와 호스트객체처럼 기본제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.

//자바스크립트는 Object,string,Number,Boolean,Symbol, Date,Math,RegExp,Array,Map/Set,WeakMap/WeakSet/Function,Promise,Reflect/proxy,Json,Error등
//40여개의 표준 빌트인 객체를 제공한다.


//string 생성자 함수에 의한 string객체 생성
const strObj = new String('lee'); //string{"lee"}
console.log(typeof strObj); //Object

//Number 생성자 함수에 의한 Number객체 생성
const numObj = new Number(123); //Number
console.log(typeof numObj); //Object

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); //Boolean {true}
console.log(typeof boolObj); //Object

//Function 생성자 함수에 의한 Function 객체함수 생성
const func = new Function('x', 'return x * x'); //f annoymous(x)
console.log(typeof func); //function

//Array 생성자 함수에 의한 Array 생성
const arr = new Array(1,2,3); //(3)[1,2,3]
console.log(typeof arr); //Object

//RegExp 생성자 함수에 의한 RegExp 객체(정규표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); //Object

//date 생성자 함수에 의한 date객체 생성
const date = new Date(); //Fri ...날짜
console.log(typeof date); //Object

//String생성자 함수에 의한 String객체 생성
const strObj = new String('lee'); //String{'lee'}

//string 생성자 함수를 통해 생성한 strObj객체의 프로토타입은 string.prototype이다
console.log(Object.getPrototypeOf(strObj)===String.prototype); //true

//Number생성자 함수에 의한 Nuber객체 생성
const numObj = new Number(1.5); //Number{1.5}

//toFixed는 Number.prototype의 프로토타입 메서드다
//Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); //2)/

//isInteger는 Number의 정적 메서드다
//Number.isIntger는 인수가 정적(integer)인지 검사하여 그 결과를 boolean을 반환한다.
console.log(Number.isInteger(0.5)); //false

const str = 'hello';

//원시타입인 문자열이 프로퍼티와 메서드를 갖고 있는 갹체처럼 동자한다.
console.log(str.length); //5
console.log(str.toUpperCase()); //HELLO

//문자열,숫자,불리언값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼객체라 한다.

const str = 'hi';

//원시타입인 문자열이 래퍼 개게인 string인스턴스로 변환된다.
console.log(str.length); //2
console.log(str.toUpperCase()); //HI

//래퍼객체로 프로퍼티에 접근하거나 메서드를 호출한 후 다시 원시갑으로 되돌린다
console.log(typeof str);

//1.식별자  str은 문자열을 값으로 가지고 있다.
const str = 'hello';

//2.식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다
//식별자 str값 hello는 래퍼객체의 [[stringDate]]내부 슬롯에 할당된다.
//래퍼 객체에 name 프로퍼티가 동적추가된다.
str.name = 'lee';
//3.식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[stringDate]] 내부 슬롯에 할당된 원시값을 갖는다
//이떄 2에서 생성된 래퍼객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

//4.식별자 str은 새롭게 암묵적으로 생성된 (2에서 생성된 래퍼객체와는 다른) 래퍼 객체를 가리킨다
//새롭게 생성된 래퍼객체에는 name프로퍼티가 존재하지 않는다
console.log(str.name); //undefined 
//5.식별자 str은 다시 원래의 문자열,즉 래퍼객체의 [[stringdate]] 내부슬롯에 할당된 원시값을 갖는다.
//이떄 4에서 생성된 래퍼객체는 아무도 참조 하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
console.log(typeof str,str); //string hello

const num = 1.5;

//원시타입인 숫자가 래퍼객체인 String객체로 변환된다.
console.log(num.toFixed()); //2

//래퍼객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof num, num); // number 1.5

//전역객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며, 어떤 객체에도 속하지 않는 최상위 객체다
//브라우저에서는(wnndow,self,this,frames)가 전역객체를 가리키지만 node.js에서는 global이 전역객체를 가리킨다

//브라우저환경\
globalThis ===this //true
globalThis ===window //true
globalThis ===self //true
globalThis ===frames//true


//node,js
globalThis ===this //true
globalThis ===global //true

//전역 객체의 특징
//전역객체는 개발자가 의도적으로 생성할 수 없디.즉 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다
//전역객체의 프로퍼티를 참조할 떄 window를 생략할 수있다.

//문자열 'f'를 16   진수로 해석하여 10진수러 변환하여 반환한다
window.parseInt('F',16); //15
//window parseInt는 parseInt로 호출할 수 있다.
parseInt('F',16); //15

window.parseInt === parseInt; //true

//전역객체는 Objcet,String,Number,Boolean, Date,Math,RegExp,ArrayFunction,Promise같은 모준 표준빌트인 객체를 프로퍼티로 가지고있다.
//자바스크립트 실행환경(브라우저 환경 또는 node.js)에 따라 추가적으로 프로퍼티와 메서드를 갖는다 .브라우저 환경에서는dom,bom,canvas,xmlhttpRequest,getch,requestAnimation,SVG,web Storage,Web Componect,WebWorker
//같은 클라이언트 사이드 webAPI를 호스트 객체로 제공하고 Node.js환경에서는 Node.js 고유의 API를 호스트 객체로 제공한다
//var키워드로 선언한 전역변수와 선언하지 않는 변수에 값을 할당한 암묵적 전역 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.

//var 키워드로 선언한 전역변수
var foo =1;
console.log(window.foo);//1

//선언하지 않은 변수에 값을 암묵적 전역,bar는 전역변수가 아니라 전역 객체의 프로퍼티다
bar=2; //window.bar=2
console.log(window.bar); //2

//전역함수
function baz(){return 3;}
console.log(window.baz()); //3

//let이나 const 키워드로 선언한 전역변수는 전역객체의 프로퍼티가 아니다. 즉 window.foo와 같이 접근할 수 없다.let이나 const키워드로 선언한 변수는 전역변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 서넌전 환경 레코드)내에 존재하게 된다.

let foo = 123;
console.log(window.foo); //undefined

//브라우저 환경의 모든 자바스크립트 코드는 하나의 전역객체 window를 공유한다. 여러개의 script태그를 통해 자바스크립트 코드를 분리해도 하나의 전약객체 window를 공유하는 것은 변함이 없다. 이는 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다는 의미다.


//Infinity
//전역프로퍼티는 window를 생략하고 참조 할 수 있다
console.log(window.Infinity === Infinity); //true

//양의 무한대
console.log(3/0); //Infinity

//음의 무한대
console.log(-3/0); //-Infinity

//Infinity는 숫자갑이다.
console.log(typeof Infinity); //Number

//NaN

//NaN 프로퍼티는 숫자가 아님 을 타나내는 숫자갑 NaN을 갖는다

console.log(window.NaN); //NaN
console.log(Number('xyz')); //NaN
console.log(1 *'string'); //NaN
console.log(typeof NaN); //Number

console.log(window.undefined); //undefined

var foo ;
console.log(foo); //undefined
console.log(typeof undefined); //undefined

//빌트인 전역함수는 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역객체의 메서드다

//eval 함수는 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.

/**주어진 문자열 코드를 런타임에 평가 또는 실핸한다
 * @param {string} code - 코드를 나타내는 문자열
 * @returns {*} 문자열코드를 평가/실행한 결과값
 * 
 * eval(code) */

//표현식인 문
eval('1 +2;') ; //3
//표현식이 아닌문
eval('var x = 5;'); //undefined

//eval 함수에 의해 런타임에 변수 선언문이 실행되어 x변수가 선언되었다
console.log(x); //5

//객체리터럴은 반드시 괄호로 둘러싼다
const o = eval ('({a:1})');
console.log(o); //{a:1}

//함수 리터럴은 반드시 괄호로 둘러싼다
const f = eval('(function(){return 1;})');
console.log(f); //1

eval('1+2;3+4;'); //7  //인수로 전달받은 문자열 코드가 여러개의 문으로 이루어져 있다면 모든 문을 실행한 다음,마지막 결과값을 반환한다

const x = 1;
function foo(){
    //eval 함수는 런타임에 foo함수의 스코프를 동적으로 수정한다.
    eval('var x = 2;');
    console.log(x); //2
}

foo();
console.log(x); //1

//eval 함수는 기존의 스코프를 런타임에 동적으로 수정한다

const x =1;
function foo(){
    'use strict';

    //strict mode에서 eval함수는기존의 스코프를 수정하지 않고 eval함수 자신의 자체적인 스코프를 생성한다
    eval('var x = 2; console.log(x);'); //2
    console.log(x); //1
    foo();
    console.log(x); //1
}

const x = 1;
function foo(){
    eval('var x = 2; console.log(x);') //2
    //let , const 키워드를 사용한 변수 선언문은 strict mode가 적용된다
    eval('const x =3; consol.log(x)'); //3
    console.log(x);//2
}
foo();
console.log(x); //1

// eval함수를 통해 사용자로부터 입력받은 콘텐츠를 실행하는 것은 보안에 매우 취약 , 코드실행이 느리다. eval함수 사용 자제

//isFinite 전달받은 인수가 정삭적인 유한수인지 검사하여  유한수이며 true를 반환하고 무한수이면 false를 반환한다 전달받은 인수의 타입이 숫자가 아닌 경우 , 
//숫자로 타입을 변환한후 검사를 수행한다,이떄 인수가 NaN를 평가되는 값이면 false를 반환한다.

/** 전달받은 인수가 유한수인지 확인하고 그 결과를 반환한다
 * @param {Number} testValue - 검사대상 값
 * @returns {boolean} 유한수 여부 확인 결과
 * 
 * isFinite(testValue)
 */


//인수가 유한수이면 true를 반환한다.
isFinite(0); //true
isFinite(2e64); //true
isFinite('10'); //true:10 ->10
isFinite(null); //true :null -> 0 

//인수가 무한수 또는 NaN으로 평가되는 값이라면 false로 반환한다

//인수가 무한수 또는 NaN으로 평가되는 값이라면 false로 반환한다.
isFinite(Infinity); //false 
isFinite(-Infinity); //false 

//인수가 NaN으로 평가되는 값이라면 false를 반환한다
isFinite(NaN); //false 
isFinite('hello'); //false 
isFinite('2005/12/12'); //false 
console.log(+null); //0

/**
 * 주어진 숫자가 NaN인지 확인하고 그 결과를 반환한다
 * @param {number} testValue -검사대상값
 * @returns {boolean} NaN여부 확인 결과
 * 
 */
isNaN(testValue)

isNaN(NaN); //true
isNaN(10); //false

//문자열
isNaN('blabla'); //true :'blabla' = >NaN
isNaN('10'); //false : '10' =>10
isNaN('10,.12'); //false: '10.12' => 10.12
isNaN(''); //false: '' => 0
isNaN(' '); //false    =>0

//불리언
isNaN (true); //false :true ->1
isNaN(null); //false :null ->0

//undefined
isNaN(undefined); //true :undefined => NaN

//객체 
isNaN({}); //true : { } => NaN

//date
isNaN(new Date());   //false :new Date() => Number
isNaN(new Date().toString()); //true :Strng => NaN

//parseFloat 
//전달받은 문자열 인수를 부동 소주점 숫자, 즉 실수로 해석하여 반환한다

/** 
 * 전달받은 문자열 인수를 실수로 해석하여 반환한다
 * @param {string} string  변환대상값
 * @returns{number} 변환결과
 */
parseFloat(string)

//문자열을 실수로 해석하여 변환한다
parseFloat('3.14'); //3.14
parseFloat('10.00'); //10

//공백으로 구분된 문자열은 첫번쨰 문자열만 변환한다
parseFloat('34 45 66'); //34
parseFloat('40 years'); //40

//첫번째 문자열을 숫자로 변환할수 없다면 NaN을 반환한다
parseFloat('he was 40'); //NaN

//앞뒤 공백은 무시된다
parseFloat('60'); //60

//parseInt
/**
 * 전달받은 문자열 인수를 정수로 해석하여 반환한다
 * @param{string} string - 변환대상값
 * @param(number) [radix] -진법을 나태내는 기수 (2~ 36, 기본값10)
 * @returns {number} 반환결과
 */

parseInt(string,radix);

//문자열을 정수로 해석하여 반환한다
parseInt('10') ; //10
parseInt('10.123') ; //10

parseInt(10) ; //10
parseInt(10.123) ; //10

//10을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다
parseInt('10') ; //10
//10을 2진수로 해석하고 그결과를 10진수 정수로 반환한다
parseInt('10',2) ; //2
//10일 8진수로 해석하고 그결과를 10진수 정수로 변환한다
parseInt('10',8) ; //8
//10일 16진수로 해석하고 그결과를 10진수 정수로 변환한다
parseInt('10',16) ; //16

const x = 15;

//10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다

const x = 15;

//10진스 15를 2진수로 변환하여 그 그결과를 문자열로 반환한다
x.toString(2); // 1111

//문자열 1111을 2진수로 해석하고 그결과를 10진수 정수로 반환한다
parseInt(x.toString(2),2); //15

//10진수 15를 8진수로 변환하여 그 그결과를 문자열로 반환한다
x.toString(8); //17
//문자열 17일 8진수로 해석하고 그 결과를 10진수 정수로 반환한다
parseInt(x.toString(8),8); //15

//10진수 15를 16진수로 변환하여 그결과를 문자열로 반환한다
x.toString(16); //f
//문자열f를 16진수로 해석하고 그 결과를 10진수 정수로 변환한다
parseInt(x.toString(16),16); //15

//숫자값을 문자열로 변환한다
x.toString(); //15
//문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 반환한다
parseInt(x.toString()); //15

//16진수 리터럴 0xf를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다
parseInt ('oxf'); //15
//위코드와 같다
parseInt('f', 16); //15
//하지만 2진수 리터럴과 8진수 리터럴은 제대로 해석하지 못한다

//2진수 리터럴(0b로 시작)은 제대로해석하지 못한다.0이후가 무시된다
parseInt('0b10'); //0
//8진수 리터럴(Es6에서 도입.0o로시작)은 제대로 해석하지 못한다.0이후가 무시된다
//문자열 '10'을 2진수로 해석한다
parseInt('10', 2); //2
//문자열 '10'을 8진수로 해석한다.

//a는 10진수로 해석할 수 없다
parseInt('A0'); //NaN
//2는 2진수로 해석할 수 없다

//10진수로 해석할 수 없는 'a'이후의 문자는 모두 무시된다
parseInt('1AO'); //1
//2진수로 해석할 수 없는 '2'이후의 문자는 모두 무시된다
parseInt('102',2); //2

//8진수로 해석할 수 없는 '8'이후의 문자는 모두 무시된다
parseInt('58',8); //5

//16진수로 해석할 수 없는 'g'이후의 문자는 모두 무시된다
parseInt('FG',16); //15


//공백으로 구분된 문자열은 첫번쨰 문자열만 반환한다
parseInt('34 45 66') //34

//첫번쨰 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다
parseInt('he was 40') // -  NaN

//앞뒤 공백은 무시된다.
parseInt('60'); //60

encodeURI/decodeURI

//endodeURL 함수는 완전 URL을 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다
//URL은 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다

/**
 * 완전한 uri을 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다
 * @param {string} uri -완전한 uri
 * @returns{string} 인코딩된 uri
 * 
 */
encodeURI(uri)

//encodeURI함수는 완전한 url을 전달받아이스케이프 처리를 위해 인코딩한다
const enc = encodeURI(uri);
console.log(enc);

decodeURI(uri) //함수는 인코딩된 uri를 전달받아 이스케이프 처리 이전으로 디코딩한다

/**
 * 인코딩된 uri을 문자열로 이스케이프 처리 이전으로 디코딩한다
 * @param {string} encodeURI -인코딩된uri
 * @returns{string} 디코딩된 uri
 * 
 */
decodeURI(uri)

const uri = 'http.//~~';

//encodeURI 함수는 완전한 uri를 전달받아 이스케이프 처리를 위해 인코딩한다
const enc = encodeURI(uri);
console.log(enc);
//http:~~~;

//decodeURI 함수는 인코딩된 완전한 uri를 전달받아 이스케이프 처리 이전으로 디코딩한다
const dec = decodeURI(enc);
console.log(dec);
//http~~;

//uri의 쿼리스트링

const uriCOMP= 'name=....~~';

//encodeURIComponent함수는 인수로 전달받은 문자열을 uri의 구성요소인 쿼리스트링의 일부로 간주한다
//따라서 쿼리스트링 구분자로 사용되는 =,?,&까지 인코딩한다

let enc = encodeURIComponent(uriCOMP);
console.log(enc);
//'name=....~~';

let dec = decodeURIComponent(enc);
console.log(dec);
//이웅모&...~;


//encodeURI함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다
//따라서 쿼리스트링 구분자로 사용되는 =,?,&를 인코딩하지않는다

enc = encodeURI(uriCOMP);
console.log(enc);
//name~~;
dec = decodeURI(enc);
console.log(dec);
//name= 이음어~~;

//암묵적 전역

var x = 10; 전역변수
function foo(){
    //선언하지 않은 식별자에 값을 할당
    y=20; //window.y = 20;
}
foo();

//선언하지 않은 식별자 y를  전역에서 참조할 수 있다
console.log(x=y );//30
//자바스크립트 엔진은 y 변수에 값을 할당하기위해 먼저 스코프체인을 통해 선언된 변수인지 확인한다. 이떄 foo함수의 스코프와 전역스코프 어디에서도y변수의 선언을 찾을수 없으므로 참조에러가발생한다
//하지만 자바스크립트 엔지은 y=20을 window.y=20으로 해석하여 전역객체에 프로퍼티를 동적생성한다 결국 y는 전역객체의 프로퍼티가 되어 마치 전역변수처럼 동작한다
//이러한 현상을 암묵적 전역이라한다
//하지만 y는 변수가 아니라 단지 전역객체의 프로퍼티로 생성되었으므로 변수호이스팅이 발생하지는 않는다

//전역변수 x는 호이스팅이 발생한다.
console.log(x); //undefined
//전역변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지는 않는다
console.log(y); //Error

var x= 10;//전역변수

function foo(){
    //선언하지 않은 식별자에 값을 할당
    y=20; //window.y=20
}
foo();
//선언하지 않은 식별자 y를 전역에서 참조할수 있다
console.log(x+y); //30
//또한 변수가 아니라 단지 프로퍼티인 y는 delete연산자로 삭제할 수 있다, 전역변수는 불가능

var x= 10; //전역변수
function foo(){
    //선언하지 않은 식별자에 값을 할당
    y=20 ; //window.y =20;
    console.log(x+y);
}
foo(); //30

console.log(window.x); //10
console.log(window.y); //20

delete x ; //전역변수는 삭제되지 않는다
delete y ; //프로퍼티는 삭제된다

console.log(window.x); //10
console.log(window.y);//undefined