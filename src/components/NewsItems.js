import React from "react";

const NewsItems = (props) => {

  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="Error while Loading" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small class="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}


export default NewsItems;
