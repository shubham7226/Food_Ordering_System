function formValidation()
{
var email = document.getElementById("email").value;
var pass1 = document.getElementById("psw1").value;
var pass2 = document.getElementById("psw2").value;
var phno = document.getElementById("phno").value;
var uid_len=10;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (email == "") 
{
    alert ("Please enter Email"); 
	return false
}
else if (pass1 == "") 
{
    alert ("Please enter Password"); 
	return false
}
else if (pass2 == "") 
{
    alert ("Please enter Password"); 
	return false
}
else if (phno == "") 
{
    alert ("Please enter Phno"); 
	return false
}
else if (uid_len >10 || uid_len < 10)
{
alert("Number must be length of 10");
phno.focus();
return false;
}
else if(pass1 != pass2){
alert("password must be same!");
return false;
} 
else if (uid_len >10 || uid_len < 10)
{
alert("Number must be length of 10");
phno.focus();
return false;
}
window.location = "index.html"; 
}