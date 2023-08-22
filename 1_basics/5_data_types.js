/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한 개의 오브젝트 타입이 있다.
 * 
 * Primitive Types
 * 다른 타입들이 구성될 수 있는 가장 작은 단위, 수학으로 보면 1,2,3, 이다.
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리안) ->참/거짓
 * 4) undefined(언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼) -> 최근에 생김
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object 
 */
//Number tpye
const age = 32;
const tempatre = -21;
const pi  = 3.14;
//타입 확인하기 typeof 변수 
console.log(typeof age);
console.log(typeof tempatre);
console.log(typeof pi);
console.log('-----------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-----------');

/**
 * String 타입
 * 큰 따옴표 안에 작은 따음표 넣으면 작은 따음표 나오고
 * 작은 따옴표 안에 큰 따옴표를 넣으면 큰 따옴표가 나온다.
 */
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal(``)
 * `` 저 사이에서는 아무렇게 입력해도 된다.
 * Escaping Charater
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래쉬를 스트링으로 표현하고 싶다면 두번 입력하면된다.
 */
const iveYuJi = '아이브\n안유진';
console.log(iveYuJi);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash ='아이브\\코드코드';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브 '"////
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName+' 안유진');
console.log(`${groupName} 안유진`);
console.log('-----------');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false; 
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-----------');
/**
 * Undefined
 * 
 * 사용작 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는 건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('-----------');
/** 
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이다.
 * JS에서 개발자가 명시적으로 없는 값으로 치기화할때
 * 사용된다.
*/
let init = null;
console.log(init);
console.log(typeof init); // 일종의 버그다..
console.log('-----------');

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 떄 사용한다.
 * 다른 프리미티브 값들고 다르게 symbol 함수를
 * 호출해서 사용한다.
 */
const test1 ='1';
const test2 ='2';
console.log(test1 == test2);
const test3 ='1';
const test4 ='1';
console.log(test3 == test4);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2); 
// 어떤 값을 안에 넣더라도 값은 보존되지만 유일무이한 값으로 인식된다.
console.log('-----------');
/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져 있다.
 * key : value
 * 키값을 기준으로 벨류를 찾는다.
 */
const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색'
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['yellow']);
console.log('-----------');

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입니다.
 */
const numberArray=[
    '안',
    '녕',
    '하',
    '세',
    '요'
];
console.log(numberArray);
console.log(numberArray[0]);
console.log(numberArray[4]);

numberArray[0]='코드팩토리';
console.log(numberArray);
console.log(typeof numberArray);
console.log('-----------');
/**
 * static typing -> 변수를 선언할 떄 어떤 타입의 변수를 선언할지 명시한다.
 *                  C언어
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * Js -> dynamic typing
 */