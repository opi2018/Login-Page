function handleOnClick(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    alert(`Hello,${username}`);
}
document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(validate(password,username)){
        alert(`Welcome ,${username}`);
    }else{
        
    }
});
function validate(password,username){
    let ui = document.getElementById("pv");
    if(password.length < 4){
        ui.style.visibility = "visible";
        ui.innerText = "Password length less than 4";
        return false;
    }
    if(!/[a-zA-Z]/.test(password)){
        ui.style.visibility = "visible";
        ui.innerText = "Password doesn't have character";
        return false;
    }
    if(!/\d/.test(password)){
        ui.style.visibility = "visible";
        ui.innerText = "Password doesn't have number";
        return false;
    }
    if(username.length ==0){
        document.getElementById("uv").style.visibility = "visible";
        return false;
    }
    ui.style.visibility = "hidden";
    return true;
}