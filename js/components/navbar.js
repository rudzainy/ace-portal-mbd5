const navbarTemplate = document.createElement('template')

class Navbar extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <!-- Container wrapper -->
          <div class="container-fluid">
            <!-- Toggle button -->
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#topNavbarContent"
              aria-controls="topNavbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
        
            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="topNavbarContent">
              <!-- Navbar brand -->
              <a class="navbar-brand mt-2 mt-lg-0" href="/index.html">
                <img
                  src="/img/ace-portal-logo.svg"
                  height="30"
                  alt="ACE Portal Logo"
                  loading="lazy"
                />
              </a>
              <!-- Left links -->
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">


              <li class="nav-item">
              <a class="nav-link" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Dashboard.html">Dashboard</a>
            </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow"
                    href="/employee-engagement.html"
                    id="employeeEngagementDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Employee Engagement
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="employeeEngagementDropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/employee-engagement/activities-calendar.html">Activities Calendar</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/employee-engagement/employee-guidebook.html">Employee Guidebook</a>
                    </li>
                  </ul>
                </li>



                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow"
                    href="/human-resource.html"
                    id="humanResourceDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Human Resource
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="humanResourceDropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/human-resource/staff-directory.html">Staff Directory</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/human-resource/seat-map.html">Seat Map</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/human-resource.html">Hiring & Resigntion Updates</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow"
                    href="/patent-filing.html"
                    id="patentFilingDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Patent Filing
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="patentFilingDropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/patent-filing/introduction.html">Introduction to Patent Filing</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/patent-filing.html">Eligibility Criteria</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/patent-filing.html">Winners List</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow"
                    href="#"
                    id="eventsDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Events
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="eventsDropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/events.html">All events</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><h6 class="dropdown-header">Highlights</h6></li>
                  <li>
                    <a class="dropdown-item" href="/events/rge55.html">RGE55</a>
                  </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><h6 class="dropdown-header">Hackathons</h6></li>
                    <li>
                      <a class="dropdown-item" href="/events/hackathon2023.html">RGE Hackathon 2022</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/events/hackathon2023.html">RGE Hackathon 2023</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->
        
            <!-- Right elements -->
            <div class="d-flex align-items-center">
              <!-- Icon -->
              <a class="text-reset me-3" href="#">
                <i class="fas fa-server"></i>
              </a>
        
              <!-- Notifications -->
              <div class="dropdown">
                <a
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="notificationsDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="notificationsDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              <!-- Avatar -->
              <div class="dropdown">
                <a
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <h6 class="dropdown-header">Hi Rudzainy!</h6>
                  </li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Right elements -->
          </div>
          <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
        `
      }
    }
    
    customElements.define('navbar-component', Navbar)