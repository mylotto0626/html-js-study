//자바스크립트에서는 readline 모듈을 이용하면 콘솔을 통해 값을 입력 가능
const readline=require("readline")

//readline 모듈 입츌력 객체 생성
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line",function(line){
    console.log(line)
    rl.close() //close가 없으면 입력을 무한히 받음
})
rl.on("close",function(){
    process.exit()
})  