//클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

const x =1;
function outerFunc(){
    const x =10;
    
    function innerFunc(){
        console.log(x); //10
    }
    innerFunc();
}
outerFunc();

//만약 innerFunc함수가 outerfunc함수의 내붕서 정의된 중첩함수가 아니라면 innerfunc함수를 outerfunc함수 내부에서 호출한다 하더라도 outerFunc함수의 변수에 접근할 수 없다.

const x = 1;
function outerFunc(){
    const x =10;
    innerFunc();
}
function innerFunc(){
    console.log(x); //1
}
outerFunc();
//이같은 현상이 발생하는 이유는 자바스클빕트가 렛시컬 스코프를 따르는 프로그래밍 언어이기떄문

//지비스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다.이를 렉시컬 스코프(정적스코프)라한다,

const x=1;

function foo(){
    const x=10;
    bar();
}

function bar(){
    console.log(x);
}
foo(); //?
bar(); //?

//foo함수와 bar함수는 모두 전역에서 정의된 전역함수다.함수의 상위스코프는 함수를 어디서 정의했느냐에 따라 결정되므로 foo함수와 bar함수의 상위스코프는 전역이다.
//스코프의 실체는 실행컨텍스트의 레시컬환경이다.이 렉시컬 환경은 자신의 "외부 렉시컬 환경에 대한 참조"를 통해 상위 렉시컬 환경과 연결된다. 이것이 바로 스코프 체인이다.

//렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값,즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된환경(위치)에 의해 결정된다. 이것이 바로 렉시컬 스코프다
//힘수는 자신의 내부슬롯[[Envitonment]]에 자신의 정의된 환경,즉 상위 스코프의 참조를 저장한다.
//전역에서 정의된함수 선언문은 전역코드가 평가되는 시점에 평가되어 함수객체를 생성,이떄 생성된 함수 객체의 내부슬롯[[Envitonment]]에는 함수 정의가 평가되는 시점,즉 전역코드 평가시점에 실행중인 실행컨텍스트의렉시컬환경인 전역 렉시컬 환경의 참조가 저장

//함수 내부에서 정의된 함수 표현식은 외부 함수 코드가 실행되는 시점에 평가되어 함수 객체를 생성,이떄 생성된 함수 객체의 내부슬롯 [[Envitonment]]에는 함수가 정의되는 시점 , 즉 외부함수 코드 실행시점에 실행중인 실행컨텍스트의 렉시컬 환경인 외부 함수 렉시컬 환경의 참조가 저장된다.

//힘수 객체의 내부슬럿[[Envitonment]] 에 저장된 현재 실행중인 실해컨텍스트의 렉시컬 환경의 참조가 바로상위 스코프다.또한 자신이 호출되었을 떄 생성될 함수 렉시컬 환경의 ""외부 렉시컬 환경에 대한 참조"에 저장될 참조 값이다.함수 객체는 내부슬롯[[Envitonment]]에 저장한 렉시컬 환경의 참조 ,
//상위 스코프를 자신이 존재하는 한 기억한다.

const x =1;

function foo(){
    const x =10;

    //상위스코프는 함수 정의 환경 (위치)에 따라 결정된다.
    //함수 호출 위치와 상위 스코프는 아무런 관계가 없다
    bar();
}

//함수 bar는 자신의 상위 스코프 ,즉 전역렉시컬 환경을 [[Envitonment]]에 저장하여 기억한다.
function bar(){
    console.log(x);
}

foo(); //?
bar(); //?

//foo함수와 bar함수는 모두 전역에서 함수 선언문으로 정의,foo함수와 bar 함수는 모두 전역코드가 평가되는 시점에 평가되어 함수 객체를 생성하고,전역객체 window의 메서드가 된다 이떄
//생성된 함수객체의 내부슬롯[[Envitonment]]에는 함수정의가 평가된 시점 즉 전역코드 평가시점에 실행중인 실행컨텍스트의 렉시컬 환경인 전역렉시컬 환경의 참조가 저장된다.
//함수호출 - 함수내부로 제어권이동 - 함수코드 평가 

//1.함수 실행컨텍스트 실행
//2.함수 렉시컬 환경 생성
/// 2.1 함수 환경 레코드 생성
//  2.2this 바인딩
//  2.3외부 렉시컬 환경에 대한 참조 결정

//외부 레시컬 환경에 대한 참조에는 함수 객체의 내부슬롯[[Envitonment]]에 저장된 렉시컬 환경의 참조가 할당,함수 객체의 내부슬롯[[Envitonment]]에 정장된 렉시컬 환경의 참조는 바로 함수의 상위스코프를 의미,이것이 바로 함수 정의 위치에 따라 상위스코프를 결정하는 렉시컬스토프의실체

const x  = 1;

//1.
function outer(){
    const x=10;
    const inner = function (){console.log(x);}  //2
    return inner
}

//orter함수를 호출하면 중첩함수 inner을 반환
//그리고 outer함수의 실행컨텍스트는 실행컨텍스트 스택에서 팝되어 제거
const innerFunc = outer(); //3
innerFunc(); //4 10

// 3호출하면 outer함수는 중첩함수 inner를 반환하고 생명주기를 마감,즉 outer함수의 실행이 종료되면 outer함수의 실행컨텍스트는 실행컨텍스 스택에서 제거,
//이떄outer함수의 지역변수 x와 변수값 10을 저장하고 있던 outer함수의 실행컨텍스트가 제거되었으므로 outer함수의 지역변수 x또한 생명주기를 마감,따라서 outer함수의 지역변수x는 더는 유효하지 않아 x변수에 접글할 수 있는 방법없어보임
//그러나 4는 outer함수의 지역변수 값인 10이다 이미 생명주기가 종료되어 실행컨텍스트 스택에서 제거된 outer함수의 지역변수x가 가시 부활이라도 한듯이 동작
//외부 함수보다 중첩함수가 더 오래 유자되는 경우 중첩함수는 이미 생명주기가 종료한 외부함수의 변수를 참조할수 있다. 이러한 중첩함수를 클로저라 한다.

//클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다
//자바스크립트의 모든 함수는 자신의 상위 스코프를 기억한다고 했다. 모든 함수가 기억하는 상위 스코프는 함수를 어디서 호출했든 상관없이 유지된다. 따라서 함수를 어디서 호출하든 상관없이  함수는 언제나 자신이 기억하는 상위 스코프의 식별자를 참조 할 수 있으며 식별자에 바인딩 된 값을 변경 할 수도 있다.

//outer함수가평가되어 함수객체를 생성할 떄 현재 실행중인 실행컨텍스트의 렉시컬환경 즉 , 전역렉시컬환경을 outer함수 객체의 [[Evironnment]]내부 슬롯에 상위 스코프로서 저장한다

//outer함수를 호출하면 outer함수를 호출하면 outer함수의 렉시컬 환경이 생성되고  앞서 outer함수객체의 [[Evironnment]]내부 슬럿에 저장된 전역렉시컬 환경을 outer함수 렉시컬 환경의'외부 렉시컬 환경에 대한 침조'에 할당한다
//그리고 중첩함수 inner가 평가된다 이떄 중첨함수 inner은 자신의[[Evironnment]]내부 슬롯에 현재 실행중인 실행컨텍스트의 렉시컬환경 즉 outer함수의 렉시컬 환경을 상위스코프로서 저장한다.
//outer함수의 실행이 종료되면 inner함수를 반환하면서 outer함수의 생명주기가 종료된다. 즉 outer함수의 실행컨텍스트가 가 실행컨택스트 스택에서 제거된다.이떄 outer함수의 실행컨텍스트는 실행컨텍스트 스택에서 제거되지만 outer함수의 렉시컬 환경까지 소멸하는 것은 아니다.
//outer함수의 렉시컬 환경은 inner함수의 [[Evironnment] 내부 슬롯에 의해 참조,inner함수는 전역변수 innerfunc에 의해 참조되고 있으므로 가비지 컬렉션의 대상이 되지 않기 떄문이다.
//가비지 컬렉터는 누군가 참조하고 있는 메모리 공간을 함부로 해제하지 않는다.
//outer함수가 반환한 ineer함수를 호출하면 inner함수의 실행컨텍스트 생성,실행컨텍스트 스택에 푸쉬
//렉시컬 환경에 대한 참조에는 inner함수 객체의 [[Evironnment]]내부슬럿에 저장되어 있는 참조 값이 할당

//중첩함수 inner은 외부함수 outer보다 더 오래 생존했다. 이떄 외부함수보다 더 오래 생존한 중첩함수는 외부 함수의 생존여부와 상관없이 자신이 정의된 위치에 의해 결정된 상위스코프를 기억
//중첩함수 inner의 내부에서는 상위 스코프를 참조할수 있으므로 상위 스코프의 식별자를 참조할수 있고 식별자의 값을 변경할수 있다.
//자바스크립트의 모든 함수는 상위 스코프를 기억하므로 이론적으로 모든 함수는  클로저다.
//상위 스코프의 어떤 식별자도 참조하지 않는 함수는 클로저가 아니다.

function foo(){
    const x =1;

    //bar 함수는 클로저였지만 곧바로 소멸한다.
    //이러한 함수는 일반적으로 클로저라고 하지 않는다
    function bar(){
        dabugger;
        //상위 스코프의 식별자를 참조한다,
        console.log(x);

    }
    bar();
}
foo();

//중첩함수 bar는 상위 스코프의 식별자를 참조하고 있으므로 클로자다,하지만 외부 함수 foo의 외부로 중첩함수 bar가 반환되지 않는다.즉 외부함수foo보다 중첩함수bar의 생명주기가 짧다,
//이런 경우 중첩함수 bar는 클로저 였지만 외부함수보다 일찍 소멸되기 떄문에 생명주기가 종료된 외부 함수의 식별자를 참조 할수 있다는 클로저의 본질에 부합하지 않는다.따라서 일반적으로 클로저라 부르지 않는다.

function foo(){
    const x =1;
    const y = 2;

    //클로저 
    //중첩함수 bar는 외부함수보다 더 오래 유지하며 상위 스코프의 식별자를 참조한다.
    function bar(){
        debugger;
        console.log(x);
    }
    return bar;
}
const bar =foo();
bar();

//위의 중첩함수 bar는 상위 스코프의식별자를 참조하고 있으므로 클로저다.외부함수의 외부로 반환되어 외부함수보다 더 오래살아남는다
//클로저는 중첩함수가 상위 스코프의 식별자를 참조하고 있고 중첩함수가 외부함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다.
//클로저에 의해 참조되는 상위 스코프의 변수를(위 예제의 foo함수의 x변수)를 자유변수라고부른다.

//클로저는 상태를 안전하게 변경하고 유지를 하기위해 사용한다. 다시말해 상태가 의도치 않게 변경되지 않도록 상태를 안적하게 은닉하고 특정함수에게만 상태변경을 허용하기 위해 만든다


//카운터 상태 변수
let num =0;

//카운터 상태 변경함수
const increase = function(){
    //카운터 상태를 1만큼 증가시킨다.
    return ++num;
}
console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
//위코드는 동작은 잘하지만 오류를 내보낼수 있다 그이유는 바르게 동작하려면 전제조건이 지켜져야한다.
//1.카운트 상태(num변수의 값)는 increase함수가 호출되기 전까지 변경되지 않고 유지되어야 한다
//2.이를 위해 카운트 상태(num변수의 값) 는increase함수만이 변경될 수 있어야 한다.


//카운트 상태 변경함수
const increase = function(){
    //카운트 상태 변수
    let num = 0;

    //카운트 상태를 1 만큼 증가시킨다
    return ++num;
}
//이전 상태를 유지하지 못한다,
console.log(increase()); //1
console.log(increase()); //1
console.log(increase()); //1


//카운트 상태를 안전하게 변경하고 유지하기 위한 전역변수 num을 increase함수의 지역변수로 변경하여 의도치 않은 상태 변경은 방지했다.이제 num변수의 상태는 increase함수만이 변결 할 수 있다
//하지만 increase함수가 호출될 떄마다 지역변수num은 다시 선언되고 0으로 초기화 되기 때문에 출력결과는 언제나1이다.

//카운트 상태변경함수
const increase = (function(){
    //카운트 상태 변수
    let = 0;
    //클로저
    return function (){
        //카운트 상태를 1만큼 증가시킨다
        return ++num;
    }
}()); 

console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3

//즉시실행함수는  호출된 이후 소멸되지만 즉시 실행함수가 반환한 클로저는 increase변수에 할당되어 호출된다. 
//즉시실행함수는 한번만 실행되므로 increase가 호출될 떄마다 num변수가 재차 초기화 될 일은 없을 것이다 또한 num변수는 외부에서 직접 접근할 수 없는 은닉된 private변수이므로 전역변수를 사용할 떄와 같이 의도치 않은 변경을 걱정할 필요가 없기 떄문에 더 안정적인 프로그래밍이 가능하다,
//클로저는 상태가 의도치 않게 변경되지 않도록 안적하게 은닉하고 특정함수에게만 상태변경을 허용하여 상태를 안전하게 변경하고 유지하기 위헤 사용한다.

const counter = (function(){
    //카운트 상태변수
    let num = 0;

    //클로저인 메서드를 갖는 객체를 반환한다.
    //객체 리터럴은 스코프를 만들지 않는다
    //따라서 아래 메서드들의 상위 스코프는 즉시 실해함수의 렉시컬 환경이다.
    return{
        //num :0, // 프로퍼티는 public하므로 은닉되지 않는다.
        increase(){
            return ++num;
        },
        decrease(){
            return num >0 ? --num:0;
        }
        }
    }());
    console.log(counter.increase()); //1
    console.log(counter.increase()); //2
    console.log(counter.decrease()); //1
    console.log(counter.decrease()); //1


//위 예제의 생성자함수

const Counter = (function(){
    //1.카운트 상태변수
    let num = 0;
    
    function Counter(){
      //  this.num =0; //2.프로퍼티는 public하므로 은닉되지 않는다

    }
    Counter.prototype.increase = function(){
        return ++num;
    }
    Counter.prototype.decrease = function(){
        return num >0 ?--num :0;
    }
    return Counter;
}());

const counter = new Counter();

console.log(counter.increase());//1
console.log(counter.increase());//2
console.log(counter.decrease());//1
console.log(counter.decrease());//0

//함수를 인수로 전달받고 함수를 반환하는 고차함수
//이함수는 카운트 상태를 유지하기 위한 변수 counter을 기억하는 클로저를 반환한다.

function makeCouner(predicate){
    //카운트 상태를 유지하기 위한 자유 변수
    let conter = 0;

    //클로저를 반환
    return function (){
        //인수로 전달받은 보조 함수에 상태 변경을 위임한다.
        counter = predicate(counter);
        return counter ; 
    }
}
//보조함수

function increase(n){
    return ++n;
}

//보조함수 
function decrease(n){
    return --n;
}

//함수로 함수를 생성한다.
//makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increaser = makeCouner(increase); //1
console.log(increaser()); //1
console.log(increaser()); //2

//increaser 함수와는 별가로 독립적 렉시컬 환경을 갖기 떄문에 카운터 상태가 연동되지 않는다.
const decreaser = makeCouner(decrease); //2
console.log(dacreaser()); // -1
console.log(dacreaser()); // -2

//makeCouner함수는 보조함수를 인자로 전달받고 함수를 반환하는 고차함수다 makeCouner함수가 반환하는 함수는 자신이 생성 되었을떄의 렉시컬 환경인 makeCouner함수의 스코프에 속한 counter변수를 기억하는 클로저다
//makeCouner함수는 인자로 전달받은 보조함수를 생성하여 자신이 반환하는 함수의 동작을 변경할 수 있다.이떄 주의해야할것은 makeCouner함수를 호출해 함수를 반환할떄 반환된 함수는 자신만의 독특한 렉스컬환경을 갖느다
//위 예제에서 전역변수 increaser와 decreaser에 할당된 함수는 각각 자신만의 독립된 렉시컬 환경을 갖지 떄문에 카운트를 유지하기 위한 자유변수 counter를 공유하지 않아 카운터의 증감이 연동되지 않는다 따라서 독립된 카운터가 아니라
//연동하여 증감이 가능한 함수를 만들려면 렉시컬환경을 공유하는 클로저를 만들어야한다.이를위해서는makeCouner함수를 두번호출하면안댄다

//함수를 반환하는 고차함수
//이 함수는 카운트 상태를 유지하기 위한 자유변수 counter를 기억하는 클로저를 반환한다.
const counter = (function (){
    //카운트 상태를 유지하기 위한 자유 변수
    let counter = 0;

    //함수를 인수로 전달받는 클로저를 반환
    return function (predicate){
        //인수로 전달받은 보조 함수에 상태 변경을 위힘한다.
        counter = predicate(counter);
        return counter;
    }
}());

///보조함수
function increase(n){
    return ++n;
}

//보조함수
function decrease(n){
    return --n;
}

//보조함수를 전달하여 호출
console.log(counter(increase)); //1
console.log(counter(increase)); //2
//자유변수를 공유한다
console.log(counter(decrease)); //1
console.log(counter(decrease)); //0


//캡술화는 객체의 상태를 내타내는 프로퍼티와 프로퍼티를 참조하고 조작할수 있는 동작인 메서드를 하나로 묶는 것을 말한다.
//캡슐화는 객체의 특정프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를정보 은닉이라한다.
//대부분의 객체지향 프로그래밍 언어는 클래스를 정의하고 그클래스를 구성하는 멤버에 대하여 public,private,protected같은 접근 제한자를 선언하여 공개 범위를 한정할 수 있다.
//자바스크립트는 접근제한자를 제공하지 않는다.따라서 모든 프로퍼티와 메서드는 기본적으로 외부에 공개되어 있다.

function Perosn (name,age){
    this.name = name; //public
    let _age = age; //private

    //인스턴스 메서드
    this.sayHi = function(){
        console.log(`hi my name is ${this.name}. i am ${_age}.`);

    }
}

const me = new Perosn('lee', 20);
me.sayHi(); //hi my name is lee .i am 20
console.log(me.name); //lee
console.log(me._age); //undefined

const you = new Perosn('kim',30);
you.sayHi(); //hi my name is kim i am30
console.log(you.name); //kim
console.log(you._age); //undefined

//name프로퍼티는 현재 외부로 공개되어서 자유롭게 참조가 가능하다.하지만 age변수는 peron생성자함수의 지역변수이므로 person외부에서 참조가 불가능하ㅏ.

function Person(name,age){
    this.name = name; //public
    let _age = age;

}

//프로토타입 매서드
Perosn.prototype.sayHi = function(){
    //person생성자 함수의 지역변수 age를 참조할수없다
    console.log(`hi my name is${this.name}. i am ${_age}`)
}

const Person = (function(){
    let _age = 0; //private

    //생성자 함수
    function Person(name,age){
        this.name=name; //publick
        _age =age;
    }

    //프로토타입 메서드
    Perosn.prototype.sayHi = function(){
        console.log(`hi my name is ${this.name}. i am ${_age}`);
    }

    //생성자 함수를 반환
    return Person ;
}());

const me = new Person('lee',20);
me.sayHi(); //hi my name is lee. i am 20
console.log(me.name); //lee
console.log(me._age); // undefined

const you = new Person('kim', 30);
you.sayHi(); //hi my name us kim ,i am 30
console.log(you.name); //kim
console.log(you._age); //undefined

//peroson함수가 여러개의 인스턴스를 생성할 경우 다음고 같이 age변수의 상태가 유지되지 않는다

const me = new Person('lee',20);
me.sayHi(); //hi my name is lee.i am 20

const you = new Person('kim',30);
you.sayHi(); //hi my name is kim , i am 30

//_age 변수 값이 변경된다
me.sayHi(); //hi my name is lee , i am 30

//이는 person.prototype.sayhi메서드가 단 한번 생성되는 클로저 이기 떄문이다.Perosn.prototype.sayHi 메서드는 즉시 실행 함수가 호출될 떄 생성된다.
//Perosn.prototype.sayHi메서드는 자시의 상위 스코프인 즉시실행함수의 실행컨텍스트의 렉시컬 환경의참조을[[Environment]]에 저장하여 기억한다.
//따라서 person생성자 함수의 모든 인스턴스가 상속을 통해 호출할 수 있는 Perosn.prototype.sayHi 메서드의 상위 스코프는 어떤 인스턴스로 호출하더라도 하나의 동일한 상위 스코프를 사용하게 된다.

var funs = [];

for(var i = 0; i<3; i++){
    funs[i] = function (){return i;}; //1

}
for(var j =0; j<funs.length; j++){
    console.log(funs[j]()); //2
}

//for 문의 변수 선언문에서 var키워드로 선언한 i변수는 블록레벨스코프가 아닌 함수레벨스코프를 갖기떄문에 전역변수다 전역변수 i에는 0,1,2가 순차적으로 할당된다.따라서 funs배열의 요소로 추가한 함수를 호출하면 전역변수i를 참조하여 i의 값 3이 출력된다.

//바른 예
var funs = [];
for (var i =0; i<3;i++){
    funs[i] = (function (id){
        return function(){
            return id;
        }
    }(i));
}

for(var j = 0; j<func.length; j++){
    console.log(func[j]());
}

//즉시실행함수는 전역변수 i에 현재 할당되어 있는 값을 인수로 전달받아 매개변수 id에 할당한 후 중첩함수를 반환하고 종료한다.즉시 실행함수가 반환한 함수는fucs배열에 순차적으로 저장된다.
//즉시실행함수의 매겨변수 id는 즉시실행함수가 반환항 중첩함수의 상위 스코프에 존재한다. 즉시 실행함수가 반환한 중첩함수는 자신의 상위스코프(즉시 실행함수의 렉시컬환경)를 기억하는 클로저이고,
//매개변수 id는 즉시 실행함수가 반환한 중첩함수에 묶여있는지 자유 변수가 되어 그 값이 유지된다.

const funcs = [];

for(let i =0;i<3;i++){
    funcs[i] = function (){ return i;};

}

for (let i = 0; i<funcs.length; i ++){
    console.log(funcs[i]()); //0 1 2
}
//for문의 변수 선언문에서 let키워드로 선언한 변수를 사용하면 for 문의 코드블록이 반복실행될떄마다 for 문 코드 블록의 새로운 렉시컬 환경이 생성된다.만약 for문의 코드블록내에서 정의한 함수가 있다면
//이 함수의상위 스코프는 for문의 코드블록이 반복 실행될 때마다 생성된 for문 코드블록의 새로운 렉시컬환경이다
//이떄 함수의 상위 스코프는 for문의 코드블록이 실행될떄마다 식별자의 값을 유지해여한다.이를 위해for문이 반복될떄마다 독립적인 렉시컬 환경을생성하여 식별자의 값을 유지한다.

//for문의 변수선언문에서 let키워드로 선언 초기화변수를 사용한 for문이 평가되면 먼저 새로운 렉시컬환경을 생성,초기화 변수 식별자와 값을 등록,그리고 생서된 레시컬환경을 현재실행중인 실행컨텍스트에 렉시컬환경으로등록

//for문의 코드블록이 반복시작하면 새로운 렉시컬 환경을 생성,for문 코드블록내의 식별자와 값을 등록,그리고 생서된 레시컬환경을 현재실행중인 실행컨텍스트에 렉시컬환경으로등록

//for문의 코드블록이 반복실행이 종룓면 for문이 실행되기 이전의 렉시컬 환경을 실행중인 실행컨텍스트의 렉시컬환경으로 되돌린다.


//함수형 프로그래밍 기법 고차함수이용(참고용)

//요소가 3개인 배열을 생성하고 배열의 인덱스를 반환하는 함수를 요소로 추가한다.
//베열의 요소로 추가한 함수들은 모두 클로저다
const funcs = Array.from(new Array(3),(_,i) =>() => i); //(3)[f,f,f]

//배열의 요소로 추가된 함수들을 순차적으로 호출한다
funcs.forEach(f =>console.log(f())); //0 1 2 