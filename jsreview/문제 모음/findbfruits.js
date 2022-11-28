let fruits=['apple', 'banana', 'orange', 'blueberry', 'strawberry'];
let sum=0;

for(let i=0; i<fruits.length; i++){
    if(fruits[i].indexOf('b')==0){
      sum++;
    }
}   

console.log("b로 시작하는 과일 개수는 ",sum,"개");