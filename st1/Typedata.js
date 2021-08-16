//Type
//number   숫자, 정수와 실수  구분없이 하나의 숫자 타입만 존재
//string   문자열
//boolean  논리적 true, false
//undefined  var 키워드로 선언된 변수에 암묵적으로 할당되는 값
//null       값이 없다는 것을 의도적으로 명시할 떄 사용하는 값
//symbol     es6에서 추가된 7번쨰 타입
//객체 타입  객체, 함수 , 배열


//모두 숫자타입 (자바스크립트는 하나의 숫자타입만 존재)
var integer = 10;   //정수
var doble = 10.12;   //실수
var engative = - 20;  //음의 정수

var binary = 0b01000001; //2진수
var octal = 0o101;   //8진수
var hex = 0x41;  //16진수

//표기법만 다를 뿐 모두 같은 값이다.
console.log(binary);  //65
console.log(octal);    //65
console.log(hex);     //65
console.log(binary === octal );   //true
console.log(octal === hex);  //true

//숫자타입은 모두 실수로 처리된다.
console.log(1===1.0); //false
console.log(4/2); //2
console.log (3/2); //1.5

//숫자타입은 추가적으로 세가지 특별한 값도 표현할 수 있다.
//Infinity  양의 무한대
//-Infinity   음의 무한대
//NaN   산술 연산불가

console.log (10/0); //Infinity
console.log (10/-0); //-Infinity
console.log (1*'string'); //NaN

var x = nan; // Erroe  =  NaN으로 해야 애러가 안남

// 문자열 타입
var string;
string = '문자열';  //작은따음표
string = "문자열";  // 큰따음표
string = `문자열 `;   // 백틱
string = ' 작은따음표로 감싼 문자열 내의 "큰따음표"는 문자열로 안식된다.';
string = "큰따음표로 감싼 문자열 내의 '작은따옴표'는 문자열 인식된다."

//따옴표로 감싸지 않은 Heollo를 식별자로 인식

//템플릿 리터럴
// ``을 사용해표현
var template = `Tamplate literal` ;
console.log (template); //Template literal

var str = 'hello
world. ' ;
//일반 문자열 내에서는 줄바꿈 (개행)이 허용되지 않는다.

\0    //null
\b    //백스페이스
\f     //폼피드 프린터로 출력할 경우 다음 페이지의 시작 지점으로 아동한다. 
\n     //개행 다음 행으로 이동
\r     // 개행 . 커서를 처음으로 이동
t     //탭 수평
\v     //탭 수직
\uXXX   //유니코드 , 예를 들어 '\u0041'은 'A'.'\uD55C'는 '한'.'\u{1F600}'는 😀이다.
\'      //작은따음표
\"       //큰따음표
\\      백슬래시

var template = '<ul>\n\t<li><a href="#">Home</a></li>\n<ul>';
console.log(template);

<ul>
    <li><a href="#">Home</a></li>
</ul>

var template = `<ul>
                    <li><a href="#">Home</a></li> 
            <ul>`;
console.log(template);

<ul>
    <li><a href="#">Home</a></li>
</ul>

var first = 'Ung = mo';
var last = 'Lee'; 

//ES5 :문자열 연결
console.log('my name is'+first+''+last + '.');  //mt name is Ung-mo Lee.

var first = 'Ung-mo';
var last = 'Lee';
// ES6: 표현식 삽입
console.log(`my name is ${first}${last}.`); //mt name is Ung-mo Lee.

console.log(`1+2 = ${1+2}`); //1+2=3
console.log('1+2=${1+2}') //1+2=${1+2}

var foo= true;
console.log(foo); //true

foo =false ;
console.log(foo); //false

//var 키워드로 선언한 변수는 암묵적으로 undefined
var foo;
console.log(foo); //undefined (정의되자 않은)

//이전 참조를 재거, foo 변수는 더 이상 'lee'를 참조하지 않는다.
//유용해 보이지는 않는다. 변수의 스코플르 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낮다.

foo =null;

// 심벌 symbol은 es6에서 추가된 변경 불가능한 원시 타입의 값이다. 다른 값과 중복되지 않는다.

var key = Symbol('key');
console.log(typeof key); //symbol

//객체생성
var obj={};

//이름이 충돌할 위험이 있는 유일무의한 값인 심벌을 프로퍼터 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); //value

//ex )자바스크립트를 이루고 있는 거의 모든 것이 객체

//자바스크립트는 정적타입 언어인 c 나 자바와는 다르게 변수를 선언할때 타입을 선언하지 않는다.
//다만 var, let , const 키워드를 사용해 변수를 선언할 뿐이다.
var foo;
console.log(typeof foo); //undefined

foo =3;
console.log(typeof foo);  // nuber

foo = 'hello';
console.log(typeof foo); //string

foo = true;
console.log(typeof foo); //boolean

foo = null;
console.log(typeof foo); //object

foo = symbol(); //심벌
console.log(typeof foo); //symbol

foo = {}; //객체
console.log(typeof foo); //object

foo = []; //배열
console.log(typeof foo); //object

foo = function (){}; //함수
console.log(typeof foo); //function

//typeof 연사자로 변수를 연산하면 변수의 데이터타입을 반환한다.
//지바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입추론 type inference)된다.그리고
//재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다. 이러한 특징을 통적 타이핑 이라고한다.
//동적 타이핑 언어 : 자바스크립트 , 파이썬, php, 루비 , 리스프 , 펄


