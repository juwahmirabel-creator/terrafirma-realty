function loginClient() {
  
  let email =
    document.getElementById("email").value;
  
  let password =
    document.getElementById("password").value;
  
  /* GET SAVED ACCOUNT */
  
  let savedUser =
    JSON.parse(localStorage.getItem("clientAccount"));
  
  if (savedUser) {
    
    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      
      alert("Login successful! 🎉");
      
      /* GO TO MAIN WEBSITE */
      
      window.location.href =
        "index.html";
      
    }
    else {
      
      alert("Incorrect email or password");
      
    }
    
  }
  else {
    
    alert("No account found. Please sign up.");
    
  }
  
}