//let const
var x=1;
var y=1;
//var키워드로 선언된 변수는 같은 스코프내에서 중복 선언을 허용한다.
//초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;
//초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x);  //100
console.log(y); //1

var x =1;
if(true){
    //x는 전역변수다. 이미선언된 전역 변수x가 있으므로 x변수는 중복 선언된다.
    //이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
    var x =100;
}
console.log(x); //10

var i =10;
//for문에서 선언한 i는 번역변수다 . 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i =0 ; i<5 ; i++){
    console.log(i); // 0  1 2 3 4
}
//의도치 않게 i 의 변수의 값이 변경되었다
console.log(i); //5

//변수 호이스팅
//var키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선도로 끌어올려진 것처럼 동작한다.
//즉 변수 호이스팅에 의해 var 키워드로 선언한 변수는 변수선언문 이전에 참조할 수 있다.

//이시점에는 변수 호이스팅 에 의해 이미 foo변수가 선언되었다.(1.선언단계)
//변수 foo는 undefined로 초기화된다.(2.초기화단계)
console.log(foo); //undefined
//변수에 값을 할당(3.할당단계)
foo=123;

console.log(foo);//123

//변수 선언된 런터임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.

var foo =123;
//var키워드로 선언된 변수는 같은 스코프 내에서 중복선언을 허용한다.
//아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var foo=456;
let bar=123;
//let const키워드로 선언된 변수는 같은 스코프내에서 중복 선언을 허용하지 않는다.
let bar=456; //Error:bar has already been declared

//var키워드로 선언된 변수는 오로지 함수의 코드블록만을 지역스코프로 인정하는 함수레벨스코프를 따른다
//let키워드로 선언한 변수는 모든 코드블록을 지역스코프로 인정하는 블록레벨스코프를 따른다

let foo=1; //   전역변수

{
    let foo=2; //지역변수
    let bar=3; //지역변수

}
console.log(foo); //1
console.log(bar); //Error

let i =10;   //전역스코프
function foo(){
    let i =100;       //함수레벨스코프
    for (let i =1;i <3;i++){
        console.log(i); //1 2  블록레벨스코프
    }
    console.log(i); //100
}
foo();
console.log(i); //10

console.log(foo); //Error
let foo; 
//변수호이스팅이 안되는것처럼 작동

//var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
//따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); //undefined
var foo;
console.log(foo);//undefined
foo=1;
console.log(foo);//1

//let 키워드로 선언한 변수는'선언단계'와'초기화 단계'가 분리되어 진행된다.

//런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않앗다.
//초기화 이전의 일시적 사각지대 단계에서는 변수를 참조할 수 없다.
console.log(foo); //Error
let =foo; //변수선언문에서 초기화 단계가 실행된다.
console.log(foo); //undefined
foo=1;  //할당문에서 할당
console.log(foo); //1

let foo =1; //전역변수
{
    console.log(foo); //Error
    let =foo=2;//지역변수 
}
//let 키워드로 선언한 변수의 경우 변수 호이스팅이 발생하지 않는다면 위예제의 경우 전역변수의 값을 출력해야한다

//이예제는 브라우저 환경에서 실행
//전역변수
var x=1;
//암묵적 전역
y=2;
//전역함수
function foo(){}

//var 키워드로 선언한 전역변수는 전역객체 window의 프로퍼티이다.
console.log(window.x); //1
//전역객체 window의 프로퍼티는 전역변수처럼 사용할 수 있다.
console.log(x);1
//암묵적 전역은 전역객체 window의프로퍼티이다
console.log(window.y); //2
console.log(y); //2

//함수 선언문으로 정의한 전역 함수는 전역객체 window의 프로퍼티이다.
console.log(window.foo); // f foo(){}
//전역 객체 window프로퍼티는 전역변수처럼 사용할 수 없다.
console.log(foo); //foo(){}
//let 키워드로 선언한 전역변수는 전역객체의 프로퍼티가 아니다

let x =1;
//let .const키워드로 선언한 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); //undefined
console.log(x);1

//const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.
const foo =1;

const foo; //Error

{
    //변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo); //Error
    const foo=1;
    console.log(foo);//1

}
//블록레벨 스코프를 갖는다
console.log(foo); //Error

//var또는 let키워드로 선언한 변수는 재할당이 자유로우나 const키워드로 선언한 변수는 재할당이 금지된다.
const foo=1;
foo=2; //Error

//상수는 재할당이 금지된 변수

//세전가격
let preTaxPrice =100;
//세후가격
//0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice*0.1);
console.log(afterTaxPrice); //110
//const키워드로 선언된 변수에 원시 값을 할당한 경우 원시값은 변경할 수 없는 값이고 const키워드에 의해 재할당이 금지되므로\
//할당된값을 변결할수 있는 방법은 업다

//세율을 의미하는 0.1은 변결할 수 없는 상수로서 사용될 값이다.
//변수이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

//세전가격 
let preTaxPrice =100;

//세후가격
let afterTaxPrice = afterTaxPrice + (afterTaxPrice *TAX_RATE);
console.log(TAX_RATE) ; //110

// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변결할수는 있다

const person = {
    name:'lee'
}
//객체는 변경 가능한 값이다.따라서 재할당 없이 변경이 가능하다.
person.name = 'kim';
console.log(person); {name:'kim'}
//const키워드는 재할당을 금지할 뿐 불변을 의미하지는 않는다.
