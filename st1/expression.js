//value 은 expression(표현식)이 평가되어 생성된 결과를 말한다.
 var sum = 10+20;
 //위 예제의 sum변수에 할당되는 것은 10+20이 아니라 평가된 결과인 30이다.

 //**리터럴은 사람이 아해할 수있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법을 말한다.

 //정수리터럴                              100
 //부동소주점리터럴                          10.5
 //2진수리터럴                             0b01000001
 //8진수리터럴                             0o101
//16진수리터럴                             0x41
//문자열리터럴                              'he1lo'
//불리언리터럴                             true, false
//Null리터럴                              null
//undefined리터럴                         undefined          
//객체리터럴                              {name : 'lee' , address:'seoul'}
//배열리터럴                              [1,2,3]
//함수리터럴                               fiunction{}
//정규표현식리터럴                            /[A-Z]+/g

//표현식은 값으로 평가될수잇는 문이다.즉 표현식이 평가되면 새로운 값을 생성하거나 기존값을 참조한다.

var score =100; 
var scc2 = 50+50;
score;  //값을 생성하지는 않지만 값으로 평가되므로 표현식이다.


//리터럴 표현식
10
'hello'

//식별자 표현식
sum
personalbar.name
arr[1]

//연산자 표현식
10+20
sum=10
sum !==10

//함수/메서드 호출 표현식 (선언이 이미 존재한다고 가정)
Square()
PerformanceNavigation.getName()


var x = 1+2;

//식별자 표현식 x 는 3으로 표현된다.
x+3;

//statement (문) 은 프로그램을 구성하는 기본단위이자 최소 실행 단위다.
//문은 여러 토큰으로 구성되며 token이란 문법적인 의미를 가지며 , 문법적으로 더 이상 나눌 수 없는 코드의 기본요소아다.
//ex) 키워드 , 식별자 , 연산자 , 리터럴 , 세미클론, 마침펴 등의 특수 기호는 문법적인 의미를 가지며, 문법적으로 더 이상 나눌수 없는 코드의 기본요소이므로 모두 토큰이다.

//변수 선언문 
var x;
 //할당문
x=5;
 //함수선언문
function foo(){

}
 //조건문
if(x>1){console.log(x);}

 //반복문
for(var i =0; i<2; i++){console.log(i);}

//세미클론은 ; 은 문의 종료를 나타낸다.
// if 문 for 문 함수 등의 코드 블록뒤에는 세미클론 등을 붙이지 않는다.
 
function foo (){
    return{}
    //asi 의 동작 결과 => return;{};
    //개발자의 예측 => return {};
}

conseole.log (foo()); //undefined

var bar = function (){}
(function(){});

//asi의 동작결과 => var bar = function(){}(function(){})();
//개발자의 예측 => var bar =  function(){};(function(){})();
//Type Error : (intermediate value )(...)is not a function

//변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다.
var x;
//1,2,1+2,x=1+2 는 모두 표현식이다.
//x=1+2는 표현식이면서 완전한 문이다.
x=1+2;

//표현식인 문과 표현식이 아닌문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해보는 것이다.

var x;
x= 100;

var foo = var x; //syntaxError: unexpectec token var

var foo = x=100;
console.log(foo);  //100