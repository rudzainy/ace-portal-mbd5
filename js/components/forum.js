const forumTemplate = document.createElement('template')

class Forum extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="row mb-3">
          <div class="forum-title">
            <div class="pull-right forum-desc">
              <samll>Last updated: 31.9.2022</samll>
            </div>
            <h3>Documentations</h3>
          </div>
        </div>

        <div class="forum-item">
          <div class="row mb-3">
            <div class="col-md-9">
              <div class="forum-icon">
                <i class="fa fa-shield"></i>
              </div>
              <a href="#" class="forum-item-title">Paperworks Before Travelling</a>
              <div class="forum-sub-title">A general guide for applying to go on business trips.</div>
              <div class="d-flex align-items-center mt-3">
                <small class="me-2">Popular:</small>
                <a class="btn btn-rounded btn-sm btn-outline-primary me-2" href="#!" role="button">
                  <i class="fas fa-file-pdf me-2"></i>
                  Business Trip Checklist.pdf
                </a>
                <a class="btn btn-rounded btn-sm btn-outline-primary me-2" href="#!" role="button">
                  <i class="fas fa-file-pdf me-2"></i>
                  Business Trip Request Flow.pdf
                </a>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                1216
              </span>
              <div>
                <small>Views</small>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                8
              </span>
              <div>
                  <small>Topics</small>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                34
              </span>
              <div>
                <small>Posts</small>
              </div>
            </div>
          </div>
        </div>

        <div class="forum-item">
          <div class="row mb-3">
            <div class="col-md-9">
              <div class="forum-icon">
                <i class="fa fa-shield"></i>
              </div>
              <a href="#" class="forum-item-title">Paperworks After Travelling</a>
              <div class="forum-sub-title">A general guide on what could & should be done after returning from a business trips.</div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                  1254
              </span>
              <div>
                  <small>Views</small>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                  368
              </span>
              <div>
                  <small>Topics</small>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                  140
              </span>
              <div>
                  <small>Posts</small>
              </div>
            </div>
          </div>
        </div>

        <div class="forum-item">
          <div class="row mb-3">
            <div class="forum-title">
              <div class="pull-right forum-desc">
                <samll>Last updated: 31.9.2022</samll>
              </div>
              <h3>F.A.Q.</h3>
            </div>
          </div>
          <div class="forum-item">
            <div class="row">
                <div class="col-md-9">
                    <div class="forum-icon">
                        <i class="fa fa-bomb"></i>
                    </div>
                    <a href="forum_post.html" class="forum-item-title">There are many variations of passages</a>
                    <div class="forum-sub-title"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the . </div>
                </div>
                <div class="col-md-1 forum-info">
                    <span class="views-number">
                        1766
                    </span>
                    <div>
                        <small>Views</small>
                    </div>
                </div>
                <div class="col-md-1 forum-info">
                    <span class="views-number">
                        321
                    </span>
                    <div>
                        <small>Topics</small>
                    </div>
                </div>
                <div class="col-md-1 forum-info">
                    <span class="views-number">
                        42
                    </span>
                    <div>
                        <small>Posts</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="forum-item">
            <div class="row">
                <div class="col-md-9">
                    <div class="forum-icon">
                        <i class="fa fa-bookmark"></i>
                    </div>
                    <a href="forum_post.html" class="forum-item-title">The standard chunk of Lorem Ipsum</a>
                    <div class="forum-sub-title">Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</div>
                </div>
                <div class="col-md-1 forum-info">
                    <span class="views-number">
                        765
                    </span>
                    <div>
                        <small>Views</small>
                    </div>
                </div>
                <div class="col-md-1 forum-info">
                    <span class="views-number">
                        90
                    </span>
                    <div>
                        <small>Topics</small>
                    </div>
                </div>
                <div class="col-md-1 forum-info">
                    <span class="views-number">
                        11
                    </span>
                    <div>
                        <small>Posts</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="forum-item">
          <div class="row">
            <div class="col-md-9">
              <div class="forum-icon">
                <i class="fa fa-ambulance"></i>
              </div>
              <a href="forum_post.html" class="forum-item-title">Lorem Ipsum, you need to be sure there</a>
              <div class="forum-sub-title">
                Internet tend to repeat predefined chunks as necessary, making this the
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                2550
              </span>
              <div>
                <small>Views</small>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                122
              </span>
              <div>
                <small>Topics</small>
              </div>
            </div>
            <div class="col-md-1 forum-info">
              <span class="views-number">
                92
              </span>
              <div>
                <small>Posts</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('forum-component', Forum)