const  o={};
//내부슬롯은 자바스크립트 엔진의 내부로직이므로 집접 접근할 수 없다.
 //o.[[Prototype]] //Uncaught SyntaxError:Unexpected tokken '['
//단, 일부내부슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 하다.
o.__protp__ //Object.prototype

//자바스크립트 엔진은 프로퍼티를 생성할 떄 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

const person = {
    name:'lee'
}

//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person,'name'));
//{value:'lee',writable:true, enumerable:true,configurable:true}
//

const person = {
    name :'lee'
}

//프로퍼티 동적 생성
person.age=20;

//모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptor(person));
/*
{
    name:{value:'lee',writable:true, enumerable:true,configurable:true}
    age:{value:'20',writable:true, enumerable:true,configurable:true}
}
*/

//프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
// .데이터 프로퍼티  키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터프로퍼티이다
//  접근자 프로퍼티  자체적으로는 값을 갖지 않고 다른 데이터프로퍼티의 값을 읽거나 저장할떄 호출되는 접근자 함수로 구성되는 프로퍼티다

/*프로퍼티 어트리뷰트     / 프로퍼티 디스크립터 객체의 프러퍼티       / 설명
[[value]]                 value                            프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
                                                           프로퍼티 키를 통해 프로퍼티 값을 변경하면[value]에 값을 재할당한다.이떄 프로퍼티가 없으면 프로퍼티를 동적생성하고 생성된
                                                           프로퍼티의[[value]]에 값을 저장한다.
    
[[writable]]              writable                         프로퍼티 값의 변경 가능여부를 나타내며 불리언 값을 갖는다
                                                           [[writable]]의 값이 false인 경우 해당 프로퍼티의  [[value]]
                                                           의 값을 변경 할 수 없는 읽기 전용 프로퍼티가 된다.

[[Enumeerable]]          Enumeerable                       프로퍼티의 열거가능 여부를 나타매며 불리언 값을 갖는다
                                                           [[Enumeerable]]의 값이 false인경우 해당프로퍼티는 
                                                           for...in문이나 Object.key메서드등으로 열거할수 없다
                                                        

[[Configurable]]         Configurable                      프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다
                                                           [[Configurable]]의값이 false인경우 해당 프로퍼티의 삭제,
                                                           프로퍼티 어트리뷰티 값의 변경이 금지된다. 단[[writable]] 이
                                                           true인 경우 [[value]] 의 변경과 [[writable]] 을 false로 변경되는것은 허용한다.
*/

const person ={
    name:'lee'
}

//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person,'name'));
//name:{value:'lee',writable:true, enumerable:true,configurable:true}

const person = {
    name:'lee'
}

//프로퍼티 동적생성
person.age=20;
console.log(Object.getOwnPropertyDescriptor(person)); 
//name:{value:'lee',writable:true, enumerable:true,configurable:true}
  //  age:{value:'20',writable:true, enumerable:true,configurable:true}
                                                        

//접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 떄 사용하는 접근자 함수로 구성된 프로퍼티이다

/*프로퍼티 어트리뷰트     / 프로퍼티 디스크립터 객체의 프러퍼티       / 설명
[[Get]]                     get                            접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 떄 호출되는 접근자
                                                        // 함수다 즉 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트[[get]]의 값,즉 getter함수가 호출되고 그결과가 프로퍼티 값으로 변환
                                
[[set]]                     set                            접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 떄 호출되는 접근자 함수
//                                                         즉 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트[[set]]의 값 즉 setter함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.
*/

const person = {
    //데이터프로퍼티
    firstName:'Ungmo',
    lastName:'lee',
    //fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
    // gettter함수
    get fullName(){
        return `${this.firstName}${this.lastName}`;
    },
    //setter함수
    set fullName(name){
        //배열 디스트럭처링 할당
        [this.firstName,this.lastName] = name.split('');
    }
}
//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + '' +person.lastName); //Ungmo lee

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티fullName에 값을 저장하면 setter함수가 호출된다.
person.fullName = 'Heegun lee';
console.log(person); //{firstName:"Heegun",lastName:"lee"}

//접근자 프로퍼티를 통한 프로퍼티갑의 참조
//접근자 프로퍼티fullName에 접근하면 getter함수가 호출된다.
console.log(person.fullName); //Heegun lee
//firstName은 데이터 프로퍼티이다
//데이터프로퍼티는 [[value]], [[writable]],[[enumerable]],[[configurable]]
//프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person,'firstName');
console.log(descriptor);
//{value:'Heegun',writable:true, enumerable:true,configurable:true}
//fullName른 접근자 프로퍼티다
//접근자프로퍼티는 [[get]],[[set]],[[enumerable]],[[configurable]]
//프로퍼티 어트리뷰트를 갖는다.
descriptor=Object.getOwnPropertyDescriptor(person,'fullName');
console.log(descriptor);
//{get;f,set:f,enumerable:true,configurable:true}

//접근차 프로퍼티 fuulName으로 프로퍼티 값에 접근하면 내부적으로[[get]]내부 메서드가 호출되어 다음가 같이 동작한다.
//1.프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야한다. 프로퍼티 키"fullName"은 문자열이므로 유효한 프로퍼티 키다.
//2.프로토타입 체인에서 프로퍼트를 검색한다.person객체에 fullName프로퍼틱 존재한다.
//3.검색된 fiullName프로퍼티의 프로퍼티어트리뷰트[[get]]의 값, 즉 getter 함수를 호추라여 그결과를 반환한다. 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[get]]
//의 값은 Objject.getOwnPropertyDescriptor메서드가 반환하는 프로퍼티 디스크립터 객체의 get프로퍼티 값과 같다.

//프로토타입은 어떤객체의 상위 객체역활을 하는 객체다.프로토타입은 하위 객체에게 자신의 프로퍼티와 메서드를 상속한다.
//하위객체는 자신의 프로퍼티또는 메서드 인것처럼 자유롭게 사용할 수 있다.

//일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype,'__proto__');
//{get;f,set:f,enumerable:false,configurable:true}

//함수 객체의 protoype은 데이터프로퍼티이다.
Object.getOwnPropertyDescriptor(function(){},'__proto__');
//{value:{...},writable:true, enumerable:false,configurable:false}

//프로퍼티 정의란새로운 프로퍼티를 추가하면서 프로퍼티 어트리부트를 명시적으로 정의하거나,기존의 프로퍼티 어트리뷰트를 재정의하는것

const person={};
//데이터프로퍼티 정의
Object.defineProperty(person,'firstName',{
    value:'Ungmo',
    writable:true,
    enumerable:true,
    configurable:true
});

Object.defineProperty(person,'lastName',{
    value:'Lee',
});

let descriptor = Object.getOwnPropertyDescriptor(person,'firstName');
console.log('first',descriptor);
//firstName{value:"Ungmo",writable:true, enumerable:true,configurable:true}

//디스크립터 객체의 프로퍼티를 누락시키면 undefined,false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName',descriptor);
//firstName{value:"lee",writable:false, enumerable:false,configurable:false}

//[[Enumerable]]의 값이 false인 경우
//해당프로퍼티는 for ..in문이나 object.keys등으로 열거할 수 없다.
//lastName프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); //[[firstName]]
//[[writable]]의 값이 false인경우 해당 프로퍼티의 [[value]]의 값을 변경할 수없다.
//lastName프로퍼티[[writable]]의 값이 false이므로 값을 변결할 수 없다.
//이떄 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName='kim';
//[[configurable]]의 값이 false인경우 해당프로퍼티를 삭제할 수 없다.
//lastName프로퍼티는 [[configurable]]의 값이 false이므로 삭제할 수 없디.
//이떄 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;

//[[configurable]]의 값이 false인경우 해당프로퍼티를 재정의 할 수 없다.
//Object.defineproperty(person,'lastName,{eumerable:true});
//Error :cannot redefine property:lastName

descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName', descriptor);
//lastName{value:"lee",writable:false, enumerable:false,configurable:false}

//접근자 프로퍼티 정의
Object.defineProperties(person,'fullName',{
    //getter함수
    get(){
        return `${this.firstName} ${this.lastName}`;

    },
    //setter함수
    set(name){
        [this.firstName,this.lastName] = name.split('');
    },
    enumerable:true,
    configurable:true
});
descriptor = Object.getOwnPropertyDescriptor(person,'fullName');
console.log('fullName',descriptor);
//fullName{get;f,set:f,enumerable:true,configurable:true}

person.fullName ='Heegun lee'
console.log(person); //{firstName:heegun, lastName:"lee"}

//프로퍼티 디스크립터 객체의 프로퍼티     대응하는 프로퍼티 어트리뷰트      생략했을 떄의 기본값
//value                             [[value]]                    undefined
//get                                [[Get]]                     undefined
//set                                  [[set]]                   undefined
//writable                             [[writable]]               false
//enumerable                            [[enumerable]]            false
//configurable                          [[configurable]]          false

const person = {};
Object.defineProperties(person,{
    //데이터프러퍼티 정의 
    firstName:{
        value:'Ungmo',
        writable:true,
        enumerable:true,
        configurable:true
    },
    lastName:{
        value:'lee',
        writable:true,
        enumerable:true,
        configurable:true
    },
    //접근자 프로퍼퍼티 정의
    fullName:{
        //gerter함수
        get(){
            return `${this.firstName}${this.lastName}`;
            },
            //seter함수
        set (name){
            [name.firstName,this.lastName] = name.split('');
            },
        enumerable:true,
        configurable:true
        }
    
});
person.fullName='heegun lee';
console.log(person); //{firstname:"heegun,lastName:"lee"}

//구분        메서드                        프로퍼티추가   프로퍼티삭제  프로퍼티값 읽기 프로퍼티값쓰기 프로퍼티어트 리뷰트 재정의
//객체확장금지  object.preventExtensions       x            o           o            o            o
//객체밀봉     object.seal                    x            x           o            o            x
//객체 동결    object.freeze                  x            x           o            x            x

//즉 확장이 금지된 객체는 프로퍼티 추가가 금지된다.

const person = {name:'lee'};
//person객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); //true

//person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

//person객체는 확장이 금지된 객체다
console.log(Object.isExtensible(person)); //false

//프로퍼티 추가가 금지된다.
person.age=20; //무시 .strict mode에서는 에러
console.log(person); //{name:"lee"}

//프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); //{}

//프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person,'age',{value:20});
//Error

//Object.seal 메서드는 개체를 밀봉한다.밀본된 객체는 읽기와 쓰기만 가능하다.
const person = { name:'lee'};

//person객체는 밀봉된 객체가 아니다.
console.log(Object.isSealed(person)); //false

//person 객체를 밀봉하여 프로퍼티 추가, 삭제 , 재정의를 금지한다.
Object.seal(person);

//person객체는 밀봉된 객체다
console.log(Object.isSealed(person)); //true

//밀봉된 객체는 configurable이 false다
console.log(Object.getOwnPropertyDescriptors(person));
//{Name{value:"lee",writable:true, enumerable:true,configurable:false}

//프로퍼티 추가가 금지된다.
person.age=20; //무시
console.log(person); //{name:"lee"}

//프로퍼티 삭제가 금지된다.
delete person.name; //무시
console.log(person); //{name:"lee"}

//프로퍼티 값 갱신도 가능하다.
person.name ='kim';
console.log(person); //{name:"kim"}

//프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person,'name',{configurable:true});
//Error

//Object.freeze메서드는 개체를 동결한다. 객체동결이란 프로퍼티추가및 삭제 프로퍼티 어트리뷰트재정의금지 프로퍼티값 갱신금지
//즉 동결된 객체는 읽기만 가능하다.
const person = { name:'lee'};

//Person객체는 동결된 객체가 아니다.
console.log(Object.isFrozen(person)); //false

//person객체를 동결하여 프로퍼티 추가,삭제,재정의,쓰기를 금지한다
Object.freeze(person);

//person객체는 동경된객체다
console.log(Object.isFrozen(person)); //true

//동결된객체는 writabla과 configurabla이 false다
console.log(Object.getOwnPropertyDescriptors(person));
//{Name{value:"lee",writable:false, enumerable:true,configurable:false}

//프로퍼티 추가가 금지된다.
person.age=20; //무시
console.log(person); //{name:"lee"}

//프로퍼티 삭제가 금지된다.
delete person.name; //무시
console.log(person); //{name:"lee"}

//프로퍼티 값 갱신이 금지된다.
person.name="kim"; 무시
console.log(person ); //{name:"lee"}

//프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person,'name', {configurable:true});
//Error

///bject.freeze메서드로 동결하여도 중첩객체까지는 동결할 수는 없다.

const person={
    name:'lee',
    address:{ctiy:'seoul'}
};
//얇은 객체 동결
Object.freeze(person);

//직속 프로퍼티만 동결한다.
console.log(Object.isFrozen(person)); //true
//중첩객체까지는 동결하지는 못한다.
console.log(Object.isFrozen(person.address)); //false

person.address.city='Busan';
console.log(person); //{name:"lee", address:{city:"busan"}}

function deepFreeze(target){
    //객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않는 객체만 동결한다.
    if (target && typeof target ==='object' && !Object.isFrozen(target)){
        Object.freeze(target);

        //모든 프로퍼를 순회하며 재귀적으로 동결한다
        //Object.keys메서드는 객체 자신의 열거가능한 프로퍼티 키를 배열로 반환한다.
        //forEach메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백함수를 실행한다.
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person ={
    name:'lee',
    address:{ city:'seoul'}
};
//깊은 객체 동결
deepFreeze(person);
console.log(Object.isFrozen(person));//true
//중첩객체까지 동결한다.
console.log(Object.isFrozen(person.address)); //true

person.address.city='busan';
console.log(person ); //{name:"lee", address:{city:"seoul"}}