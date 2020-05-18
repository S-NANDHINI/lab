
const file = require('fs');

const student = {"name":"jey","department":"ECE","section":"A","age":20}

const jsonstr = JSON.stringify(student);


const jsonstring = '{"name":"jey","department":"ECE","section":"A","age":20}'


const studentjsonarray = [{"name":"jey","department":"ECE","section":"A","age":20},
{"name":"jey","department":"ECE","section":"A","age":20}
]

console.log(JSON.stringify(studentjsonarray));
const studentfromfile = file.readFileSync('student.json');
const stfromfilestring = JSON.parse(studentfromfile);

console.log(stfromfilestring);



