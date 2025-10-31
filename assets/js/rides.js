document.addEventListener("DOMContentLoaded", function () {
  var rides = [
    {
      type: "thrill",
      name: "Heart-Shaped Roller Coaster Loop",
      image: "assets/img/1.jpeg",
      description: "An orange roller coaster track forms a heart loop.",
      thrill: "Extreme",
      age: "12+ years",
      maintenance: "Operational",
    },
    {
      type: "thrill",
      name: "Inverted Roller Coaster Corkscrew",
      image: "assets/img/2.jpeg",
      description: "Riders twist through a corkscrew under a blue sky.",
      thrill: "High",
      age: "10+ years",
      maintenance: "Under Maintenance",
    },
    {
      type: "family",
      name: "Ferris Wheel at Sunset Carnival",
      image: "assets/img/3.jpeg",
      description: "A Ferris wheel lit against a sunset sky.",
      thrill: "Mild",
      age: "All ages",
      maintenance: "Operational",
    },
    {
      type: "thrill",
      name: "Aerial View of City Park",
      image: "assets/img/4.jpeg",
      description: "An aerial view with coasters and a Ferris wheel.",
      thrill: "High",
      age: "10+ years",
      maintenance: "Under Maintenance",
    },
    {
      type: "thrill",
      name: "Night Fairground Ferris Wheel",
      image: "assets/img/5.jpeg",
      description: "A glowing Ferris wheel at night.",
      thrill: "High",
      age: "10+ years",
      maintenance: "Under Maintenance",
    },
    {
      type: "family",
      name: "Spinning Swing Ride",
      image: "assets/img/6.jpeg",
      description: "A spinning swing ride active at dusk.",
      thrill: "Mild",
      age: "All ages",
      maintenance: "Operational",
    },
    {
      type: "kids",
      name: "Happy Riders on Coaster",
      image: "assets/img/7.jpeg",
      description: "Happy riders cheer on a white and red coaster.",
      thrill: "Low",
      age: "3–8 years",
      maintenance: "Operational",
    },
    {
      type: "family",
      name: "Colorful Rides",
      image: "assets/img/8.jpeg",
      description: "Colorful rides under a clear blue sky.",
      thrill: "Mild",
      age: "All ages",
      maintenance: "Operational",
    },
    {
      type: "kids",
      name: "Golden Hour Carousel",
      image: "assets/img/9.jpeg",
      description: "Kids enjoy a carousel ride in sunset light.",
      thrill: "Low",
      age: "3–8 years",
      maintenance: "Operational",
    },
  ];

  var container = document.getElementById("ridesContainer");
  var buttons = document.querySelectorAll(".sub-zones-link");

  showRides("all");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      var active = document.querySelector(".sub-zones-link.active");
      if (active) {
        active.classList.remove("active");
      }
      this.classList.add("active");
      var type = this.getAttribute("data-type");
      showRides(type);
    };
  }

  function showRides(type) {
    container.innerHTML = "";
    var filteredRides = [];

    if (type === "all") {
      filteredRides = rides;
    } else {
      for (var j = 0; j < rides.length; j++) {
        if (rides[j].type === type) {
          filteredRides.push(rides[j]);
        }
      }
    }

    for (var k = 0; k < filteredRides.length; k++) {
      var ride = filteredRides[k];
      container.innerHTML +=
        '<div class="col-lg-4 col-md-6 mb-4">' +
        '<div class="zone-card">' +
        '<span class="badge-category">' +
        ride.type +
        "</span>" +
        '<img src="' +
        ride.image +
        '" alt="' +
        ride.name +
        '">' +
        '<div class="card-body">' +
        "<h4>" +
        ride.name +
        "</h4>" +
        "<p>" +
        ride.description +
        "</p>" +
        '<ul class="ride-info">' +
        "<li><strong>Thrill Level:</strong> " +
        ride.thrill +
        "</li>" +
        "<li><strong>Min. Age:</strong> " +
        ride.age +
        "</li>" +
        "<li><strong>Maintenance:</strong> " +
        ride.maintenance +
        "</li>" +
        "</ul>" +
        "</div></div></div>";
    }
  }
});
