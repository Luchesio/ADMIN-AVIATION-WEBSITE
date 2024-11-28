// Sample data in localStorage for Travelers and Tickets
const travelers = {
    "1": { email: "oseghaleoyugbo@gmail.com", phone: "09056035245", name: "OYUGBO" },
    "2": { email: "jane.smith@example.com", phone: "9876543210", name: "Jane Smith" },
    "3": { email: "alice.brown@example.com", phone: "4567891230", name: "Alice Brown" }
  };
  localStorage.setItem("travelers", JSON.stringify(travelers));
  
  // Populate the dropdown with traveler IDs
  function populateTravelerIDs() {
    const idSelect = document.getElementById("id-select");
    const storedTravelers = JSON.parse(localStorage.getItem("travelers"));
  
    for (const id in storedTravelers) {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = `ID ${id} - ${storedTravelers[id].name}`;
      idSelect.appendChild(option);
    }
  }
  
  // Simulate sending email
  function sendEmail(email, message) {
    console.log(`Email sent to ${email} with message: ${message}`);
    document.getElementById("notification-response").textContent = `Email sent to ${email}`;
  }
  
  // Simulate sending SMS
  function sendSMS(phone, message) {
    console.log(`SMS sent to ${phone} with message: ${message}`);
    document.getElementById("notification-response").textContent = `SMS sent to ${phone}`;
  }
  
  // Event listeners for buttons
  document.getElementById("send-email").addEventListener("click", () => {
    const id = document.getElementById("id-select").value;
    const message = document.getElementById("message").value;
    const storedTravelers = JSON.parse(localStorage.getItem("travelers"));
  
    if (storedTravelers[id]) {
      sendEmail(storedTravelers[id].email, message);
    } else {
      alert("Invalid ID selected.");
    }
  });
  
  document.getElementById("send-sms").addEventListener("click", () => {
    const id = document.getElementById("id-select").value;
    const message = document.getElementById("message").value;
    const storedTravelers = JSON.parse(localStorage.getItem("travelers"));
  
    if (storedTravelers[id]) {
      sendSMS(storedTravelers[id].phone, message);
    } else {
      alert("Invalid ID selected.");
    }
  });
  
  // Initialize the page
  window.onload = () => {
    populateTravelerIDs();
  };
  

  // Show loading screen initially
document.body.classList.add("loading");

// Set a timeout to hide the loading screen after 3 seconds (3000 ms)
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.body.classList.remove("loading");
  }, 3000); // 3000 ms = 3 seconds
});