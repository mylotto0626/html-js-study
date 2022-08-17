let a=10;
let b=a++ +1; //b=11 a=11
let c=a-- +1; //c=12 a=10
let d=++a +1; //d=12 a=11
let e=--a +1; //e=11 a=10

console.log(a); //10
console.log(b); //11
console.log(c); //12
console.log(d); //12
console.log(e); //11
