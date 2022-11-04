function reverse(str){
    var reverseStr="";
    
    for(let i=str.length-1; i>=0; i--){
        reverseStr=reverseStr+str.charAt(i);
    }
    return reverseStr;
}

console.log(reverse("nice"));
