import Students from "./classStudents";
import University from "./classсUniversity";
import { students } from "./students";

function main () {
    let university = new University('English school');
    university.addStudents(students);
    university.getAllStdudents();
    university.getBestStudents();
    let student = new Students(students[0]);
    console.log(student);
    console.log(Students.id);
    university.addStudent(student);

    console.group(university);
}

main();