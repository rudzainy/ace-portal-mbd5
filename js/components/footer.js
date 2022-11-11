const footerTemplate = document.createElement('template');

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="text-center text-lg-start bg-light text-muted">
        <!-- Section: Social media -->
        <section class="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <!-- Left -->
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <!-- Left -->

          <!-- Right -->
          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold mb-4">
                  <img src="/img/ace-portal-logo.svg" alt="ACE Portal logo">
                </h6>
                <p>
                  ACE Portal is developed and maintained by ACE Digital. For feedbacks or inquiries, please contact support@aceresources.biz
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <p>
                  <a href="/index.html" class="text-reset">Home</a>
                </p>
                <p>
                  <a href="/events.html" class="text-reset">Events</a>
                </p>
                <p class="text-danger">
                  <a href="/events/rge55.html" class="text-reset">RGE55</a>
                </p>
                <p class="text-warning">
                  <a href="/events/hackathon2023.html" class="text-reset">Hackathon 2023</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  <a href="/employee-engagement.html" class="text-reset">Employee Engagement</a>
                </h6>
                <p>
                  <a href="/employee-engagement/activities-calendar.html" class="text-reset">Activities Calendar</a>
                </p>
                <p>
                  <a href="/employee-engagement/onboarding-offboarding.html" class="text-reset">Onboarding & Offboarding</a>
                </p>
                <p>
                  <a href="/employee-engagement/employee-guidebook.html" class="text-reset">Guidebook</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  <a href="/human-resource.html" class="text-reset">Human Resource</a>
                </h6>
                <p>
                  <a href="/human-resource/staff-directory.html" class="text-reset">Staff Directory</a>
                </p>
                <p>
                  <a href="/human-resource/seat-map.html" class="text-reset">Seat Map</a>
                </p>
                <p>
                  <a href="/human-resource/hiring-resignation-update.html" class="text-reset">Hiring & Resignation Updates</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">
                  <a href="patent-filing.html" class="text-reset">Patent Filing</a>
                </h6>
                <p>
                  <a href="/patent-filing/introduction.html" class="text-reset">Introduction to Patent Filing</a>
                </p>
                <p>
                  <a href="/patent-filing/eligibility-criteria.html" class="text-reset">Eligibility criteria</a>
                </p>
                <p>
                  <a href="/patent-filing/winners-list.html" class="text-reset">Winners list</a>
                </p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          © ${new Date().getFullYear()} ACE Resources
        </div>
        <!-- Copyright -->
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);