// scripts.js

document.getElementById('traveler-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Generate a flight code (e.g., FL5678)
    const flightCode = "FL" + Math.floor(Math.random() * 10000); // Random flight code
  
    // Store traveler data in localStorage
    let travelers = JSON.parse(localStorage.getItem('travelers')) || [];
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  
    // Add new traveler
    const traveler = { id: travelers.length + 1, name, email, phone };
    travelers.push(traveler);
  
    // Add new ticket entry
    const ticket = { id: traveler.id, flightCode, travelerName: name };
    tickets.push(ticket);
  
    // Save to localStorage
    localStorage.setItem('travelers', JSON.stringify(travelers));
    localStorage.setItem('tickets', JSON.stringify(tickets));
  
    // Redirect to travelers page (or refresh to show updated data)
    alert("Traveler and ticket added successfully!");
    window.location.href = "travelers.html"; // You can adjust the redirection to your desired page
  });
  