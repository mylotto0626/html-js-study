//망한 코드
// let arr08 = [];
// let str = '';

// for(let i=0; i<5; i++){
//     str += '*';
//     arr08.push(str);
//     console.log(str);
// }

// for(let i=(arr08.length)-2; i>=0; i--){
//     console.log(arr08[i]);
// }

// for(let i=0; i<5; i++){ //상단
//     let str='';
//     for(let j=5; j>i; j--){
//         str+=" ";
//     }
//     for(let k=0; k<=i; k++){
//         str+="*";
//     }
//     for(let r=0; r<=i; r++){
//         str+="*";
//     }
//     console.log(str);
// }
// for(let i=5; i>=0; i--){ //상단
//     let str='';
//     for(let j=5; j>i; j--){
//         str+=" ";
//     }
//     for(let k=0; k<=i; k++){
//         str+="*";
//     }
//     for(let r=0; r<=i; r++){
//         str+="*";
//     }
//     console.log(str);
// }

let n=4;

while(n>=-4){
    console.log(' '.repeat(Math.abs(n)/2)+'*'.repeat(5-Math.abs(n)));
    n-=2;
}