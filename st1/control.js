// 제어문은 조건에 따라 코드 블록을 실행 (조건문)하거나 반복 실행(반복문)할 때 사용한다. 일반적으로 코드는 위에서 아래로 순차적으로 실행된다.
// 블럭문
{
    var foo = 10;
}

//제어문
var x = 1;
if (x <10){
    x++;
}

//함수 선언문
function sum(a,b){
    return a+b;
}

//조건문은 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다. 조건식운 불리언 값으로 평가될 수 있는 표현식이다

if...else

if(조건식){
    //조건식이 참이면 이 코드 블록이 실행된다.
} else{
    //조건식이 거짓이면 이 코드 블록이 실행된다.
}

if (조건식1){
    //조건식이 참이면 이 코드 블록이 실행된다.
} else if (조건식2){
    //조건식2가 참이면 이 코드 블록이 실행된다.
}else {
    //조겆식 1과 조건식 2가 모두 거짓이면 이 코드 블록이 실행된다.
}

var num = 2;
var kind ;
// if
if (num >0){
    kind ='양수'; //음수를 구별 할 수 없다.
}
console.log(kind); //양수

//if...else
if (num>0){
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); //양수

//if...else if
if(num >0) {
    kind = '양수';
} else if (num <0){
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); //양수 

var num =2;
var kind;

if(num >0)    kind = '양수';
else if (num <0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수

//x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고 홀수이면 '홀수'를 할당한다.
var x = 2;
var result ;

if (x%2) {//2%2는 0이다 이때 0 은 false로 암묵적 강제 변환된다.
    result = '홀수'; 
} else {
    result = '짝수';
}
console.log(result); //짝수

var x =2;

//0은 false로 취급된다.
var result = x%2 ? '홀수' : '짝수';
console.log(result); //짝수

var num =2;
//0은 false로 취급된다
var kind= num ? (num >0 ? '양수' : '음수') : '영';
console.log(kind); //양수

//num > 0 ? '양수' : '음수' 는 표현식이다, 즉 삼항 조건 연산자는 값으로 평가되는 표현식을 만든다. 
//따라서 삼항 조건 연산자 표현식은 값처럼 사용할 수 있기 때문에 변수에 할당할 수 있다.

//switch문
switch (표현삭){
    case 표현식1:
        실행될 문
     break;
    case 표현식2:
        실행될 문
    break
    default:
        실행될문

}

//switch문은 논리적 참 , 거짓 보다는 다양한 상황 에 따라 실행할 코드 블록을 결정할 떄 사용

//월을 영어로 변환한다.
var month = 11;
var monthName;

swith (month){
    case 1 : monthName = 'January';
    case 2 : monthName = 'Fabruary';
    case 3 : monthName = 'March';
    case 4 : monthName = 'April';
    case 5 : monthName = 'May';
    case 6 : monthName = 'June';
    case 7 : monthName = 'July';
    case 8 : monthName = 'August';
    case 9 : monthName = 'September';
    case 10 : monthName = 'October';
    case 11 : monthName = 'November';
    case 12 : monthName = 'December';
    default : monthName = 'Invalid month';
}
console.log(monthName); // Invalid month

//그런데 위 예제를 보면 November가 출력되지 않는다 이는 swich문을 탈출하지 않고 모든 문을 실행했기 때문
//아를 폴스루 라고한다.

var month = 11;
var monthName;

swith (month){
    case 1 : monthName = 'January';
        break;
    case 2 : monthName = 'Fabruary';
        break;
    case 3 : monthName = 'March';
        break;
    case 4 : monthName = 'April';
        break;
    case 5 : monthName = 'May';
        break;
    case 6 : monthName = 'June';
        break; 
    case 7 : monthName = 'July';
        break;
    case 8 : monthName = 'August';
        break;
    case 9 : monthName = 'September';
        break;
    case 10 : monthName = 'October';
        break;
    case 11 : monthName = 'November';
        break;
    case 12 : monthName = 'December';
        break;
    default : monthName = 'Invalid month';
}
console.log(monthName); // November

var year = 2000;  //2000년은 윤년으로 2월이 29일이다
var month = 2;
var days = 0;
switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
    case 4: case 6: case 9: case 11:
    days = 30;
    case 2:
    //윤년 계산 알고리즘
    //1.연도가 4로 나누어 떨어지는 해 (2000, 2004, 2008, 2012, 2016, 2020...) 는 윤년이다.
    //2.연도가 4로 나누어 떨어지도라도 연도가 100으로 떨어지는 해 (2000,2100,2200...)는 평년이다
    //3.연도가 400으로 나누어 떨어지는 해 (2000,2400,2800...)는 윤년이다.
    days = ((year % 4===0 && year % 100 !==0)||(year %400===0))? 29 : 28;
    break;
    default:
        console.log('Invalid month'); 
}
console.log(days); //29

//반복문은 조건식의 평과 결과가 참인 경우  코드 블록을 실행한다.
//for 문

for (변수 선언문 또는 할당문; 조건식; 증감식){
    조건식이 참인 경우 반복 실핼될 문;
}
//for 문은 매우 중요하다. 아직 for 문에 익숙하지 않다면 많은 연습을 통해 확실히 이해 하기를 권장

for (var i =0 ; i <2 ; i++){
    console.log(i);
}
0
1

for (var i =1 ; i >=0; i--){
    console.log(i);
}

//무한루프
for(;;){...}



for (var i =1; i <=6;i++){
    for (var j =1 ; j<=6; j++){
        if(i+j ===6)
        console.log(`[${i},${j}]`);
    }
}
[1.5]
[2.4]
[3,3]
[4,2]
[5,1]

while 문
//주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. 반복횟수가 불명활때 사용

var count =0 ;
//count 가 3보다 작을때까지 코드 블록을 계속 반복 실행한다.
while (count < 3){
    console.log(count); // 0,1,2
    count++;
}

//조건식의 결과가 언제나 참이면 무한루프

//무한루프

while(true){...}


var count =0 ;
//무한루프
while (true){
    console.log(count);
    count++;
    //count가 3이면 코드 블록을 탈출
    if (count ===3) break;
} 0 1 2

//do...while문
//코드 블록을 먼저 실행하고 조건식을 평가한다
var count  0;

//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다
do {
    console.log(count); // 0 1 2
    count ++
}while(count <3);

//break문
레이블문, 반복문, switch문의 코드블록 외에 사용하면 에러

if (true){
    break; // Error
}

//레이블문이란 식별자가 붙은 문
//foo 라는 식별자가 붙은 레이블 문
foo:console.log('foo');
//래이블 문은 프로그램의 실행순서를 제어하는데 사용. 

foo: {
    console.log(1);
    break foo;
    console.log(2);
}
console.log('Done!');

outer: for (var(i=0; i<3; i++){
    for(var j = 0;j <3; j++){
        //i +j ===3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if (i+j ===3) break outer;
        console.log('inner [${i},${j}]');
    }
}
console.log('DONE!');

//레이블문은 중첩된 for문 외부로 탈출할 떄 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.
//레이블문을 사용하면 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.

var string = 'hello world';
var search = 'l';
var index;

//문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i =0 ; i  < string.length; i++ ){
    //문자열의 개별문자가 l이면 
    if (string[i] === search){
        index = i ;
        break; //반복문을 탈출한다.
    }
}
console.log(index); //2 

//참고로 string.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string,indexOf(search)); //2

//contnue문

//반복문의 코드 블록을 실행을 시켜 현 지점에서 중단하고 반복문의 증감식으로 실행흐름을 이동시킨다

var string = 'hello world';
var search = 'l';
var count=0;
//문자열은 유사 배열이므로 for 문을 순회시킬 수 있다.
for (var i =0; i <string.length; i++){
    if(string[i] !== search) continue;
    count++;  //continue 문이 실행되면 이 문은 실행되지 않는다
}
console.log(count); //3
//참고로 string.prototype.match메서드를 사용해도 똑같은 동작을한다
const regexp = new RegExp(searcj.'g');
console.log(string.match(regexp).length); //3

for (var i = 0; i <string.length; i++){
    //'l' 이면 카운트를 증가 시킨다
    if (string[i] === search)count++;
}

//cntinue 문을 사용하지 않으면 if내에 코드를 작성해야 한다.
for (var i =0; i <string.length; i++){
    if (string[i]===search ) continue;
        count ++;
    //code
    //code
    //code
}