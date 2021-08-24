//변수는 선언에 의해 생성되고 할당을 통해 값을 갖는다 전역변의 생명주기는 에플리케이션의 생명주기와 같다 하지만 
//함수내부에서 선언된 지역변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.

function foo(){
    var x= 'local';
    console.log(x);  //local
    return x;   //변수 x 소멸

}
foo();
comsole.log(x); //Error
//지역변수의 생명주기는 함수의 생명 주기와 일치
//일반적으러 함수가 종료하면 함수가 생성한 스코프도 소멸한다.하지만 누군가 스코프를 참조하고 있다면 
//스코프는 해제되지 않고 생존하게 된다.

var x = 'global';
function foo (){
    console.log(x); //1번
    var x = 'local';
}
foo();
console.log(x); //global
//호이스팅은 스코프를 단위로 동작한다.
//호이스팅은 변수선언이 스코프의 선두로 끌어올려진것처러 동작하는 자바스크립트 고유의 특징을 말한다.
//var 키워드로 선언한 전역변수의 생명주기는 전역객체의 생명주기와 동일한다.
//전역변수는 생명주기가 길다.따라서 메모리 리소스도 오랜기간 소비한다. 또한 전역변수의 상태를 변경할 수 있는 시간도 길고 기회도 많다.

var x=1;

//변수의 중복선언, 기존 변수에 값을 재할당한다.
var x =100;
console.log(x); //100

//전역변수는 스코프체인상에서 종점에 존재힌다.즉 전역변수의 검색속도가 가장느리다
//전역변수의 무분별한 사용은 위험하다. 전역변수를 반드시 사용해야할 이유를 찾지 못한다면 지역변수를 사용해야한다.
//변수의 스코프는 좁을수록 좋다
//모든 코드를 즉시실행함수로 감싸면 모든 변수는 즉시 실행함수의 지역변수가 된다.

(function (){
    var foo =10; 

}());
console.log(foo); //Error :foo is not defined

//전역에 네임스페이스 역홯을 담당할 객체를 생성하고, 전역변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
var MYAPP = {}; //전역 네임스페이스 객체
MYAPP.name = 'lee';
console.log(MYAPP.name); //lee

var MYAPP = {}; //전역스페이스 객체
MYAPP.person = {
    name:'lee',
    address:'seoul'
}
console.log(MYAPP.person.name); //lee

//모듈패턴
//캡슐화는 객체의상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조잘할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.

var Counter = (function(){
    //private 변수 - 외부에서 접근할 수 없고 내부에서만 사용이 가능하다 이것은 클래스 외부에는 제한된 접근 권한을 제동하며 원하지 않는 외부의 접근으로부터 보호하는 기능을 한다.

    var num = 0;
    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++ num;
        },
        decrease() {
            return -- num;
        }
    }
}());

//private변수는 외부로 노출되지 않ㄴ,ㄴ다
console.log(Counter.num); //undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.increase()); //1
console.log(Counter.increase()); //0


//Es6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
//따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역변수가 아니며 window객체의 프로퍼티도 아니다
//모던브라우저에서는 es6모듈을 사용할 수 있다.
//script태그에 type='modle' 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로써 동작한다. 모듈의 파일확장자는 mjs를 권장

//<script type="module" src = "lib.mjs"></script>
//<script type="module" src = "app.mjs"></script>

