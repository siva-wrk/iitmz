export default function Footer() {
  return (
    <footer>
      <div className="university-footer-area pt-5 pb-5">
        <div className="footer">
          <div className="container">
            <div className="footer-main">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w1 mb-40">
                    <div className="footer-widget-head">
                      <div className="footer-logo mb-5">
                        <a href="index.html">
                          <img
                            src="/assets/img/logo/logo-black.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="university-footer-widget-body">
                      <p className="mb-5">
                        Great lesson ideas and lesson plans for ESL teachers!
                        Educators can customize lessons as best plans to
                        knowledge.
                      </p>

                      <div className="university-footer-icon">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w2 mb-5">
                    <div className="university-footer-widget-head mb-5">
                      <h4 className="university-footer-widget-title">
                        Online Platform
                      </h4>
                    </div>
                    <div className="university-footer-widget-body">
                      <div className="university-footer-link">
                        <ul>
                          <li>
                            <a href="#">Proper Guidelines</a>
                          </li>
                          <li>
                            <a href="#">Digital Library</a>
                          </li>
                          <li>
                            <a href="#">Compare Us</a>
                          </li>
                          <li>
                            <a href="#">Become Instructor</a>
                          </li>
                          <li>
                            <a href="#">Build Career</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w3 mb-5">
                    <div className="university-footer-widget-head mb-5">
                      <h4 className="university-footer-widget-title">
                        Browse Courses
                      </h4>
                    </div>
                    <div className="university-footer-widget-body">
                      <div className="university-footer-link">
                        <ul>
                          <li>
                            <a href="#">Development</a>
                          </li>
                          <li>
                            <a href="#">Business</a>
                          </li>
                          <li>
                            <a href="#">Health & Fitness</a>
                          </li>
                          <li>
                            <a href="#">Life Styles</a>
                          </li>
                          <li>
                            <a href="#">Photography</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="university-footer-widget uf-w4 mb-5">
                    <div className="footer-widget-head mb-5">
                      <h4 className="footer-widget-title">Newsletter</h4>
                    </div>
                    <div className="university-footer-widget-body">
                      <div className="university-footer-subscribe">
                        <form action="#">
                          <div className="university-footer-subscribe position-relative mb-5">
                            <div className="field po">
                              <input type="email" placeholder="Enter email" />
                            </div>
                            <button type="submit">
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      <h3>Download App</h3>
                      <div className="app-store">
                        <a href="#">
                          <img
                            src="/assets/img/bg/appstore-1.png"
                            alt="image not found"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="/assets/img/bg/appstore-2.png"
                            alt="image not found"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="university-sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="sub-footer-text">
                <span>
                  © Copyrighted All Rights Reserved <a href="">IITM</a>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="sub-footer-link">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
