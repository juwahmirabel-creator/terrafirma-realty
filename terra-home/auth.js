/* CLIENT LOGIN */

document
  .getElementById("clientLoginForm")
  ?.addEventListener("submit",
    
    function(e) {
      
      e.preventDefault();
      
      /* GET INPUT VALUES */
      
      let email =
        document.getElementById("clientEmail").value;
      
      let password =
        document.getElementById("clientPassword").value;
      
      /* SIMPLE VALIDATION */
      
      if (email && password) {
        
        /* SAVE USER ROLE */
        
        localStorage.setItem(
          "userRole",
          "client"
        );
        
        /* REDIRECT */
        
        window.location.href =
          "index.html";
        
      }
      
    });
    
    /* CLIENT SIGNUP */

document
  .getElementById("clientSignupForm")
  ?.addEventListener("submit",
    
    function(e) {
      
      e.preventDefault();
      
      /* GET VALUES */
      
      let name =
        document.getElementById("clientName").value;
      
      let email =
        document.getElementById("signupEmail").value;
      
      let password =
        document.getElementById("signupPassword").value;
      
      /* SAVE USER DATA */
      
      let clientData = {
        
        name: name,
        email: email,
        password: password
        
      };
      
      /* STORE IN LOCAL STORAGE */
      
      localStorage.setItem(
        
        "clientAccount",
        
        JSON.stringify(clientData)
        
      );
      
      /* SUCCESS MESSAGE */
      
      alert("Account created successfully!");
      
      /* REDIRECT */
      
      window.location.href =
        "client-login.html";
      
    });
    
    /* AGENT LOGIN */

document
  .getElementById("agentLoginForm")
  ?.addEventListener("submit",
    
    function(e) {
      
      e.preventDefault();
      
      /* GET VALUES */
      
      let email =
        document.getElementById("agentEmail").value;
      
      let password =
        document.getElementById("agentPassword").value;
      
      /* SIMPLE LOGIN CHECK */
      
      if (email && password) {
        
        /* SAVE ROLE */
        
        localStorage.setItem(
          "userRole",
          "agent"
        );
        
        /* REDIRECT TO DASHBOARD */
        
        window.location.href =
          "agent-dashboard.html";
        
      }
      
    });
    
    /* AGENT SIGNUP */

document
.getElementById("agentSignupForm")
?.addEventListener("submit",

function(e){

e.preventDefault();

/* GET VALUES */

let agentData = {

name:
document.getElementById("agentName").value,

email:
document.getElementById("agentSignupEmail").value,

phone:
document.getElementById("agentPhone").value,

company:
document.getElementById("agentCompany").value,

license:
document.getElementById("agentLicense").value,

address:
document.getElementById("agentAddress").value,

password:
document.getElementById("agentSignupPassword").value

};

/* SAVE DATA */

localStorage.setItem(

"agentAccount",

JSON.stringify(agentData)

);

/* SUCCESS */

alert("Agent registered successfully!");

/* REDIRECT */

window.location.href =
"agent-login.html";

});