const readline=require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on("line",function(line){
    if(line>=50){
        console.log('우산을 챙긴다');
    }else{
        console.log('그냥 간다');
    }
    r1.close();
})
