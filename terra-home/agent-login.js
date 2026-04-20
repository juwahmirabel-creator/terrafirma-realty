function loginAgent(){

let email =
document.getElementById("agentLoginEmail").value.trim();

let password =
document.getElementById("agentLoginPassword").value.trim();

let savedAgent =
JSON.parse(localStorage.getItem("agentAccount"));

if(!savedAgent){

alert("No agent account found. Please register.");

return;

}

if(
email === savedAgent.email &&
password === savedAgent.password
){

alert("Agent login successful! 🎉");

window.location.href =
"agent-dashboard.html";

}
else{

alert("Incorrect email or password");

}

}