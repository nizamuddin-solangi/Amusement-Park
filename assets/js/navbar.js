let header = document.getElementById("nav");
header.innerHTML = `
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-custom mt-4">
    <div class="container-fluid align-items-center">
      <a class="navbar-brand logo-floating d-none d-lg-flex" href="index.html" aria-label="Home">
        <img src="assets/img/logo.png" alt="Logo" class="img-fluid logo-desktop">
      </a>
      <a class="navbar-brand d-flex d-lg-none mx-auto" href="index.html" aria-label="Home">
        <img src="assets/img/logo.png" alt="Logo" class="img-fluid logo-mobile">
      </a>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto align-items-center text-center">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
          
          <li class="nav-item dropdown">
            <div class="d-flex align-items-center">
              <a class="nav-link" href="zones_and_attraction.html">Zones & Attraction</a>
              <a class="nav-link dropdown-toggle ps-1" href="zones_and_attraction.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"></a>
            </div>
            <ul class="dropdown-menu shadow-lg">
              <li><a class="dropdown-item" href="rides.html">Rides</a></li>
              <li><a class="dropdown-item" href="restaurants.html">Restaurants</a></li>
              <li><a class="dropdown-item" href="entertainment.html">Entertainment</a></li>
            </ul>
          </li>

          <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
          <li class="nav-item"><a class="nav-link" href="disclaimer.html">Disclaimer</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>

          <li class="nav-item dropdown">
            <div class="d-flex align-items-center">
              <a class="nav-link" href="#">Sitemap</a>
              <a class="nav-link dropdown-toggle ps-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
            </div>
            <ul class="dropdown-menu shadow-lg">
              <li><a class="dropdown-item" href="index.html">Home</a></li>
              <li><a class="dropdown-item" href="about.html">About Us</a></li>

              <li class="dropdown-submenu">
                <a class="dropdown-item dropdown-toggle" href="zones_and_attraction.html">Zones & Attraction</a>
                <ul class="dropdown-menu shadow-lg">
                  <li><a class="dropdown-item" href="rides.html">Rides</a></li>
                  <li><a class="dropdown-item" href="restaurants.html">Restaurants</a></li>
                  <li><a class="dropdown-item" href="entertainment.html">Entertainment</a></li>
                </ul>
              </li>

              <li><a class="dropdown-item" href="tickets.html">Tickets</a></li>
              <li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
              <li><a class="dropdown-item" href="disclaimer.html">Disclaimer</a></li>
              <li><a class="dropdown-item" href="contact.html">Contact Us</a></li>
            </ul>
          </li>
        </ul>

        <a href="tickets.html" class="btn-buy-tickets mt-3 mt-lg-0 ms-lg-3 d-block d-lg-inline-block text-center">
          Tickets and Prices
        </a>
      </div>
    </div>
  </nav>
</div>
`;
