/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('------');
for(let i=10;i>0;i--){
    console.log(i);
}
console.log('------');
for(let i =0;i<3;i++){
    for(let j=3;j>0;j--){
        console.log(i,j);
    }
}
console.log('------');
//*을 이용해서 6x6의 정사각형을 출력해라
let square = '';
let side =6;

for(let i =0;i<side;i++){
    for(let j=0;j<side;j++){
        square +='*';
    }
    square += '\n';
}
console.log(square);

/**
 * for..in
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}
// 오브젝트의 경우는 키값이 받는다. 
for(let key in yuJin){
    console.log(key);
}
// 어레이의 경우 인덱스 값이 나온다. 
const iveMembersArray=['안유진','가을','레이','장원영','리즈','이서'];
for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}
/**
 * for...of 
 * 리스트(배열)에서만 가능
 * 배열에 저장된 값들이 나온다.
 */

for(let value of iveMembersArray){
    console.log(value);
}

/**
 * while
 */
let number =0;
while(number < 10){
    number++;
}
console.log(number);
/**
 * do..while
 * 먼저 do를 실행하고 조건에 해당되는지 판단.
 */
number =0;
do{
    number ++;
}while(number <10);
console.log(number);

/**
 * break
 */
console.log('------------');
for(let i=0;i<10;i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log('------------');
number =0;
while(number <10){
    if(number === 5){
        break;
    }
    number++;
    console.log(number);
}
/**
 * continue
 * continue는 스킵을 한다. 즉 밑에 있는 
 * 코트들을 싹다 무시 
 */
console.log('------------');
for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}
console.log('------------');
number =0;
while(number <10){
    number++;
    if(number ===5){
        continue;
    }
    console.log(number);
}