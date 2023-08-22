/**
 * Variable (변수) 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다. let이 var의 개선된 변수이다.
 * 2) let - 선언을 한다음에 값을 바꿀 수 있다.
 * 3) const -  변경하게 되면 에러가 뜨게 된다. 즉 바꿀 수 없다.
 */
var name = '코드팩토리'; //따옴표를 사용하면 글자를 표현하게 된다. 
//따옴표를 쓰지 않았기에 변수이름이라는 것을 알 수 있다.
console.log(name);

var age = 32; // ''를 쓰게 되면 글자가 되고 안쓰면 숫자가 된다.
console.log(age);

let ive = '아이브';
console.log(ive);

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';
/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것. 
 * 2) 할당은 변수에 값을 넣어주는 과정이다.
 */
var name = '코드팩토리'; // 1),2)를 한번에 할 수 있다.
console.log(name);

let friend;
console.log(friend); // undefined이 된다

const friend2; //값이 초기화된 상태로 선언되어야 한다. 즉 문제가 된다.
/**
 * var과 let은 할당이 안이루어져도 된다 하지만 
 * const는 할당이 무조건 이루어 져야 한다.
 */