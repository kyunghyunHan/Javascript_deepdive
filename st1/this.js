//객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메서드를 하나의 논리적적인 단우로 묶은 복합적인 자료구조
//동작을 나타내는 메서드는 자신이 속한 객체의 상태, 프로퍼티를 참조하고 변결할수 있어야한다
//이떄 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할수 있어야한다

const circle = {
    //프러파티 : 객체 고유의 상태 데이터
    radius:5,
    //메서드 : 상태 데이터를 참조하고 조작하고 동작
    getDiameter(){
        //이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메거드를 참조하려면
        //자신이 속한 객체인 cirle 을 참조할 수 잇어야 한다
        return 2 * circle.radius;

    }
}

console.log(circle.getDiameter()); //10

function Circle(radius){
    //이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알수 없다
  //  ????.radius = radius;
}
Circle.prototype.getDiameter = function(){
    //이시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식졀자를 알수 없다
    //return 2 * ????.radius;

}

//생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야한다
const cicle  = new Circle(5);

//this는 자신이 속한 객체 또는 자신이 생설할 인스턴스를 가리키는 자기참조변수다.this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로터나 메서드를 참조할수 있다
//this가 가리키는 값 즉 this.바인딩은 함수 호출방식에 의헤 동적으로 결정된다.

//this바인딩
//바인딩이란 식별자와 값을 연결하는 과정을 말한다.예를들어 변수 선언은 이름 (식별자)과 확보된 메모리 공간의 주소를 비인딩히는  것이다. this바인딩은 this와 this가 가리킬 객체를 바인딩하는 것이다

//객체리터럴
const circle = {
    radius :5,
    getDiameter(){
        //this는 메서드를 호출한 객체를 가리킨다
        return 2* this.radius;
    }
}

console.log(circle.getDiameter()); //10

//생성자 함수
function Circle(radius){
    ///this는 생성자 함수가 생성할 인스턴스를 가리킨다
    this.radius = radius;

}
Circle.prototype.getDiameter = function(){
    //this는 생성자 함수가 생성할 인스턴스를 가리킨다
    return 2 * this.radius;
}

//인스턴스 생성
const circle = new Circle(5);
console.log(cicle.getDiameter()); //10

//자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인될 값, 즉 this바인딩이 동적으로 결정된다

//this는 어디서든지 참조 가능하다
//전역에서 this는 전역객체 window를 가리킨다
console.log(this); //window

function square(number){
    //일반 함수 내부에서 this는 전역객체 window를 가리킨다
    console.logg(this); //window
    return number *number;
}
square(2);

const person = {
    name : 'lee',
    getName(){
        //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다
        console.log(this) ; //{name:lee,getName:f}
        return this.name;
    }
}
console.log(person.getName()); //lee

function person(naeme) {
    this.name = name;
    //생성자함수내부애서 this는 생성자 함수가 생성할 인스턴스를 가리킨다
    console.log(this); //person{name :lee}
}
const me = new person('lee');

//this바인딩은 함수호출방식, 즉 함수가 어떻게 호춯되었는제 따라 동적으로 결정된다.

//렉시컬 스코프와 this바인딩은 결정시기가 다르다
//함수의 상위스코프를 결정하는 방식인 렉시컬스코프는 함수정의가 평가되어 함수 객체가 생성되는 시점에 상위스코프를 결정한다 하지만 this바인딩은 함수 호출시점에 결저오딘다
//주의할 것은 동일한 함수도 다양한 방식으로 호출할 수 있다는 것이다 ,함수를 호출하는 방식은 다음과 같이 다양하다
//1.일반함수호출
//2.메서드호추
//3.생성자호출함ㅅ
//4.Function.prototype.apply/call/bind메서드에 의한 간접호출

//this바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function(){
    console.log(this);
}
//동일한 함수도 다양한 방식으로 호출할수 잇다

//1.일반함수호출
//foo함수를 일반적인 방식으로 호출
//foo 함수 내부의 this는 전역객체 window를 가리킨다
foo(); //window

//2,메서드 호출
//foo함수를 프로퍼티 값으로 할당하여 호출
//foo함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다

const obj = {foo};
obj.foo(); //obj

//3,생성자 함수 호출
//foo 함수를 new연산자와 함께 생성자 함수로 호출
//foo함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다
new foo(); //foo{}

//4.Function.prototype.apply/call/bind 메서드에 의한 간접호출
//foo함수 내부의 this인수에 의해 결정된다
const bar = {name:'bar'}

foo.call(bar); //bar
foo.apply(bar); //bar
foo.bind(bar); //bar

//읿반함수 호출
//기본적으로 this에는 전역객체가 바인딩된다
function foo(){
    console.log("foo's this:", this); //window
    function bar(){
        console.log("bar's this", this); //window
    }
    bar();
}
foo();

//위 예제처럼 전역함수는 물론이고 중첩함수를 일반함수로 호출하면 함수 내부의 this에는 전역객체가 바인딩된다.

function foo(){
    'use strict';

    console.log("foo's this ; ", this); //undefined
    function bar (){
        console.log("bar 's this" ,this); //undefined

    }
    bar();
}
foo();

//var 키워드로 선언한 전역변수 value는 전역객체의 프로퍼타아
var value =1;
//const 키워드로 선언한 전역변수 value는 전역객체의 프로퍼티가 아니다
//const value = 1;

const obj = {
    value:100,
    foo(){
        console.log("foo's this", this); //{value :100 ,foo:f}
        console.log("foo's this.value:",this.value); //100

        //메서드내에서 정의한 중첩함수
        function bar(){
            console.log("bar 's this :", this); //window
            console.log("bar;s this .value", this.value); //1

        }

        //메서드내에서 정의한 중첩함수도 일반함수로 호출되면 중첩함수 내부의 this에는 
        //전역객체가 바인딩된다
        bar();

    }
}
obj.foo();

var value = 1;
const obj = {
    value :100,
    foo(){
        console.log("foo's this ", this); //{value :100 ,foo:f}
        //콜백함수 내부의 this에는 전역 객체가 바인딩 된다
        setTimeout(function(){
            console.log("callvack's" , this); //window
            console.log("callback's this  .value" ,this.value); //1

        },100);
    }
}
obj.foo();

setTimeout
//setTimeout 함수는 두번쨰 인수로 전달한 시간 만큼 대기한 만큼 ,첫번째 인수로 전달한 콜백함수를 호출하는 타이머 함수다
//위예제에서는 100ms대기한다음 콜백함수를 호출한다.

//이처럼 일반함수로 호출된 모든 함수(중첩함수,콜백함수포함)내부의 this에는 전역객체가 바인디된다.
//위같은 경우 메서드 내부에서 setTimeout함수에 전달된 콜백함수의 this에는 전역객체가 바인됭된다
//따라서 this.value는 obj객체의 value프로퍼티가 아닌 전역객체의value프로퍼티,즉 window.value를 참조한다.

var value = 1;
const obj = {
    value:100,
    foo(){
        //this바인딩(obj)을 변수 that에 할당한다
        const that = this;

        //콜백함수 내부에서 this대신 that을 참조한다
        setTimeout(function(){
            console.log(that.value); 
        },100);
    }
}
obj.foo();

var value = 1;
const obj = {
    value :100,
    foo(){
    //콜백함수에 명시적으로 this를 바인딩한다
    setTimeout(function(){
        console.log(this.value);//100
    }.bind(this), 100);
    }
}
obj.foo();

var value = 1;
const obj = {
    value:100,
    foo(){
        //화살표함수내부의 this는 상위 스코프의 this를 가리킨다
        setTimeout(()=>console.log(this.value),100); //100

    }
}

obj.foo();



const person = {
    name:'lee',
    getName(){
        //메서드 내부의 this 는 메서드를 호출한 객체에 바인딩된다.
        return this.name;
    }
}

//메서드 getName을 호출한 객체는 person이다
console.log(person.getName()); //lee

//getName메서드는 personr객체의 메서드로 정의되었다. 메서드는 프로퍼티에 바인딩된 함수다.
//즉 person객체의 getName프로퍼티가 가리키는 함수객체는 person 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체다 getName프로퍼티가 함수 객체를 가리키고 있을 뿐이다

const anotherPeroson = {
    name :'kim'

}

//getName메서드를 anotherPerson객체의 메서드로 할당
anotherPeroson.getName=perosn.getName;

//getName메서드를 호추한 객체는 anotherPerson이
console.log(another.getName()); //kim

//getName메서드를 변수에 할당
const getName = peroson.getName;

//getName 메서드를 일반함수로 호출
console.log(getName()); //'
//일반함수로 호출된 getName함수 내부의 this.name은 브라우저 환경에서 window.name과 같다

//브라우저 환걍에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
//node.js 환경에서 this.name 은 undefined다

function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;

}

const me = new Person('lee');

//getName메서드를 호출한 객체는 me다
console.log(me.getName()); //lee

person.prototype.name = 'kim';

//getName메서드를 호출한 객체는 person.prototype다
console.log(person.prototype.getName()); //kim

//lee의 경우 getname메서드를 호출한 객체는 me다
//kim 의 경우 getName메서드를 호출한 객체는 person.prototype이다 

//생성자함수
function Circle(radius){
    //생성자함수 내부의 this는 생성자 하수가 생성할 인스턴스를 가리킨다
    this.name = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

//반지름이 5인 circle객체를 생성
const circle1 = new Circle(5);
//반지름이 10인 Circle객체를 생성
const circle2 = new Circle(10); 

console.log(cicle1.getDiameter()); //10
console.log(cicle2.getDiameter()); //20

//new 연산자와 함꼐 호출하지 않으면 생성자함수로 동작하지 않는다.즉 일반적인 함술호출이다
const circle3 = Circle(15); 

//일반함수로 호출된 circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다
console.log(circle3); //undefinded

//일반 함수로 호출된 Circle내부의 this는  전역객체를 가리킨다
console.log(radius); //15

/**
 * 주어진 this바인딩과 인수리스트 배열을 사용하여 함수를 호출한다
 * @param thisArg = this사용할 객체
 * @param argsArray = 함수에게 전달할 인수 리스트의 배열 또는 유사 배열객체
 * @returns 호출된 함수의 반환값
 */

//Function.prototype.apply(thisArg[,argsArray])

/**주어진 this바인딩과 , 로 구분된 인수 리스트를 사용하여 함수를 호출한다
 * @param thisArg - this로 사용할 객체
 * @param arg 1, arg2, ....- 함수에게 전달할 인수리스트
 * @returns 호출된함수의 반환값
 */

 //Function.prototype.call (thisArg[, arg1[, arg2[, ...]]])

function getThisBinding(){
    return this;
}

//this로 사용할 객체
const thisArg = {
    a:1
};

console.log(getThisBinding()); //window

//getThisBinding 함수를 호출하면서 인수로 전달할 객체를 getThisBinding 함수의 this에 바인딩한다.
//apply와 call메서의 본질적인 기능은 함수를 호출하는 것이다. apply 와 call메서드는 함수를 호출하면서 첫번쨰 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다

function getThisBinding(){
    console.log(arguments);
    return this;

}

//this 사용할 객체
const thisArg = {
    a:1
}

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding함수의 this에 바인딩한다
//apply 메서드는 호출할 함수의 인수로 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg,[1,2,3]));
//Arguments(3) [1,2,3,callee ; f , Symbol(Symbol.iterator) :f]
//{a :1}

//call메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다
console.log(getThisBinding.call(thisArg, 1,2,3));
//Arguments(3) [1,2,3,callee:f ,Symbol(Symbol.itearator) :f]
//{a:1}

function coverArgsToArray(){
    console.log(arguments);

    //arguments 객체를 배열로 반환
    //Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
    const arr = Array.prototype.slice.call(arguments);
    //const arr = Array.prototype.slice.apply(arguments);
    console.log(arr);

    return arr;
}

convertArgsToArray(1,2,3); // [1,2,3]

function getThisBinding(){
    return this;
}

//this로 사용할 객체
const thisArg = {a:1};

//bind 메서드는 함수에 this로 사용할 객체로 전달한다
//bind메서드는 함수를 호출하지는 않는다
console.log(getThisBinding.bind(thisArg)); //getThisBinding
//bind메서드는 함수를 호출하지는 않았으므로 명시적으로 호출해야한다
console.log(getThisBinding.bind(thisArg)()); //{a:1}

const person = {
    name :'lee',
    foo( callback){
        //1
        setTimeout(callback,100);
    }
}

person.foo(function(){
    console.log('hi! my name is ${this.name}'); // 2 hi my name is
    //일반 함수로 호출된 콜백함수 내부의 this.name은 브라우저 환경에서 window.name 과 같다
    //브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다
    //node.js환경에서 this.name은 undefined이다

})

const person = {
    name:'lee' , 
    foo(callback){
        //bind메서드로 callback함수 내부의 this바인딩을 전달
        setTimeout(callback.bind(this), 100);

    }
}

person.foo(function(){
    console.log(`hi my name is ${this.name}`); //hi my name is lee

})

//일반 호출 방식                                                this바인딩
//일반함술호출                                                    전역객체
//메서드호출                                                      메서드를 호출한 객체
//생성자 함수 호출                                                  생성자 함수가(미래에)생성할 인스턴스
//Function.prototype.apply/call/bind메서드에 의한 간접호출           Function.prototype.apply/call/bind메서드에 첫번쨰 인수로 전달할 객체