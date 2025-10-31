document.addEventListener("DOMContentLoaded", function () {
  var zones = [
    {
      category: "rides",
      name: "Thunder Coaster",
      image: "assets/img/1.jpeg",
      description: "Brace yourself for loops, turns, and pure adrenaline!",
      thrillLevel: "Extreme",
      ageLimit: "12+",
      maintenance: "Weekly"
    },
    {
      category: "rides",
      name: "Sky Eye Wheel",
      image: "assets/img/2.jpeg",
      description: "Enjoy peaceful spins and amazing park views.",
      thrillLevel: "Mild",
      ageLimit: "All Ages",
      maintenance: "Monthly"
    },
    {
      category: "restaurants",
      name: "Sunset Dine-In",
      image: "assets/img/25.jpeg",
      description: "Delicious food with cozy ambience and great views.",
      cuisine: "Continental & Pakistani",
      hours: "11:00 AM – 10:00 PM",
      rating: "★★★★☆"
    },
    {
      category: "restaurants",
      name: "Snack Plaza",
      image: "assets/img/28.jpeg",
      description: "Quick bites and refreshing drinks for your breaks.",
      cuisine: "Fast Food & Beverages",
      hours: "10:00 AM – 9:00 PM",
      rating: "★★★☆☆"
    },
    {
      category: "entertainment",
      name: "Dream Parade",
      image: "assets/img/43.png",
      description: "A colorful parade full of music and fun.",
      duration: "45 minutes",
      schedule: "Daily at 7:30 PM",
      audience: "Families & Kids"
    },
    {
      category: "entertainment",
      name: "Laser Light Show",
      image: "assets/img/45.png",
      description: "A stunning night show with lights and fireworks.",
      duration: "30 minutes",
      schedule: "Fri–Sun at 8:00 PM",
      audience: "All Ages"
    }
  ];

  var container = document.getElementById("zonesContainer");
  var buttons = document.querySelectorAll(".filter-btn");


  showCards("all");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      var active = document.querySelector(".filter-btn.active");
      if (active) {
        active.classList.remove("active");
      }
      this.classList.add("active");
      var type = this.getAttribute("data-category");
      showCards(type);
    };
  }

  function showCards(type) {
    container.innerHTML = "";
    for (var i = 0; i < zones.length; i++) {
      var z = zones[i];
      if (type === "all" || z.category === type) {
        var info = "";

        if (z.category === "rides") {
          info =
            "<ul>" +
            "<li><b>Thrill Level:</b> " + z.thrillLevel + "</li>" +
            "<li><b>Age Limit:</b> " + z.ageLimit + "</li>" +
            "<li><b>Maintenance:</b> " + z.maintenance + "</li>" +
            "</ul>";
        } else if (z.category === "restaurants") {
          info =
            "<ul>" +
            "<li><b>Cuisine:</b> " + z.cuisine + "</li>" +
            "<li><b>Hours:</b> " + z.hours + "</li>" +
            "<li><b>Rating:</b> " + z.rating + "</li>" +
            "</ul>";
        } else if (z.category === "entertainment") {
          info =
            "<ul>" +
            "<li><b>Duration:</b> " + z.duration + "</li>" +
            "<li><b>Schedule:</b> " + z.schedule + "</li>" +
            "<li><b>Audience:</b> " + z.audience + "</li>" +
            "</ul>";
        }

        var card =
          "<div class='col-lg-4 col-md-6 mb-4'>" +
          "<div class='zone-card'>" +
          "<span class='badge-category'>" + z.category + "</span>" +
          "<img src='" + z.image + "' alt='" + z.name + "'>" +
          "<div class='card-body'>" +
          "<h4>" + z.name + "</h4>" +
          "<p>" + z.description + "</p>" +
          info +
          "</div></div></div>";

        container.innerHTML += card;
      }
    }
  }
});
