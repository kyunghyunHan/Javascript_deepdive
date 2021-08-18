//개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환이라고 한다.
var x = 10;
//명시적 타입 변환
//숫자를 문자열로 타입 캐스팅한다.
var str =x.toString();
console.log(typeof str,str); //string 10

//x변수의 값이 변경된 것이 아니다.
console.log(typeof x , x); //number 10

//개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 변경되는 것을 암묵적 타입 또는 타입강제변환 이라 한다.

var x=10;
//암묵적 타입 변환
//문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str  = x + ' ';
console.log(typeof str, str); //string 10

//x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); //number 10

//원시 값은 변경 불가능 한 값이므로 변경할 수 없다. 타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다.

//피연산자가 모두 문자열 타입이어야 하는 문맥
'10' +2 // 102

//피연산자가 모두 숫자타입어야 하는 문백
5*'10' //50

//피연산자가 또는 표현식이 불리언 타입이어야 하는 문맥
!0 //true
if(1){}

1+'2' // 12

//피연산자중 하나이상이 문자열이므로 문자열 연결 연산자로 동작한다.
`1 +1 = ${1+1}` // 1+1 =2 

//자바스크립트 엔진은 문자열 타입 아닌 값을 문자열 타입으로 암묵적 타입 변환을 수행할 떄 다음과 같이 동작한다.

//숫자 타입
0+' '  //0
-0 + ''  //0
1+''   //1 
-1 + ' ' //-1
NaN + '' //NaN
Infinity + ' ' //Infinity
-Infinity + ' ' // -Infinity

//불리언 타입
true + ' ' // true
false + ' '//false

//null타입
null + ' ' // null

//undefined타입
undeefined + '' //undeefined

//심벌타입
(symbol())+ '' //Error

//객체타입
({})+''    //  "[object object]"
Math + ' '  //"[object Math]"
//[]+''   //" "
[10,20]+''   //"10,20"
(function(){})+ '' //"fuction(){}"
Array+''    //"function Array (){[native code]}"

//숫자 타입으로 변환
1 - '1'  //0
1 * '10' //10
1 / 'one' //NaN

//위 예제에서 사용한 연산자는 모두 산술 연산자다 . 산술 연산자의 역활은 숫자 값을 만드는 것이다. 따라서 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 한다.

'1' > 0 //true

//문자열 타입
+' '    //0
+'0'    //0
+'1'    //1
+'string'  //NaN

//불리언 타입
+true   //1
+false  //0

//null 타입
+null   //0

//undefined 타입
+undefined //NaN

//심벌타입
+symbol()  //TypeError

//객체타입
+{}              // NaN
+[]              //0
+[10,20]         //NaN
+(function(){})  //NaN

// 빈 문자열은 빈배열 null flase 는 0으로, true는1로 변환된다. 객체와 빈 배열이 아닌 배열 undefined는 변환되지 않아 NaN이 된다는 것에 주의하자

//불리언타입
if('') console.log (x)

if('')  console.log('1');
if(true)  console.log('2');
if(0)  console.log('3');
if('str')  console.log('4');
if(null)  console.log('5');

// 2 4
// 이떄 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값 (거짓으로 평가되는 값 )으로 구분한다. 
//false로 평가되는 Falsy값
false
undefined
null
0,-0
NaN
''
//아래 조건문은 모두 코드 블록을 실행한다
if(!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined+ ' is falsy value');
if(!null) console.log(null + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!NaN) console.log(NaN + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

//Falsy 값 외의 모든 갑슨 모두 true로 평가되는 Truthy 값이다

//Truthy/Falsy 값을 판별하는 함수
//전달받은 인수가 Falsy 값이면 true, Truthy값이면 false를 반환한다.

function isFalsy(v){
    return !v;
}

//전달받은 인수가  Truthy값이면 true ,Falsy값으면 false값을 반환한다.
function isTruthy(v){
    return !!v;

}

//모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

//모두 true를 반환한다.
isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);

//sting 생성자 함수를 new연산자 없이 호출하는 방법
//숫자 => 문자열
String(1);
String(NaN);
String(Infinity);
//불리언타입 => 문자열타입
String(true);
String(false);
//Object.prototype.toStting메서드를 이용하는 방법
(1).toString();
(NaN).toString();
(Infinity).toString();
(true).toString();
(false).toString();

//문자열 연결 연산자를 이용하는 방법
1+'';  
NaN + "";
Infinity+'';
true+'';
false+'';

//숫자타입으로 변환
Number('0');
Number('-1');
Number('10.53');
Number(true);   //1
Number(false);   //0
//parseInt,parseFloat 함수를 사용하는 방법(문자열만 변환가능)
parseInt('0');
parseInt('-1');
parseInt('10.53');

//+단항 산술 연산자 이용
+'0';
+'-1';
+'10.53';
+true;
+false;

//*산술 연산지
'0' * 1;   //0
'-1' * 1 ; //-1
'10.53 ' * 1; //10.53
true *1;
false*1;

// 불리언타입으러로변환
//1.Boolean생성자 함수를 new연산자 없이 호출하는 방법
 
Boolean('x');   //true
Boolean(' ');   //false
Boolean('false');  //true
Boolean(0);  //false
Boolean(1);   //true
Boolean(NaN);   //false
Boolean(Infinity);  //true
Boolean(null);    //false
Boolean(undifined);  //false
Boolean({});  //true
Boolean([]);   //true

!!'x';   //true
!!'';   //false
!!'false'; //true
!!0; //false
!!1; //tru
!!NaN; //false
!!Infinity; //true
!!null; //false
!!undefined; //false
!!{}; //true
!![]; //true

//논리연산자를 사용한 단축평가
'cat'&&'dog' //dog
//첫번쨰 cat은 Truhy값이므로 true로 평가된다. 하지만 이시점에서 평가할 수 없다.
//두번쨰 피연산자인 dog가 논리연산의 결과를 결정하는 두번재 피연산자이다.

'cat' || 'dog' //cat
//하나만 피연산자가 ture로 평가되어도 true로 반환한다.

//딘축 평가 표현식            평과결과
true  || anything           //true
false || anything           //anything
true  && anything           //anything
false && anything           //false

//논리합(||) 연산자
'cat' || 'dog'; // cat
false || 'dog'; // dog
'cat' || false; // cat

//논리곱(&&) 연산자
'cat' && 'dog' //dog
false && 'dog' //false
'cat' && false  //false

//단축평가를 사용하면 if문을 대체할 수 있다. 어떤 조건이 Truhy값(참으로 평가되는 값)일떄 무언가를 해야 한다면 논리곱(&&) 연산자 표현식으로 if문을 대체 할수 있다.

var done = true;
var message = '';

//주어진 조건이 true일 떄
if (done) message = '완료';

//if문은 단축 평가로 대체  가능하다
//done이 true라면 message에 '완료' 를 할당
message = done && '완료';
console.log(message); //완료

var done = false;
var message ='';

//주어진 조건이 false일 떄 
if(!done)message= '미완료';
//done이 false라면 messagedp '미완료'를 할당
message = done || '미완료';
console.log(message); // 미완료

var done = true;
var message = '';

//if ..else문
if (done) message = '완료';
else      messaage = '미완료';
console.log(message); //완료

message = done ? '완료' : '미완료';
console.log(message); y//완료

//객체는 key 와 value 으로 구성된 property의 집합이다. 만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 Null 또는 undefined인 경우 객체의 property를 참조하면 
//type error 가 발생한다. 에러가 발생하면 프로그램이 강제 종료된다.

var elem = null;
var value = elem.value; //type Error

var elem = null;
//elem 이 null 이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
//elemdl Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value; //null;

//함수를 호출할 떄 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 이떄 단축평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 잇는 에러를 방지 할 수있다.

//단축평가를 사용한 매개변수의 기본값 설정
function getStringLength(str){
    str= str || '';
    return str.length;
}

getStringLength();    //0
getStringLength('hi'); //2

//es6의 매개변수의 기본값 설정
function getStringLength(str = ''){
    return str.length;
}

getStringLength();   //0
getStringLength('hi'); //2

var elem = null;
//elem이 null또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value= elem ?.value;
console.log(value);  //undefined

var elem = null;
//elem이 Falsy값이면 elem으로 평가되고, elem 이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log(value); //null

var str = ' ';
//문자열의 길이 (length)를 참조한다.
var length = str && str.length;
//문자열의 길아 (length)를 참조하지 못한다.
console.log(length); //''


var str= ' ';
//문자열의 length를 참조한다. 이떄 좌항 피연산자가 flase로 평가되는 Falsy값이라도 
//null또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length); //0 

//null병합 연산자

//좌항의 피연산자가 nulL 또는 undefined이면 우항의 피연산자를 반환하고, 
//그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default string';
console.log(foo); //default string

//Falsy 값인 0 이나 ' ' 도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = ' '|| 'default string';
console.log(foo); //"default string"

//좌항의 피연산자가 Falsy 값이라도 null또는 undefined가 아니면 좌헝의 피연산자를 반환한다.
var foo = ' ' ?? 'default string';
console.log(foo);  //""

//ull병합 연산자 ??는 변수에 기본값을 설정할때 유용하다.