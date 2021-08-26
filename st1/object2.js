//new 연산자와 같이 object 생성자 함수를 호출하면 빈 객체를 생성하야 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.
//빈객체의 생성
const  person =new Object();

//프로퍼티 추가
person.name='lee';
person.sayHello = function (){
    console.log('hi my name is ' + this.name);
}

console.log(person); //{name:"lee",sayHello:f}
person.sayHello(); //hi my name is lee

//자바스크립트는 Objcet 생성자 함수 이외에도 string ,Number,boolean ,function,array,date,regexp
//,promise 등의 빌트인 생성자 함수를 제공한다.

//string 생성자 함수에 희한 string객체 생성
const strObj= new String('lee');
console.log(typeof strObj); //object
console.log(strObj); //strung{"lee"}

//number 생성자 함수에 의힌 number객체 생성
const numObj = new Number(123); 
console.log(typeof numObj); //object
console.log(numObj); //Number{123};

const boolObj =new Boolean(true);
console.log(typeof boolObj); //Object
console.log(boolObj);  //boolean {true}

//function 생성자 함수에 의한 function 객체 (함수) 생성
const func = new Function('x','returnx*x');
console.log(typeof func); //function
console.dir(func);  //f  anoymos(x)

//array생성자 함수에 희한 array객체 생성
const arr = new Array(1,2,3);
console.log(typeof arr); //object
console.log(arr);        //[1 ,2 ,3]

//regExp 생성자 함수에 의한 regExp 객체 (정규표현식)생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); //object
console.log(regExp);        // /ab+c/i

//date 생성자 함수에 의한 date객체 생성
const date = new Date();
console.log(typeof date); //object
console.log(dete); //Mon may 04 2020 08:36:33 GMT+0900(대한민국 표준시)

//객체리터럴에 의한 객체생성방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다. 
const circlel = {
    radius:5,
    getDiameter(){
        return 2 * this.radius;
    }
}

console.log(circlel.getDiameter()); //10

const circlel2 = {
    radius:10,
    getDiameter(){
        return 2 * this.radius;
    }
}
console.log(circlel2.getDiameter());//20

//생성자 함수
function Circle(radius) {
    //생성자 함수 내부의this는 생성자 함수가 생성할 인스턴스를 가리킨다
    this.radius =radius;
    this.getDiameter = function(){
        return 2*this.radius;
    }
}

//인스턴스의 생성
const circlel  = new Circle(5); //반지름이 5인 Circle객체를 생성
const circlel2  = new Circle(10); //반지름이 5인 Circle객체를 생성

console.log(circlel.getDiameter()); //10
console.log(circlel2.getDiameter()); //20

//this는 객체 자신의 프로퍼티나 메서를 참조하기 위한 자기참저 변수다 this가 가리키는 값 this바인딩은 함술호출 방식에 따라 동적으로 결정된다.
//함수는 다양한 방식으로 호출될 수 있다.
function foo(){
    console.log(this);
}

//일반적안 함수로서 호출
//전역객체는 브라우저 환경에서는 window, nodejs환경에서는 global을 가리킨다.
foo(); //wimdow

const obj = {foo}; 
//메서드로서 호출
obj.foo(); //obj

//생성자 함수로써 호출
const inst = new foo(); //inst
//new 연산자와 함꼐 호출하면 해당 함수는 생성자 함수로 동작한다.

//new 연산자와 홈꺠 호출하지 않으면 생성자 함수로 동작하지 않는다.
//즉 일반함수로서 호출된다.

const circle3= Circle(15);

//일반함수로서 호출돤 circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); //undefined

//일반함수로서 호출돈 circle내의 this는 전역 개체를 가리킨다
console.log(radius); //15

//생성자 함수의 역활은프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화 (인스턴시 프로퍼티 추가 및 초기화 할당 )하는것

//생성자 함수
function Circle (radius){
    //인스턴스 초기화
    this.radius = radius;
    this.getDiameter= function(){
        return 2 * this.radius;
    }
}
//인스턴슷 생성
const circle1 = new Circle(5); //반지름이 5인 circle 객체를 생성
function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다,
    console.log(this); //Circle {}

    this.radius = radius;
    this.getDiameter = function (){
        return 2 * this.radius;
    }
}

function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.

    //2.this 에 바인딩 되어 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;

    }
}


function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.

    //2.this 에 바인딩 되어 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;

    }
    //3.완성된 인스턴스가 바인디왼 this가 암묵적으로 반환한다.
}

//인스턴스 생성 ,Circle생성자 함수는 암묵적으로 this를 반환한다
const circle = new Circle(1);
console.log(circle); //circle{radius:1 , getDiameter:f}


function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.

    //2.this 에 바인딩 되어 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;

    }
    //3.암묵적으로 this를 반환한다.
    //명시적으로 객체를 반환하면 암묵적인 this반환이 무시된다
    return {};
}
//인스턴스 생성 .circle생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle =new Circle(1);
console.log(circle); //{}


function Circle(radius){
    //1.암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.

    //2.this 에 바인딩 되어 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;

    }
    //암묵적으로 this를 반환한다.
    //명시적으로 원시 값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
}

//인스턴스 생성 circle생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle); //circle {radius:1 , getDiameter

//이처럼 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 가본 동작을 훼손한다.따라서 생성자 함수 내부에서 return문을 반드시 생략해야한다

//함수는 객체다
function foo(){}

//함수는 객체이므로 프로퍼를 소유할 수 있다
foo.prop = 10;

//함수는 객체이므로 메서드를 소유 할 수 이싿.
foo.method = function (){
    console.log(this.prop);
}
foo.method(); //10

//함수는 객체이지만 일반 객체와는 다르다 .일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
function foo(){}

//일반적인 함수로서 호출: [[call]] 이 호출된다.
foo();
//생성자 함수로서 호출 : [[construct]]가 호출된다.
new foo();

//함수 객체는 callable이면서 constructor이거나 callable이면서 non-constructor다.즉 모든 함수객체는 호출할수 있지만 모든 함수객체를 생성자 함수로서 호출할수 있는것은 아니다

//comstructor: 함수 선언문,함수표현식 , 클래스
//non-comstructor:메서드,화살표함수

//일반함수정의 :함수선언문 , 함수표현식

function foo(){}
const bar = function (){};
//프로퍼티x의 값으로 할당된 것은 일반함수로 정의된 함수다.이는 메서드로 인정하지 않는다.
const baz = {
    x:function(){

    }
}

//일반함수로 정의된 함수만이 constructor다.
new foo(); //foo{}
new bar(); //bar{}
new baz.x(); //x{}

//화살표 함수 정의
const arrow =() =>{};
new arrow(); //Error

//메서드 정의 :Es6의 메서드 축약표현만 메서드로 인정한다.
const obj = {
    x(){}

}
new obj.x(); //typeError

function foo(){}
//일반함수로서 호출
//[[call]]이 호출된다. 이떄 [[construct]]를 갖지 않는다면 에러가 발생한다
new foo();

//생성자 함수로서 정의하지 않는 일반 함수
function add(x,y){
    return x+y;
}

//생성자 함수로서 정의 하지 않는 일반 함수를 new연산자와 함꼐 호출
let inst = new add();

//함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst); //{}

//객체를 반환하는 일반함수
function createUser(name,role){
    return {name,role};
}

//일반함수를 new연산자와 함꼐 호출
inst = new createUser('lee','admin');
//함수가 생성한 객체를 반환한다.
console.log(inst); //{name:"lee",role:"admin"}

//생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getDiameter= function(){
        return 2* this.radius;
    }
}
//new 연산자 없이 생성자 함수 호춯하면 일반 함수로서 호출된다.
const circle =Circle(5);
console.log(circle); //undefined

//일반 함수 내부의 this는 전역객체의 window를 가리킨다
console.log(radius); //5
console.log(getDiameter()); //10

Circle.getDiameter(); 
//typeError

//new 연산자와 함꼐 생성자 함수로서 호출되면 함수 내부의 new.target은 함수자신을 가리킨다.new 연산자 없이 일반함수로서 호출된 함수 내부의 new.target은 undefined다

//생성자 함수
function Circle(radius){
    //이 함수가 new연산자와 함꼐 호출되지 않았다면 new.target은 undefined다
    if (!new.target){
        //new연산자와 함꼐 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function (){
        return 2 * this.radius;
    }
}
//new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());

//new.target은 ie에서 지원하지 않는다. 사용할 수 없느 상황이라면 스코프 세이프 생성자 패턴을 사용가능하다

//scope - safe constructor pattern
function Circle(radius){
    //생성자 함수가 new연산자와 함꼐 호출되면 함수 선두에서  빈 객체를 생성하고
    //this에 바인딩 된다. 이떄 this와 Circle은 프로토 타입에 의해 연결된다.

    //이함수가 new연산자와 함께 호출되지 않았다면 이 시점의 this는 전역객체 window를 가리킨다.
    //즉.this 와 circle은 프로토 타입에 연결되지 않는다
    if(!(this instanceof Circle)){
        //new 연산자와 함꼐 호출하여 생서왼 인스턴스를 반환한다.
        return new Circle(radius);
  
    }

    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

//new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());//10

//대부분의 빌트인 생성자 함수(Object,string ,Number,boolean ,function,array,date,regexp
//,promise 등) new연산자와 함꼐 호출되었는지를 확인한 후 적절한 값을 반환한다.

let Obj = new Object();
console.log(obj); //{}

obj = Object();
console.log(obj); //{}

let f = new Function('x', 'return x ** x');
console.log(f); //f anonymous(x) { return x ** x}

f = Function('x', 'return x ** x');
console.log(f); //f anoymous(x ){return x ** x}
//string,Number,boolean생성자 함수는 new 연산자와 함꼐 호출되었을떄 string,Number,boolean객체를 생성하여 반환하지만 new연산자 없이 호출하면 문자열 , 숫자, 불리언을 반환

const str = String(123);
console.log(str,typeof str); //123 string
const num = Number('123');
console.log(num,typeof num); //123 Number
const bool=Boolean('true');
console.log(bool,typeof bool); //true boolean