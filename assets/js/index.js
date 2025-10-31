document.addEventListener("DOMContentLoaded", function () {
  var attractions = [
    {
      title: "Thunder Coaster",
      desc: "Brace yourself for loops, turns, and pure adrenaline in our signature roller coaster ride!",
      img: "assets/img/1.jpeg",
      category: "thrill",
      thrill: "High",
      age: "12+",
      maintenance: "Regularly Checked",
    },
    {
      title: "Sky Eye Wheel",
      desc: "Enjoy a peaceful spin and breathtaking views from our giant Ferris Wheel.",
      img: "assets/img/2.jpeg",
      category: "family",
      thrill: "Low",
      age: "All Ages",
      maintenance: "Perfect Condition",
    },
    {
      title: "Aqua Splash Zone",
      desc: "Dive into water-filled adventures with slides and endless summer fun!",
      img: "assets/img/3.jpeg",
      category: "water",
      thrill: "Medium",
      age: "8+",
      maintenance: "Under Inspection",
    },
    {
      title: "Mini Train Ride",
      desc: "A cute and fun journey through the park for kids and families.",
      img: "assets/img/4.jpeg",
      category: "kids",
      thrill: "Low",
      age: "5+",
      maintenance: "Perfect Condition",
    },
    {
      title: "Sky Eye Wheel",
      desc: "Enjoy a peaceful spin and breathtaking views from our giant Ferris Wheel.",
      img: "assets/img/5.jpeg",
      category: "family",
      thrill: "Low",
      age: "All Ages",
      maintenance: "Perfect Condition",
    },
    {
      title: "Mini Train Ride",
      desc: "A cute and fun journey through the park for kids and families.",
      img: "assets/img/6.jpeg",
      category: "kids",
      thrill: "Low",
      age: "5+",
      maintenance: "Perfect Condition",
    },
    {
      title: "Thunder Coaster",
      desc: "Brace yourself for loops, turns, and pure adrenaline in our signature roller coaster ride!",
      img: "assets/img/7.jpeg",
      category: "thrill",
      thrill: "High",
      age: "12+",
      maintenance: "Regularly Checked",
    },
    {
      title: "Freefall Tower",
      desc: "Experience zero gravity for a few seconds of pure heart-racing excitement!",
      img: "assets/img/8.jpeg",
      category: "thrill",
      thrill: "Extreme",
      age: "14+",
      maintenance: "Regularly Checked",
    },
  ];

  var track = document.getElementById("attractions-carousel");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var filterBtns = document.getElementsByClassName("filter-btn");

  var filtered = attractions.slice();
  var currentIndex = 0;
  var cardsToShow = 3;

  function renderCards() {
    track.innerHTML = "";
    for (var i = 0; i < filtered.length; i++) {
      var a = filtered[i];
      track.innerHTML +=
        '<div class="attraction-card">' +
        '<img src="' +
        a.img +
        '" alt="' +
        a.title +
        '">' +
        '<div class="card-body">' +
        "<h4>" +
        a.title +
        "</h4>" +
        "<p>" +
        a.desc +
        "</p><hr>" +
        '<div class="ride-details text-start mt-2">' +
        "<p>🎢 <strong>Thrill Level:</strong> " +
        a.thrill +
        "</p>" +
        "<p>👶 <strong>Age Limit:</strong> " +
        a.age +
        "</p>" +
        "<p>🛠️ <strong>Maintenance:</strong> " +
        a.maintenance +
        "</p>" +
        "</div></div></div>";
    }
    updateCarousel();
  }

  function updateCarousel() {
    var cardWidth = track.children[0] ? track.children[0].offsetWidth + 20 : 0;
    track.style.transform = "translateX(-" + currentIndex * cardWidth + "px)";
    prevBtn.classList.toggle("hidden", currentIndex === 0);
    nextBtn.classList.toggle(
      "hidden",
      currentIndex >= filtered.length - cardsToShow
    );
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < filtered.length - cardsToShow) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      for (var j = 0; j < filterBtns.length; j++) {
        filterBtns[j].classList.remove("active");
      }
      this.classList.add("active");
      var cat = this.getAttribute("data-category");
      filtered = [];
      for (var k = 0; k < attractions.length; k++) {
        if (cat === "all" || attractions[k].category === cat) {
          filtered.push(attractions[k]);
        }
      }
      currentIndex = 0;
      renderCards();
    });
  }

  window.addEventListener("load", renderCards);

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  var rides = [
    {
      title: "Dragon Fury",
      desc: "Twist, spin, and scream on this legendary roller coaster of fire!",
      img: "assets/img/9.jpeg",
      category: "thrill",
      thrill: "Extreme",
      age: "14+",
      maintenance: "Regularly Checked",
    },
    {
      title: "Galaxy Spinner",
      desc: "Feel weightless as you spin through a cosmic light show.",
      img: "assets/img/10.png",
      category: "thrill",
      thrill: "High",
      age: "12+",
      maintenance: "Perfect Condition",
    },
    {
      title: "Pirate Ship",
      desc: "Sail high and low on waves of fun in this classic family ride!",
      img: "assets/img/16.png",
      category: "family",
      thrill: "Medium",
      age: "All Ages",
      maintenance: "Perfect Condition",
    },
    {
      title: "Magic Carousel",
      desc: "A whimsical merry-go-round filled with colors, lights, and joy.",
      img: "assets/img/23.png",
      category: "kids",
      thrill: "Low",
      age: "5+",
      maintenance: "Perfect Condition",
    },
    {
      title: "Splash River Rapids",
      desc: "An epic water adventure with rapid currents and wet surprises!",
      img: "assets/img/21.jpg",
      category: "family",
      thrill: "Medium",
      age: "8+",
      maintenance: "Under Maintenance",
    },
  ];

  var ridesTrack = document.getElementById("rides-carousel");
  var ridesPrev = document.querySelector(".prev-btn-r");
  var ridesNext = document.querySelector(".next-btn-r");
  var ridesFilterBtns = document.getElementsByClassName("filter-btn-r");

  var filteredRides = rides.slice();
  var rideIndex = 0;
  var ridesToShow = 3;

  function renderRides() {
    ridesTrack.innerHTML = "";
    for (var i = 0; i < filteredRides.length; i++) {
      var r = filteredRides[i];
      ridesTrack.innerHTML +=
        '<div class="attraction-card">' +
        '<img src="' +
        r.img +
        '" alt="' +
        r.title +
        '">' +
        '<div class="card-body">' +
        "<h4>" +
        r.title +
        "</h4>" +
        "<p>" +
        r.desc +
        "</p><hr>" +
        '<div class="ride-details text-start mt-2">' +
        "<p>🎢 <strong>Thrill Level:</strong> " +
        r.thrill +
        "</p>" +
        "<p>👶 <strong>Age Limit:</strong> " +
        r.age +
        "</p>" +
        "<p>🛠️ <strong>Maintenance:</strong> " +
        r.maintenance +
        "</p>" +
        "</div></div></div>";
    }
    updateRides();
  }

  function updateRides() {
    var cardWidth = ridesTrack.children[0]
      ? ridesTrack.children[0].offsetWidth + 20
      : 0;
    ridesTrack.style.transform = "translateX(-" + rideIndex * cardWidth + "px)";
    ridesPrev.classList.toggle("hidden", rideIndex === 0);
    ridesNext.classList.toggle(
      "hidden",
      rideIndex >= filteredRides.length - ridesToShow
    );
  }

  ridesNext.addEventListener("click", function () {
    if (rideIndex < filteredRides.length - ridesToShow) {
      rideIndex++;
      updateRides();
    }
  });

  ridesPrev.addEventListener("click", function () {
    if (rideIndex > 0) {
      rideIndex--;
      updateRides();
    }
  });

  for (var i = 0; i < ridesFilterBtns.length; i++) {
    ridesFilterBtns[i].addEventListener("click", function () {
      for (var j = 0; j < ridesFilterBtns.length; j++) {
        ridesFilterBtns[j].classList.remove("active");
      }
      this.classList.add("active");
      var cat = this.getAttribute("data-category");
      filteredRides = [];
      for (var k = 0; k < rides.length; k++) {
        if (cat === "all" || rides[k].category === cat) {
          filteredRides.push(rides[k]);
        }
      }
      rideIndex = 0;
      renderRides();
    });
  }

  window.addEventListener("load", renderRides);
  window.addEventListener("resize", function () {
    updateCarousel();
    updateRides();
  });
});



