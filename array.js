console.log("hello");


let marks = [25, 34, 56, 73, 92, 87]
let mark1 = [2, 4, 7, 9]
// marks.shift();
// marks.unshift(55);    add new element
// marks.splice(0,2)       selected element deleted

// add new Element
// marks.push("codekul");


// delete element
// marks.pop();
let result = marks.concat(mark1);

console.log(result);

// console.log(marks);

const obj = {
    name: "John",
    email: "girivitthaj23@gmail.com",
    skill: ["html", "css", "js", "reactjs", "nodejs", "mongodb"],
    descriptiion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur repellendus blanditiis odio itaque nulla veniam sed qui deserunt, molestias officiis fugiat ipsum quis quibusdam reprehenderit, laborum nobis voluptatibus veritatis?"
};
for (let key in obj) {
    console.log(obj[key]);
    document.write(key + ":" + obj[key] + "<br>");
}
// document.getElementById("obj").innerHTML.value=" + obj";
// console.log(obj);