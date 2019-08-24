var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
todosLength = todos.length;

// for loop
for (var i=0;i < todos.length ; i++) {
    console.log(todos[i]+ "!");
}
 
//for (var i=0;i< todosLength; i++) {
  //  todos.pop();
//}

//forEach loop

todos.forEach(function(n,i){
    console.log(n,i);
})


// while loop
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++
}
// do while loop

var count2 = 10;
do { console.log(count2);
    count2--;
} while (count2 > 0);