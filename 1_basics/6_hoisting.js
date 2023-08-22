/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('----------');
// console.log(name); // undefined가 됐다.
// var name ='코드 팩토리';
// console.log(name);
var name;
console.log(name);
name = '코드팩토리';
console.log(name);
// 위와 같이 주석 처리 된 것과 같은 출력을 보인다.
/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let과 const도 Hoisting이 된다.
 */
console.log(yuJin);
let yuJin = '안유진';
// 실제 존재는 되어 있지만 할당 전에는 접근 할 수 없다.
// 이러한 호스팅 현상을 var 키워드는 막아 주지 못하지만
// let과 const는 호스팅 현상을 막아준다.
