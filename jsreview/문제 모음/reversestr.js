//자바스크립트 문자열 거꾸로 출력
function reverse(str){
    var reverseStr="";
    
    for(let i=str.length-1; i>=0; i--){
        reverseStr=reverseStr+str.charAt(i);
    }
    return reverseStr;
}

console.log(reverse("nice"));
