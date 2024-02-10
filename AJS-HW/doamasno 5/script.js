function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    return console.log(`${this.firstName} ${this.lastName}`);
  };

  this.getStudentAcademy = function(student) {
    return console.log(`${student.academyName}`);;
  };
}

function Student(firstName, lastName, age, academyName, studentId) {
Object.setPrototypeOf(this, new Person(firstName, lastName, age));
this.academyName = academyName;
this.studentId = studentId;
this.study = function() {

    console.log(`The student ${this.firstName} is studying in ${this.academyName}`);

}

}


const student1 = new Student('filip', 'nikolov', 19, 'Qinshift', 'BCA111')

student1.study()// will print The student filip is studying in Qinshift


student1.getStudentAcademy(student1)// will print the acadamyname of student1

console.log(student1);

////////////////////////////////////////////


function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth){

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        return console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}



console.log(`-------design student-------`);

const student2 = new DesignStudent('peter', 'griffin', 44, 'Brainster', 'BCC222', true)
console.log(student2);
student2.attendAdobeExam()




console.log(`-------code student-------`);

// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject,hasGroupProject) {

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))

    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function(type) {
        if (type === 'individual') {
            console.log(`The student ${this.firstName} is working solo on this project.`);
            this.hasIndividualProject = true;
        } else {
            console.log(`The student ${this.firstName} is working with a group on this project.`);
            this.hasGroupProject = true;
        }
    };

}

const student3 = new CodeStudent('hommer', 'simpson',33, 'Hogwarts', 'BBB999',false, false)
console.log(student3);

student3.doProject('individual');
console.log(student3);

student3.doProject('group');
console.log(student3);



console.log(`-------network student-------`);


function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart){

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))

    this.academyPart = academyPart;
    this.attendCiscoExam = function() {
        return console.log(`the student ${this.firstName} is doing a cisco exam!`);
    }

}

const student4 = new NetworkStudent('emilia', 'flowers', 18 ,'Semos' ,'CCC998', 2)
console.log(student4);

student4.attendCiscoExam()
