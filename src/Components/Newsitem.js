import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, newsdate, author, source } =
    props;
  return (
    <div className="my-3">
      <div className="card border border-dark">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: " 90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://imgs.search.brave.com/ts6G23QHKpl09lzz8hqWXFCiNUYscPCTHnYHrB_7U9Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE4LzI3Lzgz/LzM2MF9GXzMxODI3/ODMyMl81WFpFOU8x/MHh6OG1wdW5kSHFH/QkR6dWtZZnc5SE9v/RC5qcGc"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown author" : author} on{" "}
              {new Date(newsdate).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blanck" className="btn btn-sm btn-dark">
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
