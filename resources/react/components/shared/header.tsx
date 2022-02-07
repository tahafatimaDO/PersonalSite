import React from 'react';

export default () => (
  <div className="bg-dark" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a className="navbar-brand d-flex align-items-center mb-2 mb-md-0 text-light" href="\app\index.tsx">
        <img src="Website/public/Assets/personalsite.ico" alt="Craig Sauers" width="=50rem" height="50rem" />
      </a>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-center">
        <li className="nav-item">
          <a
            className="nav-link px-2 text-white"
            href="/Website/public/HTML/projects.html"
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-white"
            href="/Website/public/HTML/blog.html"
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-white"
            href="/Website/public/HTML/contact.html"
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-white"
            href="/Website/public/HTML/account.html"
          >
            Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-white"
            href="/Website/public/Assets/CraigSauersResume2022.pdf"
            target="blank"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">Login</button>
        <button type="button" className="btn btn-outline-info">Sign-up</button>
      </div>
    </header>
  </div>
);
