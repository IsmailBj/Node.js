const fs = require('fs')

const getStudents = ()=>{
    let data = fs.readFile('./students.json');
    let parsedData =JSON.parse(data);
    return parsedData.studens
}

const getStudent = id=>{
    let students = getStudents()
    const student = students.find(s=>s.id===id)
    if(!student) throw new Error(`Student with ID: ${id} cant be found in DB`)
    return student
}

const addStudent = student =>{
    let students = getStudents()
    const exists = students.find(s => s.id===student.id)
    if(exists) throw new Error(`The student ${student.name} with ID: ${student.id} already exists in DB`)
    students = [...students,student]
    saveStudent(students)
}
const editStudent = (id,editedStudent) => {
    let students = getStudents()
    let index = students.findIndex(s=>s.id===id)
    if(!index && index!==0) throw new Error('no such student in DB!!!')
    let student = students[index]
    student = {...student, ...editedStudent}
    students[index] = student
    saveStudent(students)
}

const deleteStudent = id =>{
    let students = getStudents()
    students = students.filter(s=>s.id!==id)
    saveStudent(students)
}

const saveStudent = students =>{
    let data = {students}
    let stringifiedData= JSON.stringify(data)
    fs.writeFileSync('./students.json',stringifiedData)
}

module.exports = {
    getStudents,
    addStudent,
    addStudent,
    editStudent,
    deleteStudent
}