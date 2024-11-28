// Script for managing basic functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("Aviation Project Loaded");
  });
  
  // Example: Display list of flights
  function showFlights() {
    const flights = [
      { id: 1, status: "On Time", destination: "New York" },
      { id: 2, status: "Cancelled", destination: "London" },
      { id: 3, status: "Delayed", destination: "Tokyo" },
    ];
  
    const flightsList = document.getElementById("flights-list");
    flightsList.innerHTML = `
      <table border="1" style="width:100%; margin-top: 20px;">
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Destination</th>
        </tr>
        ${flights
          .map(
            (flight) => `
          <tr>
            <td>${flight.id}</td>
            <td>${flight.status}</td>
            <td>${flight.destination}</td>
          </tr>
        `
          )
          .join("")}
      </table>
    `;
  }
  
  // Set a timeout to hide the loading screen after 3 seconds (3000 ms)
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.body.classList.remove("loading");
  }, 3000); // 3000 ms = 3 seconds
});