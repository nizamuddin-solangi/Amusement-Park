document.addEventListener("DOMContentLoaded", function () {
  var restaurants = [
    {
      type: "veg",
      name: "The Root & Leaf Cafe Interior",
      image: "assets/img/36.png",
      description: "A cozy indoor plant-based cafe with booths, arched windows, and a counter display.",
      cuisine: "Vegetarian & Organic",
      rating: "4.7 / 5",
      price: "Rs. 600–1000 per person",
      hours: "10:00 AM – 10:00 PM",
    },
    {
      type: "non-veg",
      name: "Themed Grand Dining Hall",
      image: "assets/img/32.png",
      description: "A large, themed indoor restaurant with a bar and high ceilings, serving hearty meals to families.",
      cuisine: "Continental & BBQ",
      rating: "4.8 / 5",
      price: "Rs. 1200–1800 per person",
      hours: "12:00 PM – 11:00 PM",
    },
    {
      type: "veg",
      name: "Modern Open-Kitchen Bistro",
      image: "assets/img/25.jpeg",
      description: "Patrons dine in a warm restaurant with dark tables and a view of the professional open kitchen.",
      cuisine: "Continental & BBQ",
      rating: "4.8 / 5",
      price: "Rs. 1200–1800 per person",
      hours: "12:00 PM – 11:00 PM",
    },
    {
      type: "non-veg",
      name: "Evening Fine Dining and Bar",
      image: "assets/img/30.jpeg",
      description: "An upscale restaurant interior at night with brick walls, candles, and an open kitchen view.",
      cuisine: "Continental & BBQ",
      rating: "4.8 / 5",
      price: "Rs. 1200–1800 per person",
      hours: "12:00 PM – 11:00 PM",
    },
    {
      type: "chinese",
      name: "Golden Wok Express Chinese",
      image: "assets/img/34.png",
      description: "A colorful, fast-casual Chinese food stall with outdoor picnic seating in the park.",
      cuisine: "Chinese & Asian Fusion",
      rating: "4.6 / 5",
      price: "Rs. 800–1400 per person",
      hours: "11:00 AM – 10:00 PM",
    },
    {
      type: "veg",
      name: "Exotic Jungle Theme Restaurant",
      image: "assets/img/41.jpg",
      description: "A dimly lit, exotic-themed restaurant interior with woven chairs and lush overhead foliage.",
      cuisine: "Vegetarian & Organic",
      rating: "4.7 / 5",
      price: "Rs. 600–1000 per person",
      hours: "10:00 AM – 10:00 PM",
    },
    {
      type: "chinese",
      name: "Traditional Chinese Banquet Dining",
      image: "assets/img/28.jpeg",
      description: "A beautifully designed dining room where a group shares a large meal using chopsticks.",
      cuisine: "Chinese & Asian Fusion",
      rating: "4.6 / 5",
      price: "Rs. 800–1400 per person",
      hours: "11:00 AM – 10:00 PM",
    },
    {
      type: "non-veg",
      name: "Cozy Italian Pizzeria/Trattoria",
      image: "assets/img/29.jpeg",
      description: "A rustic, candlelit dining room with checkered tablecloths and a visible pizza oven.",
      cuisine: "Fast Food",
      rating: "4.4 / 5",
      price: "Rs. 400–800 per person",
      hours: "10:00 AM – 11:00 PM",
    },
    {
      type: "chinese",
      name: "Family Style Chinese Dinner",
      image: "assets/img/31.jpeg",
      description: "A busy, traditional restaurant with a large family enjoying a communal meal at a round table.",
      cuisine: "Chinese & Asian Fusion",
      rating: "4.6 / 5",
      price: "Rs. 800–1400 per person",
      hours: "11:00 AM – 10:00 PM",
    },
  ];

  var container = document.getElementById("restaurantsContainer");
  var buttons = document.querySelectorAll(".sub-zones-link");

  renderRestaurants("all");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var active = document.querySelector(".sub-zones-link.active");
      if (active) {
        active.classList.remove("active");
      }
      this.classList.add("active");
      renderRestaurants(this.getAttribute("data-type"));
    });
  }

  function renderRestaurants(type) {
    container.innerHTML = "";
    for (var i = 0; i < restaurants.length; i++) {
      var r = restaurants[i];
      if (type === "all" || r.type === type) {
        var card = 
          '<div class="col-lg-4 col-md-6 mb-4">' +
            '<div class="zone-card">' +
              '<span class="badge-category">' + r.type + '</span>' +
              '<img src="' + r.image + '" alt="' + r.name + '">' +
              '<div class="card-body">' +
                '<h4>' + r.name + '</h4>' +
                '<p>' + r.description + '</p>' +
                '<ul class="restaurant-info">' +
                  '<li><strong>Rating:</strong> ⭐ ' + r.rating + '</li>' +
                  '<li><strong>Price Range:</strong> ' + r.price + '</li>' +
                  '<li><strong>Hours:</strong> ' + r.hours + '</li>' +
                '</ul>' +
              '</div>' +
            '</div>' +
          '</div>';
        container.innerHTML += card;
      }
    }
  }
});
  