//소수 : 1과 자기 자신을 약수로 가지는 수
//1,3,5,7,11,13......
//
function isPrime(n){
    let divisor=2;
    if(n==1){
        return false;
    }
    while(n>divisor){
        if(n%divisor===0){
            return false;
        }else{
            divisor++;
        }
    }
    return true;
}

for(let i=1; i<=10; i++){
    console.log(i,isPrime(i));
}
