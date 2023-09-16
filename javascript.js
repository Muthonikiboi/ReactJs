//DESTRUCTURING OBJECTS AND ARRAYS
const student = {
  name: "Joy Kiboi",
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
