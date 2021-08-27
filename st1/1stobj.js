//다음과 같은 조건을 만족하는 객체를 일급객체라 한다.

//1.무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
//2.변수나 자룍조(객체,배열)에 저장할 수 있다.
//3.함수의 매개변수에 전달할 수 있다.
//함수의 반환값으로 사용할 수 있다.

//1.함수는 무명의 리터럴로 생성할 수 있다.
//2.함수는 변수에 저정할 수 있다.
//3.런타임 (할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num){
    return ++num;

}
const decrease = function (num){
    return --num;
}

//2.함수는 객체에 저장 할 수 있다.
const predicates= {increase,decrease};

//3.함수의 매개변수에 전달할 수 있다.
//4.함수의 반환값으로 사용할 수 있다
function makeCounter(predicate){
    let num = 0;
    return function (){
        num = predicate(num);
        return num;
    }
}

//3.함수는 매개변수에 함수를 전달할 수 있다.
const increser = makeCounter(predicates.increase);
console.log(increaser()); //1
console.log(increaser()); //2

//3.함수는 매개변수에 함수를 전달할 수 잇다
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2

//3.함수의 매개변수에 전달할 수 있다.
//4.함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate){
    let num = 0;

    return function (){
        num = predicate(num);
        return num;
    }
}

//3.힘수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); //1
cconsole.log(increaser()); //2

//3.함수는 매개변수에게 함수를 전달할 수 있다
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2

function square(number){
    return number + number;
}

console.dir(square); 
        function square(number){
            return number * number;
        }
        console.dir(square);

       // f square(number)
        //  arguments:null
        //caller:null
        //length:1
        //name:"square"
        //prototype :{cinstructor :f
        //__proto__:f()
        //[[functionLocation]]:wm341:1
        //[[score]]:scopes[1]

function square(number){
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
//length , name , arguments , caaller, prototype

//__proto__는 square함수의 프로퍼티가 아니다
console.log(Objcet.getOwnPropertyDescriptor(square,'__proto__')); //undefined

//__proto__는 Object.prototype객체ㅡ이 접근자 프로퍼티다 .
//square 함수는 Object.prototype객체로부터 __proto__접근자 프로퍼티를상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'))
//{ get:f, set:f , eumerable : false ,configurable:true}

function multiply(x,y){
    console.log(arguments);
    return x *y;
}
console.log(multiply()); //NaN
console.log(multiply(1)); //NaN
console.log(multiply(1,2)); //2
console.log(multiply(1,2,3)); //3

//agruments객체는 매개변수 개수를 확정할수 없는 가변인자 함수를 구현핲떄 유용하다.
function sum(){
    let res=0;
    //arguments객체는 length프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할수 있다
    for (let i =0; i<arguments.length;i++){
        res += arguments[i];
    }
    return res;
}

console.log(sum()); //0
console.log(sum(1,2)); //3
console.log(sum(1,2,3));//6

//arguments객체는 유사배열 객체이면서 동시에 이터러블이다
function sum(){
    //arguments객체를 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function(pre,cur){
        return pre +cur;
    },0);
}
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4,5)); //15

function sum(...args){
    return args.reduce((pre,cur)=>pre + cur,0);

}
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4,5)); //15


//length프로퍼티
//함수 객체의 length프로퍼티는 함수를 정의할떄 선언한 매개변수의 개수를 가리킨다
function foo(){}
console.log(foo.length); //0
function bar(x){
    return x;
}
console.log(bar.length); //1

function baz(x,y){
    return x +y;
}
console.log(baz .length); //2
//arguments객체의 length프로퍼티는 인자의 개수를 가리키고 함수객체의 length프로퍼는 매개변수의 개수를 가리킨다

//name프로퍼티
//기명함수 표현식
var nameFunc=function foo(){};
console.log(nameFunc.name); //foo

//익명함수표현식
var anonymousFunc =function(){};
//es6 name프로퍼티는 함수객체를 가리키는 변수이름을 값으로 갖는다
console.log(anonymousFunc.name); //anonymousHunc

//함수선언문 (Function declaration)
function bar(){}
console.log(bar.name); //bar


//__proto__접근자를통해 간접적으로 프로토타입 객체에 접근할 수 있다

const obj={a:1};

//객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다
console.log(obj.__prototype__ === Object.prototype); true

//객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 object.prototype의 프로퍼티를 상속받는다.
//hasOwnproperty 메서드는 Object.prototype의 메서드다
console.log(obj.hasOwnProperty('a'));  //true
console.log(obj.hasOwnProperty('__proto__')); //false

//hasOwnProperty 메서드는이름에서 알수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 타입의 프로퍼티 키인 경우 false를 반환한다

//함수 객체는 prototype프로퍼티를 소유한다
(function (){}).hasOwnProperty('prototype'); //true
//일반객체는 prototype프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); //false