//어떤 수 n(자연수)을 입력받았을 때 피보나찌 수열 내 가장 큰 수가 n미만인 배열을 출력
//0번째 항은 0이다.1,1,2,3,5,8....
// 마지막 두 개 인덱스의 원소의 합이 n을 넘어가면 안됨
//(n-1)+(n-2)=n  


let n; //숫자 입력

const e = require('express');
//readline 모듈
const readline = require('readline');
const r1 = readline.createInterface({
    input: r1.stdin,
    output: r1.stdout
});

r1.on("line", function (line) {
    n.parseInt(line);
    r1.close;
}).on("close", function () {
    let fib = []; //배열을 담을 변수

    if (n > 2) {
        fib(0).push; //0번째 항이 0
        fib(1).push; //첫번째 항이 1

        for (let i; i < n; i++) {
            if(fib[i-1]+fib[i-2]<n){
                fib.push(fib[i-1]+fib[i-2]);
            }else{
                break;
            }
        }
    }else if(n==1){
        fib.push(0);
    }
    console.log(fib);

    process.exit();
})

