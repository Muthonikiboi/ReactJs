//DESTRUCTURING OBJECTS AND ARRAYS
const student = {
  name: "Joy Kiboi",
  years: 13,
  RegNo: "e234hdbhek",
  course: "Bsc IT",
  Hobbies: {
    eating: "Pork",
    travelling: "airTravels",
    coding: "javascript",
  },
};

//const myname = student.name;
//const reg = student.RegNo;
const { name, RegNo, course } = student;
const {
  Hobbies: { eating },
} = student;
console.log(eating);
console.log(name);
console.log(RegNo);
console.log(course);

//destructuting in arrays
const fruits = ["apples", "mango", "pinapple", "berrie", "banana", "orange"];
const [fruit1, , fruit2, ...rest] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(rest);

//Having an array with objects
const courses = {
  course1: "Engineering",
  course2: ["BBIT", "BIT", "CS"],
};
//access the second element of the array inside an object
const {
  course2: [, loc],
} = courses;
console.log(loc);
//how to use spread to add an element in an array
const newfruit = [...fruits, "oranges"];
newfruit;

//tamplete literals
const bookTitle = "MOANA";
const statement = `This book is called ${bookTitle}`;
console.log(statement);

//using split in template literals
const statement2 = `this book is called ${bookTitle.split("->")[0]}`;
statement2;

//ternaries (if else statements)
const years = 13;
const isJoy = years >= 13 ? "Joy is still young" : "Joy is old";
isJoy;
console.log(`It is said that ${isJoy}`);

//using ternaries in template literals
console.log(`${isJoy}. she is ${years <= 20 ? " a baby" : " an adult"}`);

//Javascript arrow functions
//with no arguments
let hername = () => console.log("Joy Kiboi");
hername();

//with one argument
let bbg = (x) => console.log(x);
bbg("Lilian Kiboi");

//with muliple arguments
let calc = (a, b, c) => {
  let result = a * b + c;
  return result;
};
let result1 = calc(2, 4, 9);
console.log(result1);

//Optional chaining & nullish coalescing operator
const school = {
  schName: "Dedan Kimathi University of Technology",
  location: "Nyeri",
  levels: ["Bsc", "Diploma", "Masters"],
  courses: {
    science: "Computer Science",
    engineering: "Civil Engineering",
  },
};

const schoolCourse = school.courses?.engineering;
console.log(schoolCourse);
//for a value missing in the object
const studentsNo = school.studentsNumber?.male;
console.log(studentsNo);
//using nullish coalescing operator
const studentNo = school.studentsNumber?.female ?? 4567;
console.log(studentNo);
