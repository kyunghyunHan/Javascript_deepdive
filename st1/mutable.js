//숫자 ,문자열, 불리언 null, undefined, 심벌 , 객체타임 은 크게 원시타입 과 객체타입으로 구분할 수 있다.
//원시타입의 값. 즉 원시값은 변경 불가능 한 값이다. 이에 비해 객체타입의 값,즉 객체는 변경 가능한 값이다
//원시값을 변수에 할당하면 변수에는 실제 값이 저장된다. 이베비해 객체를 변수에 할당하면 변수에는 참조값이 저장된다.
//원시값을 갖는 변수를 다른변수에 할당하면 원본의 원시값이 복사되어 전달된다.값에의한 전달
//이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조값이 복사되어 전달된다.참조에의한전달
//원시값은 변경불가능한 값
//변수는 재할당을 통해 변수값을 변경(교체)
//상수는 재할당이 금지된 변수

const o ={};
o.a=1;
console.log(o); //{a:1}
//불변성을 갖는 원시값을 할당한 변수는 재할당 이외에 변수값을 변경할수있는 방법이 없다.

//문자열은 0개이상의 문자로 이뤄진 집합이다.
var str1='';  //0개의 문자로 이뤄진 문자열(빈문자열)
var str2='helli'; //5개의 문자로 이뤄진 문자열
var star ='hello';
str='world';

//유사배열객체:마치 배열처럼 인덱스로 프로퍼티값에 접근할수잇고 length프로퍼터를 갖는객체
let str ='string';
console.log(str[0]); //s
//원시값인 문자열이 객체처럼 동작한다.
console.log(str.length); //6
console.log(str.toUpperCase()); //STRING

var str = 'string';
//문자열은 유사배열이므로 배열과 유사하게 인덱스를 사용해 문자에 접근가능
//하지만 문자열은 원시값이므로 변경x
str[0] = 'S';
console.log(str); //string

var score=80;
var copy = score;
console.log(score); //80
console.log(copy); //80

score=100;

console.log(score); //100
console.log(copy); //?? //100

var score =80;
//copy변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;
console.log(score,copy); //80 80
console.log(score ===copy); //true
//score 변수화 copy변수의 값 80은 다른 메모리 공간에 저장된 별개의 값

var score =80;
//copy변수에는 score변수의 값 80이 복사되어 할당된다.
var copy = score;
 console.log(score.copy); //80 80
console.log(score ===copy); //true
//score변수와 copy변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
//따라서 score변수의 값을 변경해도 copy변수의 값에는 어떠한 영향도 주지 않는다.
score =100;
console.log(score,copy); //100 80
consol.log(score ===copy); //false
//변수에는 값이 전달되는 것이아니라 메모리주소가 전달되기 떄문에 이는 변수와 같은 식별자는 값이아니라 메모리 주소를 기억

var x =10;
//위의 할당 연산자는 숫자 리터럴 10에의해 생성된 숫자 값 10이 저장된 메모리 공간의 주소를 전달한다. 이로싸 식별자x는 메모리 공간에 저장된 숫자 값 10을 식별할 수 있다.
//원시값은 서로 다른 메모리공간에 저장된 별개의 값이 되어 어느 한쪽에서 재할당을 통해 값을 변경하더라도 서로 간섭할수 없다.

//객체타입의 값 , 즉 객체는 변경 가능한 값
var person={
    name: 'Lee'
}

//할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
let person = {
    name:'lee'
}

//persom변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person); //{name:lee}
//원시값은 변경불가능한 값이므로 원시값을 갖는 변수의 값을 변경하려면 재할당 외에는 방법이 없다.하지만 객체는 변경 가능한 값이다. 따라서 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할수 있다.
//즉 재할당 없이 프로퍼티를 동적으로 추가할수도 있고, 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수도 있다.

var person = {
    name:'lee'
}
//프로퍼티 값 갱신
person.name = 'kim';
//프로퍼티 동적 생성
person.address = 'seoul';
console.log(person); //{name:"kim", address:"seoul"}
//객체는 여러개의 식별자가 하나의 객체를 공유가능

//얇은 복사 와 깊은 복사
const o = {x:{x:1}};

//얇은 복사
const c1 = {...o};
console.log(c1 === o); //false
console.log(c1.x === o.x); true

//lodash의 cloneDeep을 사용한 깊은복사
//npm install lodash로 lodash를 설치한 후node.js환경에서 실행
const_ = require('lodash');
//깊은 복사
const c2 =_.cloneDeep(o);
console.log(c2===o); //false
console.log(c2.x === o.x); //false
//ex)스프레드문법
//Bar(...'hello') Bar("h","e","l","l","o")와동일

const v =1;
//깊은복사
const c1 =v;
console.log(c1===v); //true

const o ={x:1};
//얄은 복사
const c2 = o;
console.log(c2 === o); //true

var person = {
    name:'lee'
}
//참조값을 복사
var copy = rerson;
//두개의 식별자가 하나의 객체를 공유

var person = {
    name='lee'
}
//참조값을 복사 ,copy와 person은 동일한 참조값을 얻는다.
var copy = person;

//copy와 person은 동일한 객체를 참조한다.
console.log(copy ===person); //true

//copy를 통해 객체를 변경한다.
copy.name = 'kim';
//person을통해 객체를 변경
person.address = 'seoul';

//copy와 person은 동일한 객체를 가리킨다.
//따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(peson); // {name:"kim" , adress:"seoul"}
console.log(copy); //{name: "kim", address:"seoul"}
//값에 의한 전달과 참조에 의한전달은 식별자가 기억하는 메모리 공간에 저장되어 있는 값을복사해서 전달한다는 면에서 동일하다.
//따라서 자바스크립트에는 참조에 의한 전달은 존재하지않고 값에 의한 전달만이 존재

var person1 = {
    name:'lee'

}
var person2 ={
    name :'lee'
}
console.log(person1 === person2); //false
console.log(person.name === person2.name); //true