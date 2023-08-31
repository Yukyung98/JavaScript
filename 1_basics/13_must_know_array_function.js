/**
 * Array Methods
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서,',
];
console.log(iveMembers);

//push() : array 맨 끝에 item 추가, 추가된 형태로 반환
console.log(iveMembers.push('코드 팩토리')); // 새로운 길이 출력
console.log(iveMembers);
console.log('-----------------------');
//pop() : 끝의 값을 삭제
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('-----------------------');
//shift() : 첫번째 값을 삭제
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('-----------------------');
//unshift() : 배열 맨 앞의 값 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
//splice() : 첫 번째 : 어떤 인덱스 부터, 두 번째 : 몇개 삭제 할것인지
console.log('-----------------------');
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('-----------------------');
 iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);
console.log('-----------------------');
//concat() : 새로운 array를 만들어서 반환해준다. 원래 array는 변경 x
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
//slice() :  밑의 예로는 0번 인덱스부터 2번 인덱스 까지 잘라온다
console.log(iveMembers.slice(0, 3)); // 새로운 array를 반환
console.log(iveMembers);
console.log('-----------------------');
//spread operator ...array이름 은 array의 모든 내용이 복붙된다.
let iveMembers2 =[
    ...iveMembers,
]; // 메모리 공간이 다른 완전히 새로운 array가 생긴다.
console.log(iveMembers2);
let iveMembers3=[
    iveMembers,
];
console.log(iveMembers3);

console.log('-----------');
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
console.log([
    ...iveMembers,
]===iveMembers);

//join() : 모든 값들을 string으로 묶을 때 사용된다.
console.log(iveMembers.join()); // , 기준으로 string이 된다.
console.log(iveMembers.join('/')); // /로 값들이 붙는다.
console.log(iveMembers.join(', '));

//sort() : 정렬
// 오름차순
iveMembers.sort();
console.log(iveMembers);
// 내림차순
console.log(iveMembers.reverse());

let numbers=[
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);
// a,b를 비교했을떄
// 1) a를 b보다 나중에 정렬하려면(뒤에 두려면)0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0 보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a>b ? 1: -1;
});
console.log(numbers); 
numbers.sort((a,b)=>a>b?-1:1);
console.log(numbers);

//map() : 모든 어레이의 값들을 순회하면서 각각의 값들을 변형시킨다.
// 새로운 어레이를 반환해준다.
console.log('----------------------');
console.log(iveMembers.map((x)=>x))
console.log(iveMembers.map((x)=>`아이브 : ${x}`));

console.log(iveMembers.map((x)=>{
    if(x === '안유진'){
        return `아이브 : ${x}`;
    } else{
        return x;
    }
}));
console.log(iveMembers);

//filter() : 모든 값을 순회하면서 true인 모든 값들 찾아줌
numbers = [1,8,7,6,3];
console.log(numbers.filter((x) => x%2 === 0));
//find() : true인 첫번째 값만 반환해준다.
console.log(numbers.find((x)=> x%2 === 0));
//findIndex() : find와 같은데 index를 반환해준다.
console.log(numbers.findIndex((x)=> x%2 === 0));
//reduce() : (1,2)에서 2는 시작하고 싶은 값 1은 함수를 넣는다.
console.log(numbers.reduce((p,n)=>p+n,0));
/**
 * reduce() 함수란
 * (p,n)=>p+n -> 콜백함수
 * 0 -> 초기값
 * 1,2 ->3
 * 4,5 -> 6
 * 7.. ->
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers 어레이의 첫번째 값인 1이 n에 입력된다.
 * 3. p+n 즉, 0+1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. 어레이의 두번째 값인 8이 n에 입력된다.
 * 6. p+n 즉, 1+8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값 9 가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할때까지 반복
 * 결국 모든 값ㅇ르 다 더한 25가 반환된다.
 */
//