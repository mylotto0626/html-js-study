let words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

words.splice(4,2); //index 4-5 삭제 . ['i', 'have', 'a', 'pen','pineapple', 'i', 'have', 'an', 'apple', 'pen']
words.splice(5,3); //index 5-7 삭제 . ['i', 'have', 'a', 'pen','pineapple','apple', 'pen']

let sentence=words.join(' '); //join(). splice 해서 새로 만들어진 배열을 문장으로 합침

let result=sentence.match(/p/g); //join한 배열 전체에서 p 찾기

if(result!=null){
    console.log(result.length);
    console.log(sentence); 
}

   