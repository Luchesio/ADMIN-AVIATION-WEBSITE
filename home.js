// // Add JavaScript for extra functionality, e.g., making the sidebar collapsible
// // This can be used to toggle the visibility of the sidebar on mobile view or change styles dynamically
// const sidebar = document.getElementById('sidebar');
// const toggleButton = document.getElementById('toggle-sidebar'); // Add a toggle button in HTML

// toggleButton.addEventListener('click', function() {
//   sidebar.classList.toggle('collapsed');
// });
// Function to update the content of the paragraph based on the time of day
// function updateGreeting() {
//     const paragraph = document.getElementById("goodday");
//     const currentHour = new Date().getHours(); 
  
    
//     if (currentHour >= 6 && currentHour < 12) {
//       paragraph.textContent = "Good Morning";
//     } else if (currentHour >= 12 && currentHour < 18) {
//       paragraph.textContent = "Good Afternoon";
//     } else {
//       paragraph.textContent = "Good Evening";
//     }
//   }
function updateGreeting() {
  const paragraph = document.getElementById("goodday");
  const currentHour = new Date().getHours(); // Get the current hour (0-23)
  const savedLanguage = localStorage.getItem("language") || "en"; // Get saved language, default to 'en'

  // Greeting messages in different languages
  const greetings = {
    en: {
      morning: "Good Morning",
      afternoon: "Good Afternoon",
      evening: "Good Evening"
    },
    es: {
      morning: "Buenos Días",
      afternoon: "Buenas Tardes",
      evening: "Buenas Noches"
    },
    fr: {
      morning: "Bonjour",
      afternoon: "Bon Après-midi",
      evening: "Bonsoir"
    },
    de: {
      morning: "Guten Morgen",
      afternoon: "Guten Tag",
      evening: "Guten Abend"
    }
  };

  // Determine the greeting based on the hour
  let greeting = "";
  if (currentHour >= 6 && currentHour < 12) {
    greeting = greetings[savedLanguage].morning;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = greetings[savedLanguage].afternoon;
  } else {
    greeting = greetings[savedLanguage].evening;
  }

  // Update the paragraph with the appropriate greeting in the selected language
  paragraph.textContent = greeting;
}

  
  // Call the function immediately to set the greeting
  updateGreeting();
  setInterval(updateGreeting, 60000);

  document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const targetNumber = 250; // Target count
    let currentNumber = 0;
  
    const increment = targetNumber / 50; // Adjust for smoothness of the animation
    const intervalTime = 20; // Time in milliseconds between increments
  
    const countUp = setInterval(() => {
      currentNumber += increment;
  
      if (currentNumber >= targetNumber) {
        counterElement.textContent = `${Math.round(targetNumber)}+`;
        clearInterval(countUp); // Stop the animation
      } else {
        counterElement.textContent = `${Math.round(currentNumber)}+`;
      }
    }, intervalTime);
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const counters = [
      { id: "counter2", targetNumber: 15000 },
      { id: "counter3", targetNumber: 8500 }
    ];
  
    counters.forEach(({ id, targetNumber }) => {
      const counterElement = document.getElementById(id);
      let currentNumber = 0;
  
      const increment = targetNumber / 100; // Adjust increment for smoother animation
      const intervalTime = 20; // Time in milliseconds between increments
  
      const countUp = setInterval(() => {
        currentNumber += increment;
  
        if (currentNumber >= targetNumber) {
          counterElement.textContent = `${Math.round(targetNumber).toLocaleString()}+`;
          clearInterval(countUp); // Stop the animation
        } else {
          counterElement.textContent = `${Math.round(currentNumber).toLocaleString()}+`;
        }
      }, intervalTime);
    });
  });
  