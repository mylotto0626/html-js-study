//business,statistics,visual design
let student = [
    {
        name: 'john',
        studentId: 2022124435,
        major: 'business'
    },
    {
        name: 'Alice',
        studentId: 2022123242,
        major: 'statistics'
    },
    {
        name: 'Max',
        studentId: 2022131244,
        major: 'visual design'
    }
]

//1. Alice를 찾아 전공을 'computer science'로 바꾸기
for (let i = 0; i < student.length; i++) {
    if (student[i].name == 'Alice') {
        student[i].major='computer science';
    }
}

//콘솔에 student 정보를 출력해 제대로 수정되었는지 확인
for(let j=0; j<student.length; j++){
    console.log(student[j].name,"'s major : ",student[j].major);
}