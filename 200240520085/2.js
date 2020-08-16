

function submitdata(){
    var Uname = document.querySelector("#username").value;
    if(Uname != ""){
        alert("Username is valid");
    }
    else{
        alert("Username Must filed");
    }

    var pass = document.querySelector("#password").value;
    if(pass != ""){
        alert("Password is valid");
    }
    else{
        alert("Password Must filed");
    }

    var box = document.querySelector("#Box").cloneNode(true);
    box.textContent = "Username -" Uname "+" "password - " pass;

    box.textContent = "Username is: "+Uname+" Password is: "+pass;

    box.insertBefore(box,Box.firstchild);

    document.querySelector("#username").value="";
    document.querySelector("#password").value="";
}
