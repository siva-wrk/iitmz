export default function About() {
  return (
    <div className="university-message-area pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title mb-5">
              <h2>
                Welcome to<span className="down-mark-line-2">Eduman</span>
                University Education Online Platform
              </h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="message-profile-text">
              <span>
                Eduma helps you to develop essential education and your career
                of years experiences.
              </span>
              <p>
                Transform your life through education to make the most of each
                semester to choose the best major. Prepare for grad school.
                Whatever it is, you can do it here. Explore our digital
                viewbook. Your journey starts here.
              </p>
            </div>
            <div className="message-meta">
              <a href="instructor-profile.html">
                <img src="/img/assets/img/bg/message-meta.png" alt="meta-img" />
              </a>
              <div className="message-meta-link">
                <a href="instructor-profile.html">
                  <h4>Daniel Abraham</h4>
                </a>
                <p>Director, IIT Madras Zanzibar</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="message-sticker position-relative">
              <img src="/img/assets/img/bg/message-sticker.png" alt="img" />
              <div className="etablist-price">
                <p>
                  Etablished <span>1958</span> Chennai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
