//1. 임의의 길이에 문자열을 입력받는다
//2. 문자열에 있는 '촉촉한 초코칩' 횟수를 찾는다.
//문자열.include();을 활용한다

const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on("line",(x)=>{
   if(x.includes('촉촉한 초코칩')){
    let r=/촉촉한 초코칩/g;
    let t=x.match(r).length;
    console.log(t);
   }else{
    console.log("not found");
   }
});

r1.on("close",()=>{
    process.exit();
});

