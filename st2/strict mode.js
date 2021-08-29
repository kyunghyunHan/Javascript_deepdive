function foo(){
    x=10;
}
foo();

console.log(x); //?

//foo함수 내에서 선언하지 않은 x변수에 10을 할당했다. 이때 x변수를 찾아야 x에 값을 할당할 수 있기 떄문에 자바스크립트 엔진은
//x변수가 어디에서 선언되었는지 스코프 체인을 통해 검색하기 시작했다.
//자바스크립트 엔진은 먼저 foo함수의 스코프에서 x변수의 선언을 검색한다.foo함수의 스코프에도 x변수의 선언이 없으므로
//검색에 실패할 것이고 , 자바스크립트 엔진은 x변수를 검색하기 위해 foo함수 컨테스트의 상위 스코프 (위 예제의 경우 전역 스코프)에서x변수의 선언을 검색한다.
//전역스코프에도 x변수의 선언이 존재하지 않기 떄문에 referenceError를 발생시킬것 같지만 자바스크립트 엔진은 암묵적으로 전연객체에 x프로퍼티를 동적생성한다.이떄
//전역객체의 x프로퍼티는 마치 전역변수처럼 사용할 수 있다. 이러한 현상을 암묵적 전역이라한다.

'use strict';

function foo(){
    x=10; //ReferenceError: x is not defined
}
foo();

function foo(){
    'use strict';
    x=10; //Error
}
foo();
//코드의 선두에 무조건작성하지 않으면 작동하지 않는다
function foo(){
    x=10; //에러를 발생시키지 않는다
    'use strict';
}
foo();

//전역에 적용한 strict모드는 스크립트 단위로 적용된다.
//strict모드 스크립트와 non- strict모드 스크립트와  스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.
//전역에서strict모드 스크립트를 적용하는 것은바람직하지 않다 이러하 경우 즉시 실행함수로 스크립트 전체를 감싸서
//스코프를 구분하고 즉시 실행 함수의 선두에 사용하는것이다

//즉시실햄함수의 선두에 strictmode적용
(function(){
    'use strict';
}());

//함수단위로 사용하게 되면 일일이 모든 함수에 적용하는 것은 까다로우며 strict모드 가 적용된 함수가 참조할 함수 외부의
//컨텍스트에 strict모드 를 적용하지 않는다면 이또한 문제가 될수있다
//따라서 strict모드 는 즉시 실행함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

//strict모드 가 발생시키는 에러

//암묵적 전역
(function(){
    'use strict'

    x=1;
    console.log(x); //ReferenceError
}());
//선언하지 않은 변수를 참조하면 에러

//변수 함수,매개변수의 삭제
//delete연산자로 변수,함수,매개변수를 삭제하면 syntxError발생

(function(){
    'use strict'

    var x = 1;
    delete x; //syntax :delete of an unqualified indenlifier in strict mode

    function foo(a){
        delete a; //syntax :delete of an unqualified indenlifier in strict mode
    }
    delete foo; //syntax :delete of an unqualified indenlifier in strict mode
}());

(function ( ) {
    'use strict';

    ////syntax :duplicate parameter name not alllowed in this contaxt
    function foo(x,y){
        return x+y;
    }
    console.log(foo(1,2));

}());

//with문의 사용
//with문을 사용하면 에러를 발생시킨다with문은 전달된 객체를 스코프 체인에 추가한다.with문은 동일한 객체의 프로퍼티를
//반복해서 사용할떄 객체 이름을 생략할수 있어서 코드가 간단해지는 효과가 잇지만 성능과 가독성이 나빠지는 문제가 있다.
//따라서 with문은 사용하지 않는 것이 좋다

(function (){
    'use strict';

    //syntaxError:strict mode code may not include a with statement
    with({x:1}){
        console.log(x);
    }
}());

//일반함수의 this
//strict모드에서는 함수를 일반함수로서 호출하면 this에 undefined가 바인딩된다.생성자 함수가 아닌 일반 함수 내부에서는
//this를 사용할 필요가 없기 때문이다. 이떄 에러는 발생하지 않는다
(function(){
    'use strict';

    function foo(){
        console.log(this); //undefined
    }

    foo();

    function Foo(){
        console.log(this); //Foo
    }
    new Foo();
}()); 

//arguments객체

//strict모드에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments객체에 반영되지 않는다
(function(a){
    'use strict';
    //매개변수에 전달된 인수를 재할당 하여 변경
    a=2;

    //변경된 인수가 arguments객체에 반영되지 않는다
    console.log(arguments); //{0:1,length:1}
}(1));
