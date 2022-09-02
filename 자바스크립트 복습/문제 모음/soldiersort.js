let soldier=[1,34,37,23,12,7,13,3,8,21,45,31]
let count=0;

soldier.sort(
    function compare(a,b){
        return a-b;
    }
);

count=soldier.length;

console.log(soldier);
console.log(count);



