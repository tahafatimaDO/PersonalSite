import React from 'react';

export default () => (
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
);
