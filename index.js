let student = {
    name:"Arun",
    age:25,
    course:"MERN",
    topics:[ "html", "css", "Js"],
}

let res =JSON.stringify(student);
console.log(typeof res);
console.log(res);

let res1 = JSON.parse(res);
console.log(res1);
console.log(typeof res1);