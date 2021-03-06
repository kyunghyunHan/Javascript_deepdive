//Ecmascript사양은 소스코드 (Ecmascript code)를 4가지 타입으로 구분한다. 4가지 타입의 소스코드는 실행컨텍스트를 생성한다.
//
//소스코드와 타입                설명
//전역코드            전역에 존재하는 소스코드를 말한다. 전역에 정의된 함수,클래스 등의 내부코드는 포함되지 않는다ㅣ
//함수코드            함수 내부에 존재하는 소스코드를 말한다. 함수 내부에 중첩된 함수 , 클래스 등의 내부코드는 포함되지 않는다.
//eval코드           빌트인 전역함수인 eval함수에 인수로 전달되어 실행되는 소크코드를 말한다.
//모듈코드            모듈 내부에 존재하는 소스코드를 말한다. 모듈 내부의 함수,클래스등의 내부코드는 포함되지 않는다.


//전역코드 
//전역코드는 전역변수를 관리하기 위해 최상우 스코프인 전역스코프를 생성해야한다. 그리거 var키워드로 선언된 전역변수와 함수선언문으로 정의된 전역함수를 전역객체의 프로퍼티와 메서드로 바인딩하고
//참조하기 위해 전역객체와 연결되어야 한다. 이를 위해 전역 코드가 평가괴면 전역실행 컨텍스트가 생성된다.

//함수코드
//함수코드는 지역스코프를 생성하고 지역변수 , 매개변수, arguments객체를 관리해야 한다. 그리고 생성한 지역스코프를 전역스코프에서 시작하는 스코프 체인의 일원으로 연결해야한다. 이를위해 함수코드가 퍙가되면
//함수 실행컨텍스트가 싱행된다.

//eval
//eval 코드는 strict mode에서 자신만의 독자적인 스코프를 생성한다. 이를 위해 eval코드가 평가되면 eval실행 컨텍스트가 생성된다.

//모듈코드 모듈코드는 모듈별로 독립적인 모듈 스코프를 생성한다 이를 위해 모듈코드가 평가되면 모듈 실행 컨텍스트가 생성된다.

//자바스크립트는 소스코드평가와 소스코드 실행 과정으로 나누어 처리
//소스코드평가에서는 실행컨텍스트를 생성하고 변수 , 함수 등의 선언문만 먼저 실행하여 생성된 변수나 함수 식별자를 키로 실행컨텍스트가 관리하는 스코프에 등록한다

//소스코드 평가 과정이 끝나면 비로소 선언문을 제외한 소스코드가 순차적으로 실행되기 시작한다. 즉, 런타임이 시작된다.이떄 소스코드 실행에 필욜한정보 , 즉 변수나 함수의 참조를 실행컨텍스트가 관리하는 스코프에서
//검색해서 취득한다. 그리고 변수 값의 변경등 소스코드의 실행결과는 다시 실행컨텍스트가 관리하는 스코프에 등록한다.

var x;
x= 1;

//자바스크립트는 위 예제를 2개의 과정으로 나누어 처리한다. 먼저 소스코드 평가 과정에서 변수선언문 var x;를 먼저 실행한다. 이떄 생성된 변수
//식별자x 는 실행컨텍스트가 관리하는 스코프에 등록되고 undefined로 초기화한다.

//소스코드 평과과정이 끝나고 나면 소스코드실행, 변수선언문var x;소스코드 과정에서 이미 실행이 완료되었다. 따라서 소스코드과정에서는 변수실행문 x=1;
//실행된다 .이떄 x 변수에 값을 할당하려면 먼저 x변수가 선언된 변수인지 확인해야 한다.

//이를 위해 실행 컨텍스트가 관리하는 스코프에 x 변수가 등록되어 있는지 확인한다. 다시 말해 x변수가선언된 변수인지 확인한다 만약 x변수가 실행컨텍스트가
//관리하는 스코프에 등록되어 있다면 x변수는 선언된 변수 즉 소스코드 평가 과정에서 선언문이 실행되어 등록된 변수다.x변수가 선언된 변수라면 값을 할당하고 
//할당결과를 실행컨텍스트에 등록하여 관리한다.

//전역변수 선언

const x=1;
const y=2;

//함수정의
function foo(a){
    //지역변수 선언
    const x= 10;
    const y=20;

    //매서드호출
    console.log(a + x +y);//130
}

//함수호출
foo(100);

//매서드 호출
console.log(x+y); //3

//전역코드와 변수 선언문과 함게 선언문이 먼저 실행되고, 그 결과 생성된 전역 변수와 전역함수가 실행컨텍스트가 관리하는 전역스코프에 등록
//전역코드가 평가 과정이 끝나면 런타임이 시작되어 전역코드가 순차적으로 실행되기 시작한다.이떄 전역변수 에 값이 할당되고 함수가 호출한다.
//함수가 호출되면 순차적으로 실행되던 전역코드의 실행을 일시중단하고 코드실행순서를 변경하여 함수 내부로 진입한다.
//함수에서 매개변수와 지역변수 선언문이 먼저 실행되고, 그 결과 매개변수와 지역변수가 실행컨텍스트가 관리하는 지역스코프에 등록된다.
//또한 함수 내부에서 지역변수처럼 사용할 수 있는 arguments객체가 생성되어 지역 스코프에 등록되고 this바인딩도 결정
//함수코드 평가가 종료되면 런타임이 시작, 힘수코드가 순차적으로 실행,이떄 매개변수와 지역변수에 값이 할당 console.log메서드 출력
//console을 스코프 체인을 통해 검색, console은 스코프 체인에 등록되어있지 않고, 전역객체 프로퍼티로 존재, 전역객체의 프로퍼티가 전역변수처럼 전역스코프를 통해 검색가능해야함
//log프로퍼티를 console객체의 프로토타입체일통해 검색, console.log메서드에 표현식이 평가 , a,x,y는 스코프체인을통해 검색,
//그후 종료, 함수 호출 이전으로 돌아가 전역코드를 실행,
//이처럼 코드가 실행되려면 스코프를 구분하여 식별자와 바인딩 된 값이 관리가 되어야함 그리고 중첩관계에 의해 스코프체인을 형성하여 식별자를 검색할수 있어야함
//이처럼 코드가 실행되려면 다음과 같이 스코프, 식별자,코드실행순서등의 관리가 필요

//1.선언에 의해 생성된 모든 식별자(변수,함수,클래스)를 스코프로 구분하여 등록하고 상태변화(식별자에 바인딩된 값의 변화)를 지속적으로 관리헤야함
//2.스코프는 중첩관계에 의해 스코프 체인을 형성해야한다.즉 스코프체인을 토애 상위 스코프로 이동하여 식별자를 검색할수 있어야함
//3.현재 실행중인 코드의 실행순서를 변경(예를들어 함수 호출에 의한 실행순서 변경)할수 있어야 하며 다시 되돌가갈 수도 있어야한다

//실행컨텍스트는 소스코드를 실행하는데 필요한 환경을 제공하고 코드의 실행결과를 실제로 관리하는 영역
//실행컨텍스트는 식별자(변수 ,함수,클래스)를 등록하고 관리하는 스코프와 코드실행순서 관리를 구현한 내부메커니즘으로 모든 코드는 실행컨텍스트를 통해 실행되고 관리된다
//식별자와 스코프는 렉시컬환경으로 관리,코드실행순서는 실행컨텍스트 스택으로 관리


const x = 1;
function foo(){
    const y=2;
    function bar(){
        const z= 3;
        console.log(x+y+z);
    }
    bar();
}
foo(); //6

//1.전역코드를 평가 전역실행컨텍스트를 생성하고 실행컨텍스트 스택에 푸시,이떄 전역변수x와 전역함수foo는 전역실행컨텍스트에 등록,이후 코드가 실행되기 시작하여 전역변수x에 값이할당,전역함수foo실행
//2,전역함수 foo호출,전역코드실행일시중단,코드의 제어권이 foo함수내부로 이동,foo함수 내부의 함수코드 평가,함수 실행컨텍스트 생성,실행컨텍스트 스택에 푸시,foo함수의 지역변수y와 중첩함수bar가 foo함수실행컨텍스트에 등록,이후 foo 함수코드실행,지역변수y에 값할당,bar호출
//3.foo함수코드의 실행 일시중단,제어권이 bar로이동,bar함수 실행컨텍스트를 생성하고,실행컨텍스트 스택에 푸시한다.bar 함수의 지역변수z가 bar함수실행컨텍스트에 등록, bar함수 코드실행,지역변수z값할당,console.log메서드호춯후 bar종료
//4 bar종료후 코드의 제어권 foo함수로 재이동,이뗴 bar실행컨텍스트를 실행컨텍스트 스택에서 제거 그후 foo함수 종료
//5.foo함수가 종료되면 코드의 제어권은 다시 전역코드로 이동,이떄 자바스크립트 엔진은 foo 함수 실행 컨텍스트를 실행컨텍스트 스택에서 팝하여 제거,그리고 더이상 실행할 전역코드가 남아있지 않으므로 전역실행 컨택스트도 실행컨텍스트 스택에서 팝되어 실행컨텍스트 스택에는 아무것도 남아 있지 않게 된다.
//이처럼 컨텍스트 스택은 코드의 실행순서를 관리한다
//실행컨텍스트 스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실해중인 코드의 실행컨텍스트다,따라서 실행컨텍스트 스택의 최상위에 존재하는 실행컨텍스트를 실행중인 실행컨텍스트라부른다


//렉시컬환경은 식별자와 식별자에 바인딩 된 값 ,그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행컨텍스트를 구성하는 컴포넌트이다.
//렉시컬 환경은 키와 값을 갖는 객체 형태의 스코프를 생성하여 식별자를 키로 등록하고 식별자에 바인딩된 값을 관리한다. 즉 렉시컬 환걍은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역활을 한다.

//렉시컬환경은 2가지로 나뉜다.
//환경레코드
//스코프에 포함된 식별자를 등록하고 등록된 식별자에 바인딩된 값을 관리하는 저장소다.환경레코드는 소스코드의 타입에 따라 관리하는 내용에 차이가 있다.

//외부 렉시컬 환경에 대한 참조
//외부 렉시컬 환경에 대한 참조는 상위 스코프를 가리킨다.이떄 상위 스코프란 외부 렉시컬 환경, 즉 해당 실행컨텍스트를 생성한 소스코드를 포함하는 상위 코드의 렉시컬 환경을 말한다. 외부 렉시컬환경에 대한 참조를 통해 단방향 링크드 리스트인 스코프체인을 구현한다.

var x= 1;
const y= 2;

function foo(a){
    var x= 3;
    const y= 4;

    function bar (b){
        const z  =5;
        console.log(a+b+x+y+z);

    }
    bar(10);
}
foo(20); //42

//전역객체는 전역코드가 평가되기 이전에 생성된다. 이때 전역 객체에는 빌트인 전역 프로퍼티와 빌트인 전역함수, 그리고 표준빌트인 객체가 추가되며 동작 환경(클라이언트 사이드 또는 서버 사이드)에 따라 클라이언트 WEB api,또는 특정환경을 위한 호스트 객체를 포함한다.

//object.prototype.toString
window.toString(); //"[object Window]"

window.__proto__.__proto__.__proto__.__proto__===Object.prototype; //true

//전역코드 평가

//1.전역실행 컨텍스트 실행
//2.전역 렉시컬 환경 생성
// 2.1 전역환경레코드생성
//    2.11.객체환경레코드생성
//    2.1.2 선언적 환경 레코드 생성
// 2.2 this바인딩
//2.3  외부 렉시컬 환경에 대한 참조 결정

// 1.전역 실행 컨텍스트 생성
//먼저 비어있는 전역실행컨텍스를 생성하여 실행컨텍스트 스택에 푸시,이떄 전역실행컨텍스트는 실해컨텍스트 스택의 최상위 ,즉 실행중인 실행컨텍스트가 된다.

//2.전역렉시컬 환경을 생성하고 전역 실행컨텍스트에 바인딩한다.

// 2.1전역 렉시컬 환경을 구성하는 컴포넌트인 전역환경레코드는 전역변수를 관리하는 전역스코프 ,전역객체의 빌트인 전역 프로퍼티와 빌트인 전역함수,표준빌트인 객체를 제공한다./
//  = var전역변수와 let,const키워드로 선언한 전역변수를 구분하기 위하여 전역 스코프역활을 하는 전역환경레코드는 객체환경레코드와 선언적 환경 레코드로 구성되어 있다.
//객체 환경 레코드는 기존의 전역객체가 관리하던 var키워드로 선언한  전역변수와 함수선언문으로 정의한 전역함수,빌트인 전역프로퍼티와 빌트인 전역함수,표준 빌트인 객체를 관리하고 , 선언적 환경레코드는 let,const키워드로
//선언한 전역 변수를 관리한다.즉 전역 환경레코드의 객체환경 레코드와 선언적 환경레코드는 서로 협력하여 전역스코프와 전역객체를 관리한디.

//2.1.1 객체 환경 레코드 생성
//전역환경레코드를 구성하는 컴포넌트인 객체환경레코드는 BindingObject라고 부르는 객체와 연결된다. BindingObject는 전역객체 생성에서 생성된 전역객체다
//전역코드 평가과정에서 var키워드로 선언한 전역변수와 함수 선언문으로 정의된 전역함수는 전역환경 레코드의 객체 환경 레코드에 연결된BindingObject를 통해 전역객체의 프로퍼티와 메서드가 된다.

var x= 1;
const y  = 2;
function foo(a){
    ///
}
//전역변수 x와 전역함수foo는 객체환경레코드를 통해 객체환경레코드의 BindingObject에 바인딩되어 있는 전역 객체의 프로퍼티와 메서드가 된다.
//x변수는 var로 선언한 변수디.따라서 선언단계와 초기화 단계가 동시에 진행된다.다시 말해 전역코드평가 시점에 객체 환경레코드에 바인딩 된 BindingObject를 통해 전역객체에 변수 식별자를 키로 등록한 다음, 암묵적으로 undefined를 바인딩한다.
//따라서 var키워드로 선언한 변수는 코드실행단계에서 변수 선언문 이전에도 참조할 수 있다.단 변수 선언문 이전에 변수의 값은 undefined이다 var 키워드로  선언한 변수에 할당한 함수 표현식도 동일하게 동작한다.이는 변수호이스팅이 발생하는 이유다.

//함수 선언문으로 정의한 함수가 평가되면 함수 이름과 동일한 이름의 식별자를 객체 환경레코드에 바인딩된BindingObject를 통해 전역객체에 키로 등록하고 생성된 함수 객체를 즉시 할당한다 이것이 변수호이스팅과 함수 호이스팅의 차이다.즉 함수 선언문으로 정의한함수는 호이스팅가능


//2.1.2 
//선언적 환경 레코드 생성
//var 로 선언한 전역변수,let,const로 선언한 전역변수는 선런적 환경 레코드에 등록 및 관리

//전역변수 let,const로 선언된 변수는 전역객체의 프로퍼티가 되지 않기 떄문에 window.y와 같이 전역객체의 프로퍼티 로서 참조 할 수없다.또한 const키워드로 선언한 변수는 
//선언단계 와 초기화단계가 분리되어 진행한다. 따라서 초기화 단계 즉 런타임에 실행흐름이 변수 선언문에 도달하기 전까지 일시적 사각지대에 빠지게 된다.

let foo = 1;

{
    //let ,const 키워드로 선언한 변수가 호이스팅 되지 않는다면 전역변수를 참조해야 한다.
    //하지만 let키워드로 선언한 변수도 여전히 호이스팅이 발생하기 떄문에
    //참조 에러가 발생한다.
    console.log(foo); //Error
    let foo  = 2; //지역변수
}

//2.2 this 바인딩
//전역환경 레코드의 [[globalthisvalue]]내부 슬롯에 this가 바인딩된다. 일반적으로 전역코드에서 this는 전역객체를 가리키므로 전역환경레코드의 [[globalthisvalue]]내부슬롯에는
//전역객체가 바인딩된다. 전역코드에서this를 참조하면 전역환경레코드의 [[globalthisvalue]]내부슬롯에 바인딩 되어 있는 객체가 반환한다.

//2.3
//외부 렉시컬 환경에 대한 참조는 현재 평가중인 소스코드를 포함하는 소스코드의 렉시컬 환경,즉 상위 스코프를 가리킨다
//현재 평가중인 소스코드는 전역코드다.전역코드를 포함하는 소스코드는 없으므로 전역 렉시컬 환경의 외부렉시컬 환경에 대한 참조에 null이 할당된다. 이는 전역 렉시컬 환경이 스코프 체인이 종점에 존재함을 의미한다

//전역코드 실행
//변수 할당문이 실행되어 전역변수 x,y,에 값이 할당된다.그리고 foo함수가 호출된다.변수 할당문 또는 호출문을 실행하려면 먼저 변수 또는 함수이름이 선언된 식별자인지 확인.
//식별자 결정을위해 검색할 떄는 실행중인 실행컨텍스트에서 식별자를 검색하기 시작한다.선언된 식별자는 실행컨텍스트의 렉시컬환경의 환경레코드에 등록되어 있다.
//렉시컬 환경에서 x,y,foo를 검색하기시작,식별자를 검색할수 없으면 외부 렉시컬 환경에 대한 참조가 가리키는 상위스코프로 이동하여 식별자를 검색
//이것이 스코프체인의 동작원리,하지만 전역렉시컬 환경은 스코프체인의 종점이므로 전역렉시컬 환경에서 검색할 수없는 식별자는 참조에러를 발생시킨다.식별자 결정에 실패했기 떄문
//이처럼 실행컨텍스트는 소스코드를 실행하기 위해 필요한 환경을 제공하고 코드의 실행결과를 실제로 관리하는 영역이다.

//foo함수코드 평가

var x= 1;
const y= 2;
function foo(a){
    var x=3;
    const y= 4;

    function bar(b){
        const z = 5;
        console.log(a+b+x+y+z);
    }

    bar(10);
}
foo(20); //호출직전

//1.함수 실행컨텍스트 생성
//2.함수 렉시컬 환경 생성
//  2.1 함수 환경 레코드 생성
//  2.2this 바인딩
//  2.3 외부 렉시컬 환경에 대한 참조 결정

//1.함수 실행 컨텍스트 생성
//foo함수 실행컨텍스트 실행,함수 렉시컬환경이 완성된 다음 실행컨텍스트 스택에 푸쉬, 이떄 foo함수 실행컨텍스트틑 실행컨텍스트 스택의 최상위,즉 실행중인 실해컨텍스스

//함수 렉시컬 환경 생성
//foo함수 렉시컬 환경 생성,foo함수 실행컨텍스트에 바인딩
//함수 레시컬 환경을 구성하는 컴포넌트 중 하나인 함수,함수 환경레코드는 매개변수,arguments객체 ,함수 내부에서 선언한 지역변수와 중첩함수를 등록하고 관리한다.

//this 바인딩

//함수 환경 레코드의 [[thusvalue]] 내부 슬롯에 this 가 바인딩된다. [[thisvalue]] 내부 슬롯에 바인딩 될 객체는 함수 호출방식에 따라 결정된다.
//foo 함수는 호출되었으므로 this는 전역객체를 가리킨다. 따라서 함수 환경레코드의 [[thisvalue]]내부 슬롯에는 전역객체가 바인딩된다.foo함수 내부에서 this를 참조하면 함수 환경
//레코드의 [[thisvalue]] 내부 슬롯에 바인딩되어 있는 객체가 바인딩된다.

//외부 렉시컬 환경에 대한 참조 결정
//외부 렉시컬 환경에 대한 참조애 foo 함수 정의가 평가된 시점에 실행중인 실행컨텍스트의 렉시컬 환경의 참조가 할당된다.

//foo 함수는 전역코드에 정의된 전역함수다.따라서 foo함수 정의는 전역코드 평가 시점에 평가된다.이 시점에 실행중인 컨텍스트는 전역실행컨텍스트다.따라서 외부 렉시컬  환경에대한 참조는 전역렉시컬환경의 참조가 할당

//자바스크립트는 함수를 어디서 호출했는지가 아니라 어디에 정의햇는지에 따라 상위스코프를 결정한다.
//함수정의를 평가하여 함수 객체를 생성할떄 현재 실행중인 실행컨텍스트에 렉시컬 환경,함수의 상위스코프를 함수 객체의 내부슬롯[[Environment]]에 저장한다.함수 렉시컬 환경의 외부 렉시컬 환경에 대한 참조에 할당되는 것은 바로 함수의 상위 스코프를 가리키는 함수 객체의 내부슬롯
//[[ Environment]]이 저장된 렉시컬 환경의 참조다.즉 함수 객체의 내부슬롯[[ Environment]]가 바로 렉시컬 스코프를 구현하는 메커니즘이다.

//foo 함수코드 실행
//런타임 시작,foo함수의 소스코드가 순차적으로 실행되기시작 ,매개변수에 인수가 할당되고,변수 할당문이 실행되어 지역변수 x,y에 값이 할당된다. 그리고bar함수가 호출
//이떄 식별자 결정을 위해 실행중인 실행컨텍스트의 렉시컬 환경에서식별자를 검색하기 시작한다.현재 실행중인 컨텍스트는 foo함수 실행 컨텍스트 이므로 foo 함수 렉시컬 환경에서 식별자 x,y를 검색하기 시작
//실행중인 컨텍스트의 렉시컬 환경에서 식별자를 검색할 수 없으면 외부 렉시컬 환경에 대한 참조가 가리키는 렉시컬 환경으로 이동하여 식별자를 검색,그후 식별자에 값을 바인딩

//bar함수 코드 평가

var x= 1;
const y=2;
 function foo(a){
    var x = 3;
    const y = 4;


    function bar (b){
     
        const z = 5;
        console.log(a+b+x+y+z);
    }
    bar(10); //호춯직전

 }

 //bar 함수코드 실행
 //런타임 시작,bar 함수코드의 소스코드가 순차적으로 실행,매개변수의 인수가 할당되어 , 변수할당문 실행,지역변수 z에 값할당
 
 //console식별자 검색
 //먼저 consol식별자를 스코프체인에서 검색한다. 스코프 체인은 현재 실행중인 실행컨텍스트에 렉시컬 환경에서 시작하여 외부 렉시컬 환경에 대한 참조로 이어지는 렉시컬 환경의 연속이다.
 //따라서 식별자를 검색할 떄는 언제나 현재 실행중인 실행컨텍스트의 렉시컬 환경에서 검색하기 시작

 //실행중인 실행컨텍스트는 bar 함수 실해 컨텍스트다.따라서 bar 함수 실행컨텍스트의 bar 함수 렉시컬 환경에서 console식별자를 검색하기 시작한다.이곳에는 console.식별자가 없으므로
 //스포프 체인상의 상위 스코프,외부 렉시컬 환경에 대한 참조가 가리키는 foo함수 렉시컬 환경으로 이동하여 console식별자를 검색

//이곳에도 console식별자가 없으므로 스코프 체인상의 상위스코프 즉 외부 랙시컬 환경에 대한 참조가 가리키는 전역렉시컬 환경으로 이동하여 console식별자를 검색

//log 메서드 검색
//console.식별자에 바인딩 된 객체 즉 console객체에서 log메서드 검색 이떄 console객체의 프로토타입 체인을 통해 메서드를 검색,log메서드는 상속된 프로퍼티가 아니라 console객체가
//직접 소유하는 프로퍼티다.

//a+b+x+y의 평가
//console.log메서드에 전달할 인수, 즉 표현석a+b+x+y를 평가하기 위해 a,b,x,y식별자를 검색한다.식별자는 스코프 체인,즉 현재 실행중인 실행컨텍스트의 렉시컬 환경에서 시작하여 외부 렉시컬 환경에 대한
//참조로 이어지는 렉시컬 환경의 연속에서 검색

//a식별자는 foo 함수 렉시컬 환경에서b식별자는 bar함수 렉시컬 환경에서 x와 y는foo함수 렉시컬환경에서 z식별자는 bar함수 렉시컬환경에서 검색된다

//전역코드 실행 종료
//foo함수가 종료되면 더는 실행할 전역코드가 없으므로 전역코드의 실행이 종료되고 전역실행 컨텍스트도 실행 컨텍스트 스택에서 팝되어 실행컨텍스트 스택에는 아무것도 남아 있지 않게 된다..

let x = 1;

if (true){
    let x =10;
    console.log(x); //10


}
console.log(x); //1

//if 문의 코드블록내에서 let키워드로 변수가 선언되었다.따라서 if문의 코드블록이 실행되면 if문의 코드블록을 위한 블록레벨 스코프를 생성해야한다. 이를 위해 선언적 환경 레코드를
//갖는 렉시컬 환경을 새롭게 생성하여 기존의 전역 렉시컬 환경을 교체한다. 이떄 새롭게 생성된 if문의 코드블록을 위한 렉시컬 환경의 외부 렉시컬 환경에 대한 참조는 if문이 실행되기 이전의 전역렉시컬 환경을 가리킨다,
//블록레벨 스코프를 생성하는 모든 블록문에 해당
//for 문의 변수 선언문에 let키워드를 사용한 for문은 코드 블록이 반복해서실행될 떄마다 코드 블록이 위한 새로운 렉시컬 환경을 생성한다.
//만약 for문의 코드블록내에서 정의된 함수가 있다면 이 함수의 성위스코프는 for문의 코드블록이 생성한 렉시컬 환경이다.
//이뗴 함수의 상위 스코프는 for 문의 코드블록이 반복해서 실행될 떄마다 식별자의 값을 유지해야한다.이를 위해 for문의 코드블록이 반복해서 실행될 떄마다 독립적이 렉시컬 환경을 생성하여 식별자의 값을 유지한다.