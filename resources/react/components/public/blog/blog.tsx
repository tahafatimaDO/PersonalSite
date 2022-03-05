import React from 'react';

export default () => (
  <section className="test-section">
    <div className="container">
      <h1 className="blog-title text-center">
        Recent Blog Posts
      </h1>

      <article className="postcard dark blue">
        <a className="postcard_img_link" href="/#">
          <img className="postcard_img" src="#" alt="Article Img" />
        </a>
        <div className="postcard_text">
          <h1 className="postcard_title blue"><a href="/#">Article Title</a></h1>
          <div className="postcard_subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              Mon, May 25th 2020
            </time>
          </div>
          <div className="postcard_bar" />
          <div className="postcard_preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
          <ul className="postcard_tagbox">
            <li className="tag_item">
              <i className="fas fa-tag mr-2" />
              Article Type
            </li>
            <li className="tag_item">
              <i className="fas fa-clock mr-2" />
              55 mins.
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
);
