/**
 * 타입 변환
 * Type conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

//명시적
let stringAge=age.toString();
console.log(typeof stringAge,stringAge);

//암묵적-> 숫자에다가 ''를 주면 string으로 바뀜
let test= age+ '';
console.log(typeof test, test);
console.log('------------');
console.log('98'+2); //982, 98은 string, +2는 어느 한쪽으로 타입으로 변하는데 string으로 바뀜
console.log('98' + '2');
console.log('98'*2); //196 string에는 *개념이 없어서 강제적으로 98이 number로 바뀜
console.log('98'-2); // 96 string에는 빼기 개념이 없어서 강제적으로 98이 number로 바뀜

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log('------------');
console.log(typeof (99).toString(),(99).toString());
console.log(typeof (true).toString(),(true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1',+'1');

/**
 * Boolean 타입으로의 변환
 * String 값 이 있으면 어떤 값이 있더라도 true이다.
 * !'x'는 false, !!'x'는 true
 * 값이없거나 0인 경우 false를 반환
 * 값이 있으면 true를 반환
 */
console.log('------------');
console.log(!!'x'); //true
console.log(!!''); //false

console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{}); //object는 무조건 true
console.log(!![]); //array도 true

/**
 * 1) 아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다. 
 */