


function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = []; 
    this.subjects = [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;
  
    this.printStudents = function() {
      this.students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
    };
  
    this.printSubjects = function() {
      this.subjects.forEach(subject => console.log(subject.title));
    };
  }
  
 
  function Subject(title, numberOfClasses = 10, isElective = false, academy, students) {
    this.title = title;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;
    this.academy = academy;
    this.students = []; 
  
    this.overrideClasses = function(newNumber) {
      this.numberOfClasses = newNumber;
    };
  }
   
  
  function Student(firstName, lastName, age, completedSubjects, academy, currentSubject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null; 
    this.currentSubject = null; 
  
    this.startAcademy = academy => {
        this.academy = academy;
        academy.students.push(this); 
      };
    
      this.startSubject = subject => {
        this.currentSubject = subject;
        subject.students.push(this); 
      };
    }
  

    const myAcademy = new Academy("Qinshift", new Student(), new Subject(), '2023-17-10', '2024-20-10', 9);




    const subject1 = new Subject("HTML",15, true , new Academy(myAcademy), Student, 7);
    const subject2 = new Subject("CSS",15, true , new Academy(myAcademy), new Student, 7);

    const subject3 = new Subject("Javascript",15, true , new Academy(myAcademy), new Student, 7);
    const subject4 = new Subject("Advanced Javascript",15, true , new Academy(myAcademy), new Student, 7);

    
    



    
    const student1 = new Student("stefan", "stefanoski", 20,0,);

    const student2 = new Student("nikola", "nikolaoski", 80 );
    const student3 = new Student("petar", "petaroski", 40 );
    const student4 = new Student("milan", "milanoski", 7 );
    


    student1.startAcademy(myAcademy);
    student1.startSubject(subject1);

    // student2.startAcademy(myAcademy);
    // student3.startAcademy(myAcademy);
    // student4.startAcademy(myAcademy);


    
    
   
    console.log(myAcademy);
    console.log(subject1);
    console.log(student1);
    
  

