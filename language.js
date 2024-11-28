// language.js

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
  
    applyLanguage(savedLanguage);
  
    // Function to apply selected language
    function applyLanguage(language) {
      const translations = {
        en: {
          homeTitle: "Welcome to Aerolert's Management System",
          homeDescription: "Aerolert helps aviation professionals streamline their operations, manage flight schedules, and provide exceptional service to travelers.",
          flights: "Flights",
          tickets: "Tickets",
          travelers: "Travelers",
          notifications: "Notifications",
          reports: "Reports",
          help: "Help Center",
          settings: "Settings",
          user: "User",
          managed: "Flights Managed",
          assisted: "Travelers Assisted",
          sent: "Notifications Sent",
          features:"Key Features",
          real:"Real-time Flight Management",
          automated:"Automated Notifications",
          user2:"User-Friendly Reports",
          intuitive:"Intuitive Ticket Booking",
          dashboard: "Dashboard",
          good: "Good morning",
          good: "Good afternoon",
          good: "Good evening",


        },
        es: {
          homeTitle: "Bienvenido al Sistema de Gestión de Aerolert",
          homeDescription: "Aerolert ayuda a los profesionales de la aviación a optimizar sus operaciones, gestionar horarios de vuelos y brindar un servicio excepcional a los viajeros.",
          flights: "Vuelos",
          tickets: "Boletos",
          travelers: "Viajeros",
          notifications: "Notificaciones",
          reports: "Informes",
          help: "Centro de Ayuda",
          settings: "Configuraciones",
          user: "Usuario",
          managed: "Vuelos gestionados",
          assisted: "Viajeros asistidos",
          sent: "Notificaciones enviadas",
          features:"Características clave",
          real:"Gestión de vuelos en tiempo real",
          automated:"Notificaciones automatizadas",
          user2:"Informes fáciles de usar",
          intuitive:"Reserva de boletos intuitiva",
          dashboard: "Tablero",
          good: " Buenos días",
          good: "Buenas tardes",
          good: "Buenas noches",
        },
        fr: {
          homeTitle: "Bienvenue dans le Système de Gestion d'Aerolert",
          homeDescription: "Aerolert aide les professionnels de l'aviation à rationaliser leurs opérations, gérer les horaires des vols et offrir un service exceptionnel aux voyageurs.",
          flights: "Vols",
          tickets: "Billets",
          travelers: "Voyageurs",
          notifications: "Notifications",
          reports: "Rapports",
          help: "Centre d'Aide",
          settings: "Paramètres",
          user: "Utilisateur",
          managed: "Vols gérés",
          assisted: "Voyageurs assistés",
          sent: "Notifications envoyées",
          features:"Caractéristiques principales",
          real:"Gestion des vols en temps réel",
          automated:"Notifications automatisées",
          user2:"Rapports conviviaux",
          intuitive:"Réservation de billets intuitive",
          dashboard: "Tableau de bord",
          good: "Bonjour",
          good: "Bon après-midi",
          good: "Bonsoir",
        },
        de: {
          homeTitle: "Willkommen im Management-System von Aerolert",
          homeDescription: "Aerolert hilft Luftfahrtprofis, ihre Abläufe zu optimieren, Flugpläne zu verwalten und Reisenden außergewöhnlichen Service zu bieten.",
          flights: "Flüge",
          tickets: "Tickets",
          travelers: "Reisende",
          notifications: "Benachrichtigungen",
          reports: "Berichte",
          help: "Hilfezentrum",
          settings: "Einstellungen",
          user: "Benutzer",
          managed: "Verwaltete Flüge",
          assisted: "Unterstützte Reisende",
          sent: "Benachrichtigungen gesendet",
          features:"Hauptmerkmale",
          real:"Echtzeit-Flugverwaltung",
          automated:"Automatisierte Benachrichtigungen",
          user2:"Benutzerfreundliche Berichte",
          intuitive:"Intuitive Ticketbuchung",
          dashboard: "Dashboard",
          good: "Guten Morgen",
          good: "Guten Nachmittag",
          good: "Guten Abend",

        },
      };
  
      const translation = translations[language];
      if (translation) {
        // Update content dynamically
        const elements = {
          homeTitle: document.querySelector("#homeTitle"),
          homeDescription: document.querySelector("#homeDescription"),
          flights: document.querySelector("#navFlights"),
          tickets: document.querySelector("#navTickets"),
          travelers: document.querySelector("#navTravelers"),
          notifications: document.querySelector("#navNotifications"),
          reports: document.querySelector("#navReports"),
          help: document.querySelector("#navHelp"),
          settings: document.querySelector("#navSettings"),
          user: document.querySelector("#navUser"),
          managed: document.querySelector("#idManaged"),
          assisted: document.querySelector("#idAssisted"),
          sent: document.querySelector("#idSent"),
          features: document.querySelector("#idFeatures"),
          real: document.querySelector("#idReal"),
          automated: document.querySelector("#idAutomated"),
          user2: document.querySelector("#idUser"),
          intuitive: document.querySelector("#idIntuitive"),
          dashboard: document.querySelector("#dashboard"),
          good: document.querySelector("#good"),
        };
  
        for (const key in elements) {
          if (elements[key] && translation[key]) {
            elements[key].textContent = translation[key];
          }
        }
      }
    }
  });
  