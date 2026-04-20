function registerClient() {
  
  let name =
    document.getElementById("name").value;
  
  let email =
    document.getElementById("email").value;
  
  let password =
    document.getElementById("password").value;
  
  /* CHECK EMPTY */
  
  if (name === "" || email === "" || password === "") {
    
    alert("Please fill all fields");
    
    return;
    
  }
  
  /* SAVE ACCOUNT */
  
  let clientAccount = {
    
    name: name,
    email: email,
    password: password
    
  };
  
  localStorage.setItem(
    "clientAccount",
    JSON.stringify(clientAccount)
  );
  
  alert("Account created successfully! 🎉");
  
  /* MOVE TO LOGIN */
  
  window.location.href =
    "client-login.html";
  
}