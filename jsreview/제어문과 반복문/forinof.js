//for in , of 비교 코드
var data=['a','b','c'];

Array.prototype.test=function(){/* */}

//for in
for(i in data){
    console.log(data[i]);  //a,b,c,[Function (anonymous)] 
}

for(i in data){
    console.log(i); //배열의 인덱스 값 출력
}

//for
for(i=0; i<data.length; i++){
    console.log(data[i]);  //출력 test,a,b,c.  
}

for(i=0; i<data.length; i++){
    console.log(i); //출력 0,1,2 배열의 인덱스 값 출력
}

//for of
for(i of data){
    console.log(i); //출력 a,b,c 배열의 value값 출력
}

//결론 
//for of : 배열의 value 값을 출력
//for in : 배열의 index 값을 출력



