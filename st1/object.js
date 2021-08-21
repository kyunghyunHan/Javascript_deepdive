//자바스크립는 객체기반 언어
//객체타입은 다양한 타입의 값을 하의 단위로 구성된 복합적인 자료구조
//원시타입의 값,즉 원시값은 변경 불가능한 값이이지만 객체타입의 값, 즉 객체는 변경 가능한 값이다.

//var person ={
  //  name:'lee', //프로퍼티 ,프로퍼티값
    //age:20

//}
//프로퍼티 :객체의 상태를 나타내는 값
//메서드:프로퍼트를 참조하고 조작할수 있는 동작

let person  = {
  name :'lee',
  sayHello:function(){
    console.log(`hello my name is ${this.name}`);
  }
}

console.log(type person); //object
console.log(person); //{name;'lee',sayhello:f}

var  empty = {}; // 빈갹채
console.log(typeof empty); //Object

//객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
var person = {
  //프로퍼티 키는 name,프로퍼티 값은'lee'
  name : 'lee',
  age:20

}
//프로퍼티 키와 프로퍼티 값으로 사용할 수 있는 값은 다음과 같다
 //프로퍼티 키:빈 문자열을 포함하는 모든 문자열 또는 심벌 값
  //프로퍼타 값  : 자바스크립트에서 사용 할 수 있는 모든 값
  //식별자 네이밍 규칙을 따르지 않은 이름에는 반드시 따옴표를 사용

  var person = {
    firstName: 'Ung -mo' ,  //식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'lee'  // 식별자 네이밍 규칙을 준수하지 않은 프로퍼티 키
  }

  var person = {
    firstName:'Ung-mo',
    last-name:'lee'; //Error
  }

  var obj = {};
  var key = 'hello';

  //es5:프로퍼티 키 동적 생성
  obj[key]= 'world'
  //es6:계산된 프로퍼티 이름
  //var obj = {[key]:'world'};
  console.log(obj); //{hello:"world"}

  var foo = {
    '':'' // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
  }
  console.log(foo); //{"",""}


  var foo = {
    0:1,
    1:2,
    2:3
  }
  console.log(foo); //{0:1,1:2.2:3}

  var foo ={
    var :'',
    function:''
    
  }

  console.log(foo); //var:'',function:''

  var=foo ={
    name:'lee',
    name:'kim'
  }
  console.log(foo); //{name:"kim"}

  //메서드는 객체에 묶여있는 함수

var citcle ={
  radius:5, //프로퍼티
  
  //원의 지름
  getDiameter:function(){
    return2*this.radius; //this는 circle

  }
}
console.log(citcle.getDiameter());

//프로파티 접근법
//  .마침표 프로퍼티 접근 연산자르 사용하는 마침표 표기법
//. 대괄호 프로퍼티 접근연산자를[..]사용하는 대괄효 표기법

var parson = {
  name= 'lee'
}

//마침표 표기법에 의한 프로퍼타 접근
console.log(person.name); //lee
console.log(person['name']); //lee
//대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열 이어야 한다

var person ={
  name:'lee'
}
console.log(person[name]); //Error

//객체에 존재하는 않는 프로퍼티에 접근하면 undefined를 반환한다.

var person = {
  name:'lee'

}
console.log(person.age); //undefined
var person= {
  'last-name': 'lee',
  1:10
}
person.'last-name'; //Error
person.last-name; //브라우저 환경:NaN
                  //node js환경:referenceError:name is not defined
person[last-name]; //referenceError:lst is not defined
person['last-name']; //lee

//프로퍼티 키가 숫자로 워진 문자열 인 경우 따옴표를 생략할 수 있다.
person.1 ; //Error
person.'1'; //Error
person.[1]; //10 :person[1]
perso['1']; //10

//이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 생긴다
var person = {
  name:'lee'
}
// person객체에 name 프로퍼티가 존재하므로 name프로퍼티 값이 갱신된다.

person.name = 'kim'
console.log(person); //{name:kim}

//존재하지 않은 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당
var person ={
  name:'lee'
}
//person객체에는 age프로퍼티가 존재하지 안음
//따라서 person 객체에 age프로퍼티가 동적으로 생성되고 값이 할당
person.age=20;
console.log(person); //{name:"lee",age :20}

var person = {
  name:'lee'
}
person.age=20;
delete person.age;
//person객체에 address프로퍼티가 없으므로 삭제불가
delete person.address;
console.log(person);

//es5
var x=1,y=2;
var  obj={
  x:x,
  y:y
}
console.log(obj) //{x:1,y:2}

//es6
let x=1,y=2;
//프로퍼티 축약표현
const obj{
x,y
}
console.log(obj);
//{x:1 ,y:2}

//es5
var prefix = 'prop';
var i =0;
var obj = {
};

//계산된 프로퍼티 이름으로 프로퍼티 키 동적생성
obj[prefix + '- ' + ++i]=i;
obj[prefix + '-' + ++i] = i;
obj [prefix + '- '+ ++i] =i;

console.log(obj); // {prop-1:1, prop-2:2, prop-3:3 }

//Es6
const prefix = 'prop';
let i = 0;

//객체 리터럴 내부애서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적생성
const obj = {
  [`${prefix}- ${++i}`]:i,
  [`${prefix}- ${++i}`]:i,
  [`${prefix}- ${++i}`]:i
}
console.log(obj); //{prop-1:1, prop-2:2,prop-3:3}

//es5
var obj ={
  name:'lee',
  sayHi:function(){
    console.log(hi!+ this.name);
  }
}
obj.sayHi(); //Hi Lee;

//es6
const obj ={
name: 'lee',
//메서드 축약표현
sayHi(){
  console.log('hi!'+ this.name);
}
}
obj.sayHi(); //hi!lee
