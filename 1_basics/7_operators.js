/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺼셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 * */
console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%3);
console.log('-----------');

console.log(10*(10+10));

/**
 * 증가와 감소
 */
let number =1;

number++;
console.log(number);

number --;
console.log(number);
console.log('---------');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);
result = number ++; // res가 num가 증가되기전 값을 저장했다.
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);
/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면?
 */
console.log('---------');
let sample = '99';
console.log(+sample); // 타입변화니 이루어짐
console.log(typeof +sample);
console.log(sample); 
console.log(typeof sample);

sample = true; // 1
console.log(+sample);
console.log(typeof +sample);

sample = false; // 0
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자(assginment operator) 계산한다음에 다시 값을 저장
 */
number =100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *=10;
console.log(number);

number /=10;
console.log(number);

number %=10;
console.log(number);
console.log('---------');
/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5'); // 변환하면 그대로 5 여서
console.log(0 == ''); // 타입을 무시한다.
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
// === 이면 타입까지 고려한다.
console.log( 5 === 5);
console.log(5 === '5'); 
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
// 다르다
console.log('---------');
console.log(5 != 5);
console.log(5 != '5'); 
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log('---------');
console.log( 5 !== 5);
console.log(5 !== '5'); 
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
/**
 * 대소 관계 비교 연산자
 */
console.log('---------');
console.log(100>1);
console.log(100<1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자(ternary operator)
 * ?를 기준으로 조건을 
 * :를 기준으로 왼쪽은 true 오른쪽은 false
 */
console.log('---------');
console.log(10 > 0 ? '10이 0 보다 크다': '10이 0보다 작다');
/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */
console.log('---------');
// && 조건은 모두 treu 여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false); 
// || 조건은 둘 중 하나가 ture 여야 한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('---------');
console.log(10>1 && 20>2);
console.log(10<1 && 20>2);
console.log(10<1 && 20<2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축 평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log('---------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');
console.log('---------');
console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('---------');
/**
 * 지수 연산자 
 */
console.log(2**2);
console.log(10**3);

/**
 * null 연산자 
 * ??은 좌측값이 null이면 우측 값을 출력하라
 */
let name;
console.log(name);
name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브'; // name에 이미 코드팩토리가 저장됐다.
console.log(name);

let name2;
name2??='코드 팩토리';
console.log(name2);