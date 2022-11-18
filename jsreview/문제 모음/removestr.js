//1. 문자열을 입력받는다
//2. 유니코드를 이용해서 문자열을 제외한 숫자만 출력되게 한다
//* 유니코드는 48-57번까지 있다

function nostr(str){
    let num="" //문자열
    for(let i=0; i<str.length; i++){
        if(str[i].charCodeAt(0)<=57&&str[i].charCodeAt(0)>=48){
            num+=str[i];
        }
    }
    return num;
}

const readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let v=""

r1.on("line",function(line){
    v=line;
    r1.close();
}).on("close",function(){
    console.log(nostr(v));
});