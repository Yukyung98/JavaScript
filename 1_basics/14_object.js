/**
 * Object / 객체
 */
//key : value pair
// this는 정의되어 있는 현재 객체를 가리킨다.
let yuJin ={
    name : '안유진',
    group : '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다.`; 
        //this.name = yuJin.name
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name'; // key에 name이라는 값을 넣는다.
console.log(yuJin[key]);
console.log(yuJin.dance()); // 함수이기에 실행을 해야 반환값을 갖는다. 괄호를 열고 닫아야 한다.
console.log('--------------------');
const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';
// key는 []를 이용
const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);
yuJin2['englishName']='An yu Jin'; // 존재하지 않은 키를 넣으면 새로 생긴다.
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);
// const는 변경이 불가능한데 왜 변경이 될까?
// 다음 시간에..!!
/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung={
    name : '장원영',
    group:'아이브',
}
console.log(wonYoung);
//wonYoung={}; //wonYoung은 const이기 때문이다.변경 불가 ->1) 경우
wonYoung['group']='코드팩토리';
console.log(wonYoung); // 객체안의 변수이기 떄문에 가능 ->2)

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung)); // key값들이 어레이로 반환
/**
 * 모든 value 값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진'; // key value 쌍으로 보인다.
const yuJin3={
    name,// name : name 은name의 키 값과 변수의 이름이 같을때 그냥 하나만 입력 가능하다.
};
console.log(yuJin3);
