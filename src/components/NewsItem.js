import React from 'react'

const NewsItem = (props) =>{

    let {title,description,imgurl,url,date,source,author} =props;
    return (
      <div>
        <div className="card my-3" >
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...<span className="badge text-bg-success">New</span></h5>
    <p className="card-text">{description}...</p>
    <a href={url} className="btn btn-sml btn-info">Readmore...</a>
    <p className="card-text"><small className="text-muted">Updated by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
  </div>
</div>
      </div>
    )
  }

export default NewsItem
