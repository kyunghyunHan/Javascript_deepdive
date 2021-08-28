//객체지향프로그래밍은 프러그램을 명령어 또는 함수의 목올으로보는 전통적인 명령형 프로그래밍의 절차지향적 관점에서 밧어나 여러개의 독립적 단위  즉 객체의 집합으러 프로그램을 표현하려는 프로그래밍 패러다임
//객체지향은 실세계의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다. 실체는 특징이나 성질을 나타내는 속성을 가지고 있고 이를 통해 실체를 인식하거나 구별할 수 있다
//사람에게는 다양한 속성이 있으나 우리가 구현하려는 프로그래밍에서는 사람의 이름과 주소라는 속성에만 관심이 있다고 가정하자 ,이처람 다양한 속성중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화라고한다

//이름과 주소 속성을 갖는 객체
const person = {
    name:'lee',
    address:'seoul'
}

console.log(person); //{name:'lee' ,address: 'seoul'}

//속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조

//반지름은 원의 상태를 나타내는 데이터이며 원의 지름, 둘레 ,넓이를 구하는 것은 동작이다.

const circle = {
    radius :5, //반지름

    //원의지름 :2r
    getDiameter(){
        return 2 * this.radius;
    },

    //원의 둘레 :2nr
    getPerimeter(){
        return 2 * Math.PI * this.radius **2;
    }
}

console.log(circle);
//{ radius :5 , getDiameter:f ,getPerimeter:f},getArea:f}

console.log(circle.getDiameter()); //10
console.log(circle.getPerimeter()); //31.4159....
console.log(circle.getArea());  //78.53.......

//이처럼 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다. 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조

//상속은 객체지향 프로그래밍 핵심 개념으로 이떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.

//생성자함수
function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
        //Math.PI는 원주율을 나타내는 상수
        return Math.PI * this.radius **2;    }
}

//반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
//반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

//Circle 생성자 함수는 인스턴스를 생성할떄마다 동일한 동작을 하는
//getArea메서드를 중복 생성하고 모든 인수턴스가 중복 소유한다
//getArea메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다
console.log(circle.getArea === circle2.getArea); //false
console.log(circle1.getArea()); //3.14..
console.log(circle2.getArea()); //12....

//상속을 통해 불필요한 중복을 제거한다. 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

//생성자함수
function Circle(radius){
    this.radius = radius;
}

//Circle 생성자 함수가 생성한 모든 인스턴스가 getArea메서드를 
//공유해서 사용할수 있도록 프로토타입에 추가한다
//프로토타입은 Circle생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다.
Circle.prototype.getArea = function(){
    return Math.PI *this.radius **2;

}
//인스턴스 생성
const circle1 =new Circle(1);
const circle2 =new Circle(2);

//Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역활을 하는
//프로토타입 Circle.prototype으로부터 getArea메서드를 상속받는다.
//즉  Circle생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea메서드를 공유한다.
console.log(circle.getArea === circle2.getArea); //true

console.log(circle.getArea()); //3.14...
console.log(circle2.getArea()); //12.....

//모든 객체는 __proto__접근자 프로퍼티를 통해 자신의 프로퍼티 , 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.
//__접근자 프로퍼티는ㄴ 객체가 직접 소유하는 프로퍼티가 아니라 object.prototype의 프로퍼티다.
//모든 객체는 상속을 통해 object.prototype.__proto__잡근 자 프로퍼티를 사용할 스 있다

const person = {name:'lee'};

//person객체는 __proto__프로토 타입을 소유하지 않는다
console.log(person.hasOwnProperty('__proto__')); //false

//{get: f, set:f, eumerable:false,configurable:true}

//모든 객체는 Object.prototype의 접근자__proto__를 상속받아 사용할 수 있다.

//프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호참조에 의해 프로토타입체인이 생성되는 것을 방지하기 위해
const parent = {};
const child = {};

//child의 프로토타입을 parent로 설정
child.__proto__=parent;
//parent의 프로토타입을 child 로 설정
parent.__proto__=child; //Type Error
//프로퍼티 검색 방향이 한쪽방향으로만 흘러가야한다.하지만 서로가 자신의 프로퍼티타입이 되는 비정상적인 프로토타입 체인,순한찹조하는 프로토타입체인이 만들어지면 무한루프에 빠진다

//obj는 프로토타입 체인의 종점이다. 따라서 object__proto__를 상속받을 수 없다.
const obj = Object.create(null);

//obj는 Object__proto__를 상속받을수 없다.
console.log(obj.__proto__); //undefined

//따라서 __proto__보다 Object.getprototype메서드를 사용하는 편이 좋다
console.log(Object.getPrototypeOf(obj)); //null

//접급자 프로퍼티 대신 프로토 타입의 참조를 취득하고 싶은 경우에는 Objcet.getprototypeof메서드를 사용하고 프로토타입을 교체하고 싶은 경우에는 object.setprototypeof메서드 사용
const obj = {};
const parent= {x:1};

//obj객체의 프로토 타입을 취득
Object.getPrototypeOf(obj); //obj.__proto__
//obj 객체의 프로토타입을 겨체
Object.setPrototypeOf(obj,parent); //obj.__proto__=parent;
console.log(obj.x); //1

//함수 객체만이 소유하는 prototype프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다
//함수 객체는 prototype프로퍼티를 소유한다
(function(){}).hasOwnProperty('prototype'); //true

//일반 객체는 prototype프로퍼티를 소유하지 않는다
({}).hasOwnProperty('prototype'); //false

//prototype 프로퍼티는 생성자함수가 생성할 객체릐 프로토타입을 가리킨다.따라서 생성자 함수로서 호출할수 없는 함수 즉 non-constructor인
//화살표 함수와 Es6메서드 축약 표현으로 정의한 메서드는 prototype프로퍼티를 소유하지 않으며 프로토 타입도 생성하지 않는다

//화살표 함수는 non-constructor디
const Person = name =>{
    this.name=name;
}

//non-constructor는 prototype프로퍼티를 소유하지 않는다
console.log(person.hasOwnProperty('prototype')) //false

//non-constructor는 프로토타입을 생성하지 않는다
console.log(Person.prototype); //undefined

//es6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다

const obj = {
    foo(){}
};

//non-constructor는 prototype프로퍼티를 소유하지 않는다
console.log(obj.foo.hasOwnProperty('prototype'));//false

//non-constructor는 프로토타입을 생성하지 않는다
console.log(obj.foo.prototype); //undefined

//모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype 으로부터 상속받은)__proto__접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype프로퍼티는 결국 동일한 프로토타입을 가리킨다.하지만 이들 프로퍼티를 사용하는 주체가 다른다

//구분                    소유         값              사용주체        사용목적
//__proto__접근자 프로퍼티  모든객체       프로토타입의 참조   모든객체        객체가 자신의 프로토토타입에 접근 또는 교체하기 위해 사용
//prototype프로퍼티      constructor  프로토타입의 참조    생성자 함수       생성자 함수가 자신이 생설할 객체(인스턴스)의 프로토 타입을 할당하기 위해 사용

//생성자 함수
function person(name){
    this.name=name;
}

const me = new Person('lee');

//결국 person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다
console.log(Person.prototype === me.__proto__); //true

//생성자 함수
function Perosn(name){
    this.name =name;

}
const me = new Person('lee');
//me 객체의 생성자 함수는 person이다
console.log(me.constructor === Person); //true

//Obj 객체를 생성한 생성자 함수는 Objcet다
const obj = new Object();
console.log(obj.constructor === Object); //true

//add 함수 객체를 생성한 생성자 함수는 Function이다
const add = new Function('a','b','return a+b');
console.log(add.constructor === Function); //true

//생성자 함수 
function Perosn(name){
    this.name = name;
}
//me객체를 생성한 생성자 함수는 perosn이다
const me = new Person('lee');
console.log(me.constructor ===Person); //true

//객체리터럴
const obj = {};

//함수리러털 
const add =function(a,b){return a+b};

//배열리터럴
const arr = [1,2,3];
//정규표현식 리터럴
const regexp = /is/ig;

//obj객체는 Object생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다

const obj = {};
//하지만 obj객체의 생성자 함수는 Object생성자 함수다
console.log(obj.constructor === Object); true

//추상연산
//추상연산은 ECMA Script사양에서 내부 동작의 구현 알고리즘을 표현한 것이다 함수와 유사한 의서코드

//2.Object 생성자 함수에 희한 객체 생성
//인수가 전달되지 않았을떄 추상연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다
let obj = new Object();
console.log(obj); //{}

//1.new target이 undefined나 Object가 아닌 경우
//인스턴스 - Foo.prototype- Object.prototype순으로 프로토 타입 체인이 생성된다
class Foo extends Object {}
new Foo(); //foo{}

//3.인수가 전달된 경우에는 인수를 객체로 변화한다.
//Number객체 생성
obj = new Object(123);
console.log(obj); //Number{123}

//string객체생성
obj = new Object('123');
console.log(obj); // string{123}

//foo 함수는 Function생성자 함수로  생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo(){}

//하지만 constructor프로퍼티를 통해 확인해보면 함수 foo생성자 함수는 Function생성자 함수다
console.log(foo.constructor === Function); //true
//프로토타입은 생성자 함수와 함꼐 더불어 생성되며 prototype과 constructor 프로퍼티에 의해 연결되어 있기때문이다 다시말해
//프로토타입과 생성자 함수는 단독으로 존재할수 없고 언제나 쌍으로 존재한다.


//리터럴 표기법          생성자함수      프로토타입
//객테리터럴            Object       Object.prototype
//함수리터럴           Function      Function.prototype
//배열리터럴           Array         Array.prototype
//정규표현식 리터럴      RegExp          RegExp.prototype

//프로토 타입은 생성자 함수가 생성되는 시점에 더불어 생성된다
//생성자 함수로서 호출할 수 있는 함수 ,즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.

//힘수정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토 타입도 더불어 생성된다.
console.log(Person.prototype); //{constructor:f}

//생성자 함수
function Person(name){
    this.name = name;

}
//화살표 함수는 non-constructorek
const Person = name =>{
    this.name=name;

}
//non-constructor는 프로토타입이 생성되지 않는다
console.log(Person.prototype); //undefined

//모든 빌트인 생성자 함수는 전역객체가 생성되는 시점에 생성된다. 생성된 프로토타입은 빌튼 생성자 함수의 prototype프로퍼티에 바인딩된다.
//전역객체는 코드가 실행되기 이전단계에 자바스크립트 엔진에 의해 생성되는 특수한 객체다
//전역객체는 표준빌트인 객체들과 환경에 따른 호스트 객체, 그리고 var키워드로 선언한 전역변수와 전역함수를 프로퍼티로 갖는다math,rexflect,json을 제외한 표준빌트인 겍체는 모두 생성자 함수다

//전역객체 window는 브라우저에 종석적이므로 아래코드는 브라우저 환경에서 실행해야한다
//빌트인 객체인 Object는 전역객체 window의 프로퍼티다
window.Object === Object //true

//생성자 함수또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의[[prototype]]내부 슬롯에 할당된다.

//객체는 다음과 같이 다양한 생성 방법이 있따.
     //객체리터럴
    //Object 생성자 함수
    //생성자함수
    //object.create메서드
    //클래스

//자바스크립트 엔진은 객체 리터럴을 평가하여 객체를 생성할 떄 연산 ordinaryObjectCreate를 호춣한다. 

const obj = {x:1};

const obj ={x:1};

//객체리터럴에 의해 생성된 obj는 Object.prototype을 상속받는다.
console.log(obj.constructor ===Object); //true
console.log(obj.hasOwnProperty('x')); //true

const obj = new Object();
obj.x =1;

//obj생성자 함수에 의해 성성되obj객체는 object.prototype을 프로토타입을로 갖게되며 이로써 object.prototye

const obj = new Object();
obj.x =1 ;

//Object생성지 함수에 의해 생성된 obj객체는 Object.prototype을 상속받는다
console.log(obj.constructor === Object); //true
console.log(obj.hasOwnProperty('x')); //true

//new연산자와 함꼐 생성자 함수를 호출하여 인스턴스를 생성하면 다른 객체 생성 방식과 마찬가지로 추상연산 OrdinaryObjectCreate가 호출된다.
//이떄 추상연산 OrdinaryObjectCreate가 에 전달되는 프로토타입은 생성자 함수의 prototype프로퍼티에 바인딩 되어있는 객체다

function person(name){
    this.name = name;

}

const me = new Person ('lee'); 

function Person(name){
    this.name = name;

}

//프로토타입 메서드
Person.prototype.sayHello = function (){
    console.log(`Hi my name is ${this.name}`);
}

const me = new Person('lee');
const you = new Person('kim');

me.sayHello(); //hi my name is lee
you.sayHello(); //hi my name is kim

function person(name){
    this.name =name;
}

//프로토타입 메서드
Perosn.prototype.sayHello = function(){
    console.log(`hi my name is ${this.name}`);
}
const me = new Person('lee');

//hasOwnProperty는 Object.prototype의 메서드다
console.log(me.hasOwnProperty('name'));; //true

Object.getPrototypeOf(me) ===Person.prototype; //true

//Person.prototype의 프로토타입은 Person.prototype이다 프로토타입의 프로톹입은 언제는 Person.prototype다

Object.getPrototypeOf(person.prototype) === Object.prototype; //true

//자바스크립트는 객체의 프로퍼티 (메서드포함)에 접근할고 할떄 객체의 접근하려는 프로퍼티가 없다면 [[prototype]]내부 슬롯의 참조를 따라
//자신의 부모 역활을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토타입체인이라 한다 프로토타입체인은 자바스크립트가 객체지향프로그래밍의 상속을 구현하는 메커니즘이다.

//hasOwnProperty는 Object.prototype의 메서드다
//me객체는 프로토타입 체인을 따라 hasOwnprototype메서드를 검색하여 사용한다.
me.hasOwnProperty('name'); //true

//자바스크립트 엔진은 다음과 같은 과정을 거쳐 메서드를 검색한다.물론 프로퍼티를 참조하는 경우도 마찬가지다
//1.먼저hasOwnProperty메서드를 호출한 me 객체에서 hasOwnProperty메서드를 검색한다. me객체에는 hasOwnProperty메서드가 없으므로
//프로토타입 체인을 따라 ,다시말해 [[prototype]]내부 슬롯에 바인딩되어 있는 프로토타입 (위 예제의 경우 person,prototype)으로 이동하여
//hasOwnProperty 메서드를 검색한다.

//2.person.prototype에도 hasOwnProperty메서드가 없으므로 프로토타입 체인을 따라 다시 말해 [[protottpe]]내부 슬롯에 바인딩 되어 있는 프로토타입
//(위 예제의 경우 object.prototype)으로 이동하여 hasOwnProperty메서드를 검색한다.

//3.object.prototype에는 hasOwnProperty메서드가 존재한다. 자바스크립트 엔진은 object.prototype.hasOwnProperty메서드를 호출한다. 이떄
// object.prototype.hasOwnProperty메서드의 this에는 me객체가 바인딩된다.

Object.prototype.hasOwnProperty.call(me,'name');

//call메서드는 this사용할 객체를 전달하면서 함수를 호출한다. this로 사용할 me 객체를 전달하면서 Object.prototype.hasOwnPropert
//메서드를 호출한다

//프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype을 프로토타입 체인의 종점 (end of prototype chain)이라
//한다.object.prototype의 프로토타입 , 즉 [[prototype]]내부 슬롯의 값은 null이다

console.log(me.foo);//undefined

//이처럼 자바스크립 엔진은 프로토타입 체인을 따라 프로퍼티/메서드를 검색한다 자바스크립트 엔진은 객체 간의 상속 관계로 이루어진 프로토타입의 계층적인 구조에서 객체의 프로퍼티를 검샏한다.
//프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘이라고 한다.
//프로퍼티가 아닌 식별자는 스코프체인에서 검색,스코프 체인은 식별자 검색을 위한 메커니즘

me.hasOwnProperty('name');

//위 예제의 경우, 먼저 스코프 체인에서 me식별자를 검색한다. me 식별자는 전역에서 선언되었으므로 전역 스코프에서 me 식별자를 검색한 다음 ,me객체의 프로토타입 체인에서
//hasOwnProperty메서드를 검색한다.
//스코프 체인과 프로토타입 체인은 서로 연관없이 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는데 사용한다.

const Person = (function(){
    //생성자 함수
    function Perosn(name){
        this.name = name;
    }

    //프로토타입 매서드
    person.prototype.sayHello = function(){
        console.log(`hi ! my name is ${this.name}`);
    }
    //생성자 함수를 반환
    return Person;
}());
const me = new Person('lee');

//인스턴스 매서드
me.sayHello = function (){
    console.log(`hey! my name is ${this.name}`);
}

//인스턴스 메서드가 호출된다. 프로토타입 매서드는 인스턴스 메서드에 의해 가려진다
me.sayHello(); //hey! my name is lee

//오버라이딩  
//상위 클래스가 자기고 있는 메서드를 하위 쿨래스가 재정의 하여 사용하는 방식

//오버로딩
//함수의 이름은 동일하지만 매개 변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식이다.
//자바스크립트는 오버로딩을 지원하지 않지만 arguments객체를 사용하여 구현 할수는 있다.

//인스턴스 메서드를 삭제한다.
delete me.sayHello;
//인스턴스에는 satHello메서드가 없으므로 프로토타입 메서드가 호출된다.
me.sayHello(); //Hi my name is lee

//프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다
delete me.sayHello;
//프로토 타입 메서드가 호출된다.
me.sayHello(); //hi my name is lss

//이와 같이 하위 객체를 통해 프로토타입의 프로퍼티를 변겨 또는 삭제하는 것은 불가능 get엑세스는 허용,set엑세스는 불가능

//프로토타입 메서드 변경
person.prototype.sayHello = function(){
    console.log(`hey my name is ${this.name}`);

}
me. sayHello(); //hey my name is lee

//프로토타입 메서드 삭제
delete person.prototype.sayHello;
me.sayHello(); //typeError

//프로토타입은 임의의 다른 객체로 변경할 수 있다.

const Person = (function(){
    function person(name){
        this.name = name;
    }

    //1.생성자 함수의 prototype프로퍼티를 통해 프로토 타입을 교체
    person.prototype = {
        sayHello(){
            console.log(`hi my name is ${this.name}`)
        }
    }

    return person;
}()); 

const me = new person('lee');

//프로토타입을 교체하면 constructor프로퍼티와 생성자 함수 간이 연결이 파괴된다.
console.log(me.constructor === person); //false
//프로토타입 체인을 따라 Object.prototype의 constructor프로퍼티가 검색된다.
console.log(me.constructor === Object); //true

//프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다. 파괴된  constructor프로퍼티와 생성자 함수간의
//연결을 되살려보자.프로토타입으로 교체한 후 객체 리터럴에 constructor프로퍼티를 추가하여 프로토타입의 constructor 프로퍼티를 되살린다

const person = (function(){
    function person(name){
        this.name = name;
    }

    //생성자 함수의 prototype프로퍼티를 통해 프로토타입을 교체
    person.prototype = {
        //constructor프로퍼티와 생성자 함수 간의 연결을 설정
        constructor:person,
        sayHello(){
            console.log(`hi my name is ${this.name}`);
        }
    }

    return person;
}());
const me = new person('lee');

//constructor프로퍼티가 생성자 함수를 가리킨다
console.log(me.constructor === person); //true
console.log(me,constructor===Object); //false

function person(name){
    this.name = name;

}

const me = new Perosn('lee');

//프로토타입으로교체할 객체
const parent = {
    sayHello(){
        console.log(`hi my name is ${this.name}`);
    }
}

//1,me 객체의 프로토타입을 parent객체로교체한다
Object.setPrototypeOf(me,parent);
//위 코드는 아래의 코드와 동일하게 동작한다.
//me.__proto__= parent;

me.sayHello(); //hi my name is lee

//프로토타입을 교체하면 constructor프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === person); //false
//프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor ===Object); //true

//프로토타입으로 교체한 리터럴에 constructor프로퍼티를 추가하고 생성자 함수의 prototype프로퍼티를 재설정하여 파괴된 생성자 함수와 프로토타입 간의 연결을 되살려보자

function Person(name){
    this.name = name;

}
const me = new Person('lee');

//프로토타입으로 교체할 객체
const parent = {
    //constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor:person,
    sayHello(){
        console.log(`hi my name is ${this.name}`);
    }
}

//생성자 함수의 prototype프로퍼티와 프로토타입 간의 연결을 설정
Perosn.prototype = parent;

//me 객체의 프로토타입을 parent객체로 교체한다
Object.setPrototypeOf(me,parent);
//위코드는 아래의 코드와 동일하게 동작한다
//me.__proto__=parent;

me.sayHello(); //hi my name is lee

//constructor 프로퍼티가 생성자 함수를 가리킨다
console.log(me.constructor === Perosn); //true
console.log(me.constructor === Object); //true

//생성자 함수의 prototype프로퍼티가 교체된 프로토타입을 가리킨다
console.log(person.prototype ===Object.getPrototypeOf(me)); //true

// instanceof 연산자는 이항 연산자로 좌변에 객체를 가리키는 식별자, 우변에생성자 함수를 가리키는 식별자를 피연산잘 받는다.

//우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상의 존재하면 true로 평가되고, 그렇지 않은 경우에는 false로 평가된다

//생성자 함수
function person(name){
    this.name = name;
}
const me = new Person('lee');

//person.prototype이 me객체의 프로토타입 체인 상의 존재하므로 true로 평가된다.
console.log(me instanceof Object); //true


//생성자 함수 
function Person(name){
    this.name = name;

}

const me = new Person('lee');

//프로토타입으로 교체할 객체
const parent = {}

// 프로토타입의 교채
Object.setPrototypeOf(me.parent);

//perent생성자 함수와 parent객체는 연결되어 있지 않다.
console.log(person.prototype ===parent); //false
console.log(person.constructor ===parent); //false

//person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 떄문에 false로평가된다.
console.log(me instanceof person); //false

//Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true로 평가된다.
console.log(me instanceof Object); //true

//생성자 함수
function Person(name){
    this.name = name
}

const me = new Person('lee');

//프로토타입으로 교체할 객체
const parent = {};

//프로토타입의 교채
Object.setPrototypeOf(me.parent);

//person생성자 함수와 parent객체는 연결되어 있지 않다.
console.log(Person.prototype ===parent); //false
console.log(parent.constructor === person); //false

//parent객체를 person생성자 함수의 prototype 프로퍼티에 바인딩한다.
person.prototype = parent;

//person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof person); //true
//Object.prototype이 me 객체의 프로토타입 체인상의 존재하므로 true로 평가된다.
console.log(me instanceof Object); //true

//생성자 함수의 prototype에 바인딩된 객체가 프로토 타입 객체가 프로토타입 체인상에 존재하는지 확인한다.

function isInstanceof(instance,constructor){
    //프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    //재귀 탈출 조건
    //prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다
    if(prototype === null) return false;
    //프로토타입이 생성자 함수의 prototype프로퍼티에 바인딩된 객체라면 true를 반환한다.
    //그렇지 않다면 재귀 호출로 프로토타입 체인싱의 상위 프로토 타입으로 이동하여 확인한다.
    return prototype === constructor.prototype || isInstanceof(prototype,constructor);
}

console.log(isInstanceof(me,person)); //true
console.log(isInstanceof(me,Object)); //true
console.log(isInstanceof(me,Array)); //false 

const Person = (function(){
    function Person(name){
        this.name=name;
    }
    //생성자 함수와 prototype프로퍼티를 통해 프로토 타입을교체
    Person.prototype = {
        sayHello(){
            console.log(`hi my name is${this.name}`);
        }
    }

    return Person ;

}());

const me = new Person('lee');

//constructor 프로퍼티와 생서자 함수 간의 연결이 파괴되어도 instancerof는 아무런 영향을 받지 않는다.
console.log(me instanceof Proson); //true
//Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다
console.log;(me instanceof Object); //true

/**지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체를 생성하여 반환한다.
*@param {Object} prototype - 생성할 객체의 프로토타입으로 지정할 객체
*@param {Object} {propertiesObject} -생성할 객체의 프로퍼티를 갖는 객체
*@returns {Object} 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체
*/
// Object.create(prototype[,propertiesObject])

//프로토 타입이 null인 객체를 생성한다 . 생성된 객체는 프로토타입 체인의 중점에 위치한다.
//obj - null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); //true
//Object.prototype을 상속받지 못한다,
console.log(obj.toString()); //Error

//obj -> Object.prototype ->null
//obj = {}; 와 동일하다
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

//obj -> Object .prototype ->null
//obj = {x:1}; 와 동일하다
obj = Object.create(Object.prototype,{
    x:{value:1,writable:true, enumerable:true,configurable:true}
});

//위코드는 아래와 동일하다.
//obj = Object.create(Object.prototype);
//obj.x=1;

console.log(obj.x); //1
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

const myProto = {x:1};
//임의의 개체를 직접 상속받는다.
//obj ->myProto ->  Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); //10
console.log(Object.getPrototypeOf(obj) === myProto); //true

//생성자 함수 
function Person(name){
    this.name = name;
}

//obj ->person.prototype ->Objcet.prototype ->null
//obj = new Person('lee')와 동일하다
obj - Object.create(Person.prototype);
obj.name='lee';
console.log(obj.name); //lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); //true

//Object.create메서드는 첫번쨰 매개변수에 전달한 객체의 프로토타입 체인에 속하는 개체를 생성한다.즉 객체를 생성하면서 직접적으로 상속을 구현하는 것이다
//. new연산자가 없이도 객체를 생성할 수 있다
//.프로토타입을 지정하면서 객체를 생성할 수 있다.
//.객체리터럴에 의해 생성된 객체도 상속받을 수 있다.

//ex  Object.prototype의 빌트인 메서드인 Object.prototype.hasownproperty,Object.prototype.isprototypeOf, Object.prototype.propertyIsEnumerable등은
//모든 객체의 프로토타입 체인의 종점,즉 Object.prototype의 메서드이므로 모든 객체가 상속받아 호출할 수 있다.

const obj = {a:1};

obj.hasOwnProperty('a'); //true
obj.propertyIsEnumerable('a') //true

//프로토타입이null인 객체, 즉 프로토타입 체인의 종점에 위치하는 개체를 생성한다.
const obj = Object.create(null);
obj.a =1;

console.log(Object.getPrototypeOf(obj) === null); //true

//obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다
console.log(obj.hasOwnProperty('a'));
//typeError

//프로토타입이 null인 객체를 생성한다
const obj = Object.create(null);
obj.a = 1;

//console.log(obj.hasOwnproperty('a));
//typeError:obj.hasOwnproperty is not a function

//Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj,'a')); //true

const myProto = {x:10};

//객체리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다
const obj = {
    y:20,
    //객체를 직접 상속받는다.
    //obj -> myproto -> Object.prototype -> null
    __proto__:myProto

}
/* 위 코드는 아래와 동일하다.
const obj = Object.create(myProto,{
    y:{value :20 , wirtable :true , enmerable:true,configurable :true}
});
*/

console.log(obj.x , obj.y); //10 20
console.log(Object.getPrototypeOf(obj) ===myProto); //true

//생성자 함수
function Person(name){
    this.name = name;
}

//프로토 타입 메서드 
person.prototype.sayHello = function(){
    console.log(`hi My name is ${this.name}`);

}

//정적프로퍼티
Person.staticProp='static prop';

//정적 메서드
person.staticMethod = function (){
    console.log(`staticMethod`);
}

const me = new Person('lee');

//생성자 함수에 추가한 정적 프로퍼티 /메서드는 생성자 함수로 참조/호출한다
person.staticMethod(); //staticMethod

//정적 프로퍼티 /메서드는 생성자 함수가 생성한 인스턴스로 참조/호출 할 수 없다
//인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 한다.
me.staticMethod(); //typeError

//생성자 함수가 생성한 인스턴스는 자신의 프로토타입 체인에 속한 객체의 프로퍼티/메서드에 접근할 수 있다. 하지만 정적 프로퍼티/메서드는 인스턴스의 프로토타입 체인에 속한 객체의 프로퍼티
///매서드가 아니므로 인스턴스로 접근 할 수 없다.

//Object.create정적 메서드다.
const obj= Object.create({name:'lee'});

//Object.prototype.hasOwnproperty는 프로토타입 메서드다
obj.hasOwnProperty('name'); //false

function Foo(){}

//프로토타입 메서드
//this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다.
Foo.prototype.x =function(){
    console.log('x');
}

const foo = new Foo();
//프로토 타입 메서드를 호출하려면 인스턴스를 생성해야한다.
foo.x(); //x

//정적메서드
Foo.x=function (){
    console.log('x');
}

//정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.   MdN확인

//in 연산자는 객체 내에 특정 프로퍼티가 있는지 여부를 확인한다. in연산자의 사용법은 다음과 같다

/**
 * key :프로퍼티 키를 나타내는 문자열
 * object:객체로 평가되는 표현식
 */
key in Object

const person = {
    name='lee',
    address:"seoul"
}

//person객체에 name프로퍼티가 존재한다.
console.log('name' in person); //true
console.log('address' in person); //true
console.log('age' in person); //false

console.log('toString' in person); //true

const person = {name:'lee'}

console.log(Reflect.has(person,'name')); //true
console.log(Reflect.has(person),'toString'); //true

//Reflect.has 메서드는 in 연산자와 동일하게 동작한다.

Object.prototype.hasOwnProperty //메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.

console.log(person.hasOwnProperty('name')); //true
console.log(person.hasOwnProperty('age')); //true

//인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.
console.log(person.hasOwnProperty('toString')); //false

//for ...in  
//객체의 모든 프로퍼티를 순회하며 열거하려면 for...in사용
// for (변수선언문 in 객체){...}

const person = {
    name:'lee',
    address:'seoul'
}

//for..in문의 변수 prop에 person객체의 프로퍼티 키가 할당된다.
for (const key in person){

        console.log(key + ':' +person[key]);

    }

    //name :lee
    //address :seoul

    //for..in문의 경우 객체의 프로퍼티 개수만큼 순회하며 for...in문의 변수 선언문에서 선언한 변수에 프로퍼티 키를 할당한다.


const person = {
    name:'lee',
    address : 'seoul'
}

//in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString ' in person);   //true

//for ...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
//하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다
for (const key in person){
    console.log(key + ' :' +  person[key]);

}

name : lee 
address :Seoul 

//Object.getOwnpropertyDescriptor메서드는 프로퍼티 디스크립터 객체를 반환한다.
//프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체다.
console.log(Object.getOwnPropertyDescriptor(Object.getPrototype,'toString')); 
//{value:f , wirtable :true,enumerable :false ,configurable :true}

//for...in문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리부트[[Eunmerable]]의 값인 true인 프로퍼티를 순회하며 열거한다.

const person = {
    name : 'lee',
    address:'seoul',
    __proto__: {age:20}


}
for (const key in person){
    console.log(key+':' +person[key]);

}

//name :lee
//address:seoul
//age:20

const sym = Symbol();
const obj = {
    a:1,
    [sym]:10
}

for (const key in obj){
    console.log(key + ':' +obj[key]);
}
//a:1

const person = {
    name:'lee',
    address :'seoul',
    __proto__: {age:20}
}

for (const key in person) {
    //객체 자신의 프로퍼티인지 확인해야한다
    if(!person.hasOwnProperty(key)) continue;
    console.log(key + ":"+person[key]);
}

//name : lee
//address :seoul

const obj = {
    2:2,
    3:3,
    1:1,
    b:'b',
    a:'a'
}

for(const key in obj){
    if(!obj.hasOwnProperty(key)) continue;
    console.log(key + ':' +obj[key]);
}

/*
1:1
2:2
3:3
b:b
a:a
*/

const arr = [1,2,3];
arr.x =10; //배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr){
    //프로퍼티 x도 출력된다.
    console.log(arr[i]); //1 2 3 10
}

//arr.iength는 3이다
for(let i =0; i <arr.length; i++){
    console.log(arr[i]); //1 2 3
}

//forEach메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(v=>console.log(v)); //1 2 3

//for ...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for(const value of arr){
    console.log(value); // 1 2 3
}

//Objcet.key 메더는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
const person = {
    name : 'lee',
    address : 'seoul',
    __proto__:{age:20}
}
console.log(Object.keys(person)); //["name" , "address"]
console.log(Object.values(person)); //["lee" , "seoul"]

console.log(Object.entries(person)); //[["name" , "lee"]], ["address" , "seoul"]

Object.entries(person).forEach(([key,value])=>console.log(key,value));
/*
name lee
address seoul
*/