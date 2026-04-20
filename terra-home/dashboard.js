/* TOGGLE FORM */

function toggleForm() {
  
  let form =
    document.getElementById("propertyForm");
  
  if (form.style.display === "none") {
    
    form.style.display = "block";
    
  }
  else {
    
    form.style.display = "none";
    
  }
  
}

/* LOAD PROPERTIES */

window.onload = function() {
  
  displayProperties();
  
  loadProfile();
  
}

/* ADD PROPERTY */

function addProperty() {
  
  let title =
    document.getElementById("propertyTitle").value;
  
  let location =
    document.getElementById("propertyLocation").value;
  
  let price =
    document.getElementById("propertyPrice").value;
  
  let size =
    document.getElementById("propertySize").value;
  
  let property = {
    
    title: title,
    location: location,
    price: price,
    size: size
    
  };
  
  let properties =
    JSON.parse(localStorage.getItem("properties")) || [];
  
  /* CHECK IF EDITING */
  
  if (editIndex !== null) {
    
    properties[editIndex] = property;
    
    editIndex = null;
    
  }
  else {
    
    properties.push(property);
    
  }
  
  localStorage.setItem(
    
    "properties",
    
    JSON.stringify(properties)
    
  );
  
  /* CLEAR FORM */
  
  document.getElementById("propertyTitle").value = "";
  document.getElementById("propertyLocation").value = "";
  document.getElementById("propertyPrice").value = "";
  document.getElementById("propertySize").value = "";
  
  /* HIDE FORM */
  
  document.getElementById("propertyForm")
    .style.display = "none";
  
  /* REFRESH */
  
  displayProperties();
  
}
  
  /* CREATE OBJECT */
  
  let property = {
    
    title: title,
    location: location,
    price: price,
    size: size
    
  };
  
  /* GET EXISTING */
  
  let properties =
    JSON.parse(localStorage.getItem("properties")) || [];
  
  /* ADD NEW */
  
  properties.push(property);
  
  /* SAVE */
  
  localStorage.setItem(
    
    "properties",
    
    JSON.stringify(properties)
    
  );
  
  /* RESET */
  
  document.getElementById("propertyForm").reset;
  
  /* DISPLAY */
  
  displayProperties();
  


/* DISPLAY PROPERTIES */

function displayProperties() {
  
  let list =
    document.getElementById("propertyList");
  
  list.innerHTML = "";
  
  /* GET DATA */
  
  let properties =
    JSON.parse(localStorage.getItem("properties")) || [];
  
  /* LOOP */
  
  properties.forEach(function(property, index) {
    
    let card =
      document.createElement("div");
    
    card.classList.add("property-card");
    
    card.innerHTML = `

<h3>${property.title}</h3>

<p>📍 ${property.location}</p>

<p>💰 ${property.price}</p>

<p>📏 ${property.size}</p>

<div class="property-actions">

<button 
class="edit-btn"
onclick="editProperty(${index})">

Edit

</button>

<button 
class="delete-btn"
onclick="deleteProperty(${index})">

Delete

</button>

</div>

`;
    
    list.appendChild(card);
    
  });
  
}

/* DELETE PROPERTY */

function deleteProperty(index) {
  
  let properties =
    JSON.parse(localStorage.getItem("properties"));
  
  properties.splice(index, 1);
  
  localStorage.setItem(
    
    "properties",
    
    JSON.stringify(properties)
    
  );
  
  displayProperties();
  
}

/* EDIT PROPERTY */

let editIndex = null;

function editProperty(index) {
  
  let properties =
    JSON.parse(localStorage.getItem("properties"));
  
  let property = properties[index];
  
  /* SHOW FORM */
  
  document.getElementById("propertyForm")
    .style.display = "block";
  
  /* LOAD VALUES INTO FORM */
  
  document.getElementById("propertyTitle").value =
    property.title;
  
  document.getElementById("propertyLocation").value =
    property.location;
  
  document.getElementById("propertyPrice").value =
    property.price;
  
  document.getElementById("propertySize").value =
    property.size;
  
  /* SAVE INDEX */
  
  editIndex = index;
  
}

/* LOAD PROFILE */

function loadProfile() {
  
  let agentData =
    JSON.parse(localStorage.getItem("agentAccount"));
  
  if (agentData) {
    
    document.getElementById("profileName")
      .textContent = agentData.name;
    
    document.getElementById("profileEmail")
      .textContent = agentData.email;
    
    document.getElementById("profilePhone")
      .textContent = agentData.phone;
    
    document.getElementById("profileCompany")
      .textContent = agentData.company;
    
    document.getElementById("profileAddress")
      .textContent = agentData.address;
    
  }
  
}

/* TOGGLE PROFILE FORM */

function toggleProfileForm() {
  
  let form =
    document.getElementById("profileForm");
  
  if (form.style.display === "none") {
    
    form.style.display = "block";
    
  }
  else {
    
    form.style.display = "none";
    
  }
  
}

/* SAVE PROFILE */

function saveProfile() {
  
  let agentData =
    JSON.parse(localStorage.getItem("agentAccount"));
  
  agentData.name =
    document.getElementById("editName").value;
  
  agentData.phone =
    document.getElementById("editPhone").value;
  
  agentData.company =
    document.getElementById("editCompany").value;
  
  agentData.address =
    document.getElementById("editAddress").value;
  
  localStorage.setItem(
    
    "agentAccount",
    
    JSON.stringify(agentData)
    
  );
  
  loadProfile();
  
  alert("Profile updated!");
  
}