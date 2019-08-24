var database = [
        { 
            username : "Abhyudya",
            password : "cool1"
        
        }
    ];

    var newsfeed = [
        {  
            username : "Tom",
            timeline: "Off to Italy"
        }, 
        {
            username : "Jaine",
            timeline : "Learning new skill -Swimming"
        }
    ];

    var userNamePrompt = prompt("Enter your name :");
    var passwordPrompt = prompt("Enter your passcode");
    
    function signIn(user,pass) {
        if (user === database[0].username &&
             pass === database[0].password) {
                console.log(newsfeed); 
             }
             else {
                 alert("Sorry wrong credentials!");
             }
    }
    signIn(userNamePrompt,passwordPrompt);