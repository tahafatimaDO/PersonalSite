import React from 'react';

export default () => (
  <main>
    <main>
      <div className="image-background d-flex h-100 text-center text-white bg-dark">
        {/* <!--Content Within Background Image--> */}
        <div className="container p-5">
          <div className="introduction-section">
            <h1 className="">Hi there, I&apos;m Craig.</h1>
            <p className="lead">
              I am currently attending Bethany College pursuing a Bachelors Degree in Computer
              Science and a minor in Mathematics.
            </p>
            <p className="lead p-3">
              <a href="/Website/public/Assets/CraigSauersResume2022.pdf" target="blank" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark">
                Resume
              </a>
            </p>
          </div>
        </div>
        <div className="socials-div">
          <a href="https://twitter.com/Craig_Sau" target="blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.linkedin.com/in/craigwilliamsauers/" target="blank">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/CraigSau" target="blank">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.instagram.com/craig_sau/" target="blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCXYUIEojC1mdcKgvpkAPZZg?view_as=subscriber" target="blank">
            <i className="fab fa-youtube" />
          </a>
          <a href="https://www.twitch.tv/craig_sau" target="blank">
            <i className="fab fa-twitch" />
          </a>
          <a href="mailto: info@craigsauers.net" target="blank">
            <i className="far fa-envelope" />
          </a>
        </div>
      </div>
    </main>
    {/* <!--Timeline Section --> */}
    <div className="timeline-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <span className="date">May 2021</span>
                  <div className="timeline-icon">
                    <i className="fa fa-code" />
                  </div>
                  <h3 className="title">Web Development</h3>
                  <p className="description">
                    Began 12 week web development intership at Wolfe LLC.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <span className="date">Aug. 2020</span>
                  <div className="timeline-icon">
                    <i className="fa fa-bug" />
                  </div>
                  <h3 className="title">Continued Education</h3>
                  <p className="description">
                    Continued my studies at Bethany College throughout the
                    COVID-19 pandemic.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <span className="date">May 2019</span>
                  <div className="timeline-icon">
                    <i className="fa fa-mobile" />
                  </div>
                  <h3 className="title">Mobile App Development</h3>
                  <p className="description">
                    Began 12 week mobile app development intership at Wolfe LLC.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <span className="date">Aug. 2018</span>
                  <div className="timeline-icon">
                    <i className="fa fa-award" />
                  </div>
                  <h3 className="title">Scholarship</h3>
                  <p className="description">
                    Awarded full tuition Presidential Scholarship, which
                    requires maintaining a overall GPA of 3.65, to Bethany College.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <span className="date">May 2018</span>
                  <div className="timeline-icon">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <h3 className="title">High School Graduation</h3>
                  <p className="description">
                    Graduated Laurel High School with Summa Cum Laude
                    distinction.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
