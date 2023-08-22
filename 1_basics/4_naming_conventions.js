/**
 * 변수 이름 짖기
 * Naming Convetions
 * 
 * 절대적으로 지켜야하는 약속
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어와 달러를 사용할 수 있다.
 * 3) 숫자를 이름을 시작할 수 없다.
 *      1NAME, 2Hello
 * 4) 키워드는 변수명으로 사용할 수 없다.
 *      var var ='var; , var const  (불가능)
 */
let codefactory ='코드팩토리';
var $ive = '아이브'
const _yuJin = '안유진';

console.log(codefactory);
console.log($ive);
console.log(_yuJin);
//아래가 불가능한 케이스
// let 1name = 'no';
// let const = 'attention';
/**
 * Naming convention2
 * 
 * 1) camelCase  -> 띄어쓰기 다음글자는 대문자로
 * 2) snake_case -> 단어끼리를 _로 묶는다. (대문자를 안쓴다.)
 * 3) PascalCase -> 첫글자와 띄어쓰기 다음 글자는 대문자로 c# 마이크로소프트 계열의 언어에서 사용됨. 
 */
const anYuJin = '안유진';
console.log(anYuJin);