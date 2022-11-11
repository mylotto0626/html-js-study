function add(a,b){
    return a+b;
}

let sum=function(a,b){
    return a-b;
}

const hi=()=>{return "안녕하세요"}

let hi2=user=>console.log(user+"님 안녕하세요");

let add2=(a,b)=>a+b;

//함수 실행 코드
console.log(add(20,10)); //출력값 : 30

let sumResult=sum(20,10);
console.log(sumResult); // 출력값 : 10

console.log(hi()); //출력 : 안녕하세요

hi2("홍길동"); // 출력 : 홍길동님 안녕하세요

console.log(add2(20,30)); //출력 : 50
