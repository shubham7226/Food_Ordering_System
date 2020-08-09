var attempt = 3; 
function validate(){
var username = document.getElementById("mail").value;
var password = document.getElementById("psw").value;
if ( username == "abc123@gmail.com" && password == "123"){
alert ("Login successfully");
window.location = "index.html"; 
return false;
}
else{
alert ("Enter correct credentials");	
document.getElementById("mail").value="";
document.getElementById("psw").value="";
}
}