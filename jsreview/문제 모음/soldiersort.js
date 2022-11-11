let soldier=[1,34,37,23,12,7,13,3,8,21,45,31]
let count=0;

soldier.sort(
    function compare(a,b){
        return a-b; //숫자를 비교하기 위함 a-b는 오름차순 정렬, b-a는 내림차순 정렬
    }
); 

count=soldier.length;

console.log(soldier); 
console.log(count);



