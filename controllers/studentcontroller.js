const Student = require('../models/student');
async function addStudent(req,res) {
    try {
        console.log(req.body,'req.body')
        let student = new Student(req.body);
        await student.save(); // async method
        console.log("data saved successfully...")
        res.end("added..")
    }catch(err) {
        console.log(err)
    }
}
async function getStudents(req,res) {
    try{
       let students = await Student.find({}) ;
       console.log (students,'student');
       res.send(students)
    }catch(err) { 

    }
}
async function getStudentByRollNo(req,res) {
    try{
        let rollNo = pasrseInt(req.params.rollNo);
        let student = await Student.findOne({ rollNo:rollNo });
        console.log(student,'student');
        res.send(student)
    }catch(err){
      console.log(err,'err')
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentByRollNo

}