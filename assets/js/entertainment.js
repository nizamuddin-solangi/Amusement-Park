document.addEventListener("DOMContentLoaded", function () {
  var shows = [
    {
      type: "shows",
      name: "Vibrant Pop Stage Show",
      image: "assets/img/42.png",
      description:
        "A colorful cast of singers and dancers performs on an elaborate stage with pyrotechnics.",
      duration: "30 minutes",
      schedule: "Every Fri–Sun at 8:00 PM",
      audience: "All Ages",
      popularity: "★★★★★",
    },
    {
      type: "shows",
      name: "Outdoor Magic and Illusion Show",
      image: "assets/img/48.png",
      description:
        "A magician and assistant perform a light-filled illusion show on an outdoor stage at night.",
      duration: "45 minutes",
      schedule: "Daily at 7:30 PM",
      audience: "Families & Kids",
      popularity: "★★★★☆",
    },
    {
      type: "games",
      name: "Character Parade with Bubbles",
      image: "assets/img/44.png",
      description:
        "Costumed characters ride on a colorful float, interacting with children lining the parade route.",
      duration: "10–15 minutes per session",
      schedule: "11:00 AM – 9:00 PM",
      audience: "Teens & Adults",
      popularity: "★★★★☆",
    },
    {
      type: "events",
      name: "Music Festival",
      image: "assets/img/45.png",
      description:
        "Live concerts featuring local and international artists across multiple stages.",
      duration: "3 hours",
      schedule: "Every Saturday 6:00–9:00 PM",
      audience: "Teens & Adults",
      popularity: "★★★★★",
    },
    {
      type: "games",
      name: "Acrobatic Tightrope Act",
      image: "assets/img/49.png",
      description:
        "Acrobats perform a dramatic human tower on a tightrope over a large crowd under a night sky.",
      duration: "10–15 minutes per session",
      schedule: "11:00 AM – 9:00 PM",
      audience: "Teens & Adults",
      popularity: "★★★★☆",
    },
    {
      type: "shows",
      name: "Evening Puppet Show",
      image: "assets/img/50.png",
      description:
        "A puppeteer performs for a group of children seated on the ground in front of a quaint, lit wooden stage.",
      duration: "45 minutes",
      schedule: "Daily at 7:30 PM",
      audience: "Families & Kids",
      popularity: "★★★★☆",
    },
    {
      type: "games",
      name: "Outdoor Evening Concert",
      image: "assets/img/47.png",
      description:
        "A band performs on a temporary stage with large screens and bright lights for a large, standing audience.",
      duration: "Unlimited Play",
      schedule: "10:00 AM – 10:00 PM",
      audience: "All Ages",
      popularity: "★★★★☆",
    },
    {
      type: "events",
      name: "Music Festival",
      image: "assets/img/49.png",
      description:
        "Live concerts featuring local and international artists across multiple stages.",
      duration: "3 hours",
      schedule: "Every Saturday 6:00–9:00 PM",
      audience: "Teens & Adults",
      popularity: "★★★★★",
    },
  ];

  var container = document.getElementById("entertainmentContainer");
  var buttons = document.getElementsByClassName("sub-zones-link");

  renderShows("all");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var active = document.querySelector(".sub-zones-link.active");
      if (active) active.classList.remove("active");
      this.classList.add("active");
      var type = this.getAttribute("data-type");
      renderShows(type);
    });
  }

  function renderShows(type) {
    container.innerHTML = "";
    for (var i = 0; i < shows.length; i++) {
      var item = shows[i];
      if (type === "all" || item.type === type) {
        container.innerHTML +=
          '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="zone-card">' +
          '<span class="badge-category">' + item.type + "</span>" +
          '<img src="' + item.image + '" alt="' + item.name + '">' +
          '<div class="card-body">' +
          "<h4>" + item.name + "</h4>" +
          "<p>" + item.description + "</p>" +
          '<ul class="entertainment-info">' +
          "<li><strong>Duration:</strong> " + item.duration + "</li>" +
          "<li><strong>Schedule:</strong> " + item.schedule + "</li>" +
          "<li><strong>Audience:</strong> " + item.audience + "</li>" +
          "<li><strong>Popularity:</strong> " + item.popularity + "</li>" +
          "</ul></div></div></div>";
      }
    }
  }
});
