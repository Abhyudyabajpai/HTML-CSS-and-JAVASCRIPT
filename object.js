var user = {
    name : "Tom",
    age : 41,
    sex : "Male",
    Hobby : "Tennis",
    greet : function() {
        console.log("Happy Birthday!");
    }
};
var list = [
   { username : "candice",
    password : "@#12",
}, 
 {
    username : "janice",
    password : "yt74",
}
];
// TO add a new character to user:
// user.favfood = "Sushi";

// We can have list inside an object as vice-versa.

// user.kids :["john","max"]
// user.kids[1]; {accessing list items inside object}
// "max"
 
// list[0].password; {accessing object items inside list}
//"@#12"

// To call the function greet :
// user.greet();