//연산자는 하나의 이상의 표현식을 대상으로 산술, 할당 비교 , 논리 , 타입 , 지수 연산 등을 수향햐 허나의 값을 만든다. 이떄 연산의 대상을 피연산자라 한다.

//산술 연산자
5*4 //20
//문자열 연결 연산자
'my name is ' +'lee' // my name is lee
//할당 연산자
color = 'red' //red
//비교 연산자

3>5 //false

//논리 연산자
true && false // fase

//타입 연산자
typeof 'hi' // string

//산술 연산자가 불가능 한 경우, NaN를 반환

5 +  5 //덧셈  부수효과 없음
5 - 2 //뺄셈  부수효과 없음
5 * 2 //곱셈  부수효과 없음
5 / 2  //나눗셈 부수효과 없음
5 % 2  // 나머지 부수효과 없음

++  //증가 부수효과 있음
-- //감소 부수효과 있음
//증가 /감소 연산자는 피연산자의 값을 변경하는 부수효과가 있다는 것이다.

var x = 1;
//++연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.

x++; //x = x +1 ;
console.log(x); //2

//--연산자는 피연삱의 값을 변경하는 암묵적 할당이 이뤄진다.
x --; // x=x-1;
console.log(x); // 1

//연산자 앞에는 피연사자의 값을 수행시킨 후 다른연산자 수행
//연산자 뒤에는 다른연산 수행 후 피연산자의 값을 증가,또는 감소

var x = 5; result;

//선할당 후 증가
result = x++;
console.log(result.x); // 5 6

//선 증가 후 할당
result = ++x;
console.log(result,x); // 7 7

//선할당 후 감소 
result = x --;
console.log(result,x); // 7 6

//선 감소 후할당
result = --x;
console.log(result,x); //5 5


var x ='1';

//문자열을 숫자로 타입변환한다.
console.log( +x); //1
//부수효과는 없다.
console.log(x); // "1

//불리언 값을 숫자로 타입 변환한다.
x=true;
console.log(+x); // 1
//부수효과는 없다.
console.log(x); //true

//불리언 값을 숫자로 타입 변환한다.
x=false;
console.log(+x); //0

//부수효과는 없다.
console.log(x); //false

//문자열을 숫자로 타입 변환 할수 없으므로 NaN을 반환한다.
x="hello";
console.log(+x); NaN
//부수효과는 없다.
console.log(x); //"hello"

//부호를 반전한다.
-(-10); // 10
//문자열을 숫자로 타입 반환한다.
-'10'; //-10

//불리언 값을 숫자로 타입 변환한다.
-true; //-1

//문자열은 숫자로 타입 변활할수 없으므로 NaN을 반환한다.
-'hello'; // NaN

//문자열 연결 연산자
'1'+2; //12
1+"2"; //12

//산술 연산자
1+2; // 3

//true는 1로 타입 변환한다.
1+true; // 2

//false는 0으로 타압 변환한다.
1+false; //1

//null은 0으로 타입 변환한다,
1+ null ; // 1

//undefined은 숫자로 타입 변환하지 않는다.
+undefined; // NaN
1+undefined ; //NaN

//할당 연산자

// 할당 연산자       예       동일표현     부수효과
=               x =5       x=5           o 
+=              x+=5       x=x+5         o
-=              x-=5       x=x-5         o 
*=              x*=5       x=x*5         o             
/=              x/=5       x=x/5         o 
%=              x%=5       x=x%5         o

var x;
x=10;
console.log(x); //10

x+=5;
console.log(x); //15

x-=5;
console.log(x); //10

x *=5;
console.log(x); //50

x/=5;
console.log(x); //10

x%=5 ;
console.log.apply(x);//0

var str = 'my name is ';
//문자열 연결 연산자
str += 'lee'; //str = str+ 'lee'
console.log(str); // 'my name is lee'

var x ; 

//할당문은 표혀식인 문이다.
console.log(x=10); //10
//할당문은 값으로 평가되는 표현식인 문으로서 값으로 평가된다.

var a,b,c;

//연쇄할당 , 오른쪽애서 왼쪽으로 진행
// c=0 : 0으로 평가
a=b=c=0;
console.log(a,b,c); // 0 0 0


//비교 연산자

==    동등비교    x==y    x와 y 값아 값음
===    일치비교   x===y   x와 y 값이 타입이 같음
!=    부동등비교   x!=y    x와 y의 값이 다름
!==   불일치 비겨  x!==y   x와 y의 값과 타입이 다름 
//동등 비교 == 연산자는 좌항과 우항의 피연산자를 비교할 떄 먼저 암묵적 타입변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다
//동등비교
5==5;  true
//타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5=="5"; true

"0"==''; false
0 == ''; true
0=='0'; true
false == 'false'; false
false == "0"; true
false == null;   false
false == undefined ; false

=== ///일치비교 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다.
다시 말해, 암묵적 타입 변환울 하지 않고 값을 비교한다. 따라서 일치 비교 연산자는 예측하기 쉽다.N

//일치비교
5===5; true
5==='5'; false

//NaN은 자신과 일치하지 않는 유일한 값이다
NaN ===NaN; //false

//isNaN 함수는 지정한 값이 NaN인지 확인 그결과를 불리언 값으로 변환한다.
isNaN(NaN);  true
isNaN(10);   false
isNaN(1+undefined); true

//양의 0과 음의 0비교 , 일치 비교 모두 true
0===-0; true
0==-0; true


-0 === +0 ; true
Object.is(-0,+0); false
NaN === NaN; false
Object.is(NaN,NaN); true

5!= 8;  true
5!=5; false
5!='5'; false

5!== 8; true
5!==5; false
5!=='5'; true

5>0; true
5>5; false
5>=5; true
5<-5; true

//삼항 조건 연산자
var x =2;
//2 % 2 는 0애고 0 은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수 '  ; '짝수' ;
console.log(result); //짝수

var x =2,result;
if (x%2) result = '홀수' ; 
else     result = '짝수' ; 
console.log(result); //짝수


//if...else문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
var x = 10;
var result = if(x %2){result = '홀수';} else {result = '짝수';};
==에러 =if 문은 표현식이 아닌 문, 따라서 값차럼 사용 x

var x = 10;
//삼항 조건 연산자표현식은 표현식인 문인다. 따라서 값처럼 사용 가능
var x= 10;
var result = x % 2 ? '홀수 ' : ' 짝수' ;
console.log(result); //짝수

|| 논리합(OR)  
&& 논리곱(AND)
!  부정 (NOT)

true || true;    true
true || false;   true
false || true ;   true
false || false;   false

true && true ;   true
true && false ;   false
false && true;   false
false && false ;   false

! true;    false 
! false;    true

//암묵적 타입 변환
!0; true
!'hello'; false

//단축평가
'cat' && 'dog';   //  'dog'

//드 모르간의 법칙
// 논리 연산자로 구성된 복잡한 표현식은 가독성이 좋지 않아 하눈에 이해하기 어려울 때가 있다. 이러한 경우 드 모르간의 법칙을 활용하면 복잡한 표현식을 좀더 가독성 좋은 표현식으로 변환할 수 있다.

!(x || y) === (!x && !y)
!(x && y) === (!x || !y)

var x,y,z;
x=1,y=2,z=3; //3

//쉼표연사자는 왼쪽부터 차례대로 평가하고 마지막 피연산자의 결과를 반환한다.

10 * 2+3; //23
//그룸 연산자를 사용 우선순위를 조절

10 * (2+3); //50
typeof ''   //string
typeof 1 //number
typeof NaN //numver
typeof true //boolean
typeof undefined  //undefined
typeof Symbol()  //symbol
typeof null //object
typeof [] //object
typeof{} //object
typeof new Date() //object
typeof /test/gi //object
typeof function(){} //function


var foo = null;
typeof foo === null ; false
foo === null;  true

//typeof연산자로 null값을 연산해보면 null이 아닌 object 를 반환 -- 자바스크립트 버그 
//===를 통해 null타입 확인

typeof undefined; // ubdefined


2**2; //4
2**2.5 //5.65685...
2**0; //1
2**-2//0.25

Math.pow(2,2) //4

2**2**2; 16
Math.pow(math.pow(2.2)2); 16

-5 **2;
//음수룰 거듭제곱 밑으로 사용해 사용하려면 다음과 같이 괄호로 묶어야 한다.
(-5) **2; //25

var num =5;
num  ** 2; //25

2*5**2 //50  지수연산자는 이항 연산자 중에 우선순위가 가장 높다

?. // 온셔널 체이닝 연산자
?? //null병합 연산자
delete //프러퍼티 삭제
new //생성자 함수 호출
instanceof  //좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스 인지 판별
in 프로퍼티 존재 확인

var x;
x=1;
console.log(x); //1
x++;
console.log(x);//2

var o = {a:1};

delete o.a ;
console.log(o); //{}

//연산자 우선순위

1  ()
2  new(매개변수 존재 ) , [] , ()  , ?. 
3  new (매개변수 미존재)
4  x++ ,x--
5 !x,+x,-x,++x,--x,typeof,delete
6 **
7 *,/,%
8 + , -
9 < , <= ,in , instanceof
10 == , != ,=== ,!==
11 ??
12 &&
13 ||
14 ? ...  : ...
15 할당연산자 ( += , -= , = ...)
16 ,

10 * (2+3); //50

연산자 결합 순서 
좌항 - 우항  +,-,/,%,<,<=,>,>=,&&,||,.,[],(),??,?.,in,instanceof
우항 - 좌항 ++,--,할당연산자 (=,+=,-=,...), !x , +x, -, --x, typeof, delete, ?... : ...
 
