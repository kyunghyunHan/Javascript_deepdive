//****변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름*****


//변수의 여러개의 값을 저장하는 방법
var userId =1 ;
var useName = 'lee'; // 변수는 하나의 값을 저장하기 위한 수단이다

var user = {id:1, name:'lee'}; //객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값으로 사용가능

var user = [
    {id:1, name:'lee'},
    {idL2, name:'kim'}
];
var result = 10+20; // result = 변수 이름  , 30= 변수값
// 변수이름을 식별자라고도 한다 . 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.
//식별자는 값이 아니라 메로리 주소를 기억하고 있다. 식별자로 값을 구별해서 식별한다는 것은 식별자가 기억하고 있는 메모리 주소를 통해 메모리 공간에 저장된 값에 접근할수 있다는 의미이다.

var 식별자 = ["변수","함수","클래스"];

//변수를 사용하려면 반드시 var, let , const 키워드를 사용한다. (let, const 는 Es6부터 도입)
//var 은 호이스팅 되기 떄문에 사용권장낮음

var score;  // 변수 선언에 의해서 확보된 메모리공간은 빈 공간이 아닌 undefined이리는 값이 암묵적으로 할당됨.

//var 키워드를 사용한 변수 선언은 선언 단계와 동시에 초기화 단계가 동시에 진행된다.var score;는 선언단계를 통해 변수이름 score를 등록하고, 초기화 단계를 통해 score변수에 암묵적으로 undefined를 할당해 초기화 한다.
console.log(score2); //undefined
var score2; //변수 선언문

//변수선언문보다 변수를 참조하는 코드가 앞에 있다.자바스크립 코드는 인터프리터에 의해 한 줄씩 순차적으로 실행되므로 console.log(score2);가 먼저 실행되고 순차적으로 다음 줄에 있는 코드를 실행한다. console.log(score2);가 
//실행되는 시점에는 아직 score2변수의 선언이 실행되지 않앗으므로 참조 에러가 발생할것 처럼 보인다.하지만 참조 에러가 발생하지 않고 undefined가 출력된다
//그이유는 변수선언이 소스코드가 한줄 씩 순차적으로 실행되는 시점, 즉 런타임이 아니라  그 이전 단계에서 먼저 실행되가 떄문이다.
//또한 순차적으로 실행되는 런타임에 변수선언이 실행되면 변수선언 이전에 console.log(score2);가 실행되면 참조에러가 발생하여야하는데, undefined기 출력된다.
//이는 변수 선언이 소스코드가 실행되는 런타임 이전 단게에서 먼저 실행된다는 증거이다. 
//호이스팅 : 변수선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징
// var , let , const, function  function*, class키워드를 사용해서 선언하는 모든 식별자는 호이스팅!!

var score;
score = 80; //변수의 값을 할당할 때는 할당 연산자 = 을 사용

var score = 80; //변수 선언과 값을 동시에 할당

console.log(score3); //undefined
var score3; // 변수선언
score3 = 80; // 값의 할당
console.log(score3); //80

//첫번쨰 변수선언은 런타임 이전에 실행, 값의 할당은 런타임에 실행 , 새롭게 값 재할당 후 출력
console.log(score4); //undefined
var score4 = 80;  // 변수선언과 값의 할당
console.log(score4); // 80

console.log(score5); //  undefined
score5 = 80 ; //값의 할당
var score5;  //변수선언
console.log(score5);// 80 

var score = 80; // 변수선언과 값의 할당
score = 90; //값이 재할당됨

//만약 값을 재할당할 수 없어서 변수에 저장된 저장된 값을 변경 할 수없다면 변수가 아니라 상수라고 한다.
//const 키워드를 사용하면 재할당이 금지됨.

//식별자 네이밍 규칙
var percon, $elem, _name, first_name, varl1; //앏파벳외 일본어 한국어 사용가능 한자는 사용불가능

var firstname;
var firstName;
var FIRSTNAME; // 자바스크립트는 대소문자를 구별하므로 다음변수는 각각 별개의 변수다.

var x =3; //변수가 의미하는 바를 알 수 없다.
var score = 100;  //score는 변수의 점수를 의미한다.

//카멜케이스(camelCase)
var firstName;

//스네이크메이스 (snake_cass)
var first_name; 

//피스칼케이스  (PascalCase)
var FirstName;

//헝가리언케잇 (typeHunarianCase)
var strFirstName; //type + identfier
var $elem = document.getElementById('myId'); //dom노드
var observable$ = fromEvent(document, 'click') // RxJs옵저버블


