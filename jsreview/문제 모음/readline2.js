//자바스크립트 -무한 값 입력 받는 Readline
const readline=require("readline");
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input=[]; //값을 받을 배열 선언

rl.on("line",(line)=>{
    input.push(line); //배열에 입력값 넣기
});

rl.on("close",()=>{
    console.log(input); 
    process.exit(); //프로그램 종료
});
