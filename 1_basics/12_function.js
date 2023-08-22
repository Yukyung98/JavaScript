/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10/2 % 3 스트리으로 변환해서
 * 변환받고 싶다면 어떻게 해야할까?
 */
console.log((2*10/2%3).toString());
console.log((3*10/2%3).toString());
/**
 * DRY
 * D->Don't
 * R->Repeat
 * Y->Yourself
 */
function calculate(){
    console.log((2*10/2%3).toString());
}

//calculate();

function calculate(number){
    console.log((number*10/2%3).toString());
}
/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);

function multiply(x,y){
    console.log(x*y);
}
multiply(3,2);

function multiply(x,y=10){
    console.log(x*y);
}
multiply(2,4);
multiply(2); // y라는 파라미터에는 값이 안들어가서 기본값인 10이 적용된다.

/**
 * return 받기
 */
console.log('-----------------');
function multiply(x,y){
    return x*y;
}

const res1 = multiply(2,4);
console.log(res1);

const res2 = multiply(4,5);
console.log(res2);

/**
 * Arrow 함수
 * 기능적으로는 완전히 같지는 않다. 
 */
const multiply2 = (x,y)=>{
    return x*y;
}
console.log(multiply2(3,4));
//아래의 코드는 위와 같다.
const multiply3=(x,y) => x*y;
console.log(multiply3(4,5));
// 파라미터가 하나인 경우 괄호 삭제 가능!
const multiply4 = x => x*2;
console.log(multiply4(2));

const multiply5 = x => y => z =>`x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z:${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x,y){
    return x*y;
}
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
    console.log(arguments);
    return x * y * z;
}
console.log('-----------');
console.log(multiplyThree(4,5,6));
// (...arguments)는 무한개의 argument를 받는다.
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b)=>a*b,1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));

//immediately invoked function
(function(x,y){
    console.log(x*y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);