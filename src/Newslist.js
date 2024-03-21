import React, { Component } from 'react'

import PropTypes from 'prop-types';


export default class Newslist extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    Newsdesc: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  render() {
    // the title and Newsdesc must match with the props name send by te News.js
    let {title,Newsdesc,imageUrl,url}=this.props;
    return (
      // <Router>
    <div>
       <div className="card " >
       <img src={!imageUrl ?"https://alpha.aeon.co/images/c47d208a-e1d2-4670-bd84-bb9549176540/header_essay-final-gettyimages-961586936.jpg":imageUrl} 
        className="card-img-top " alt="..." style={{ height: '200px', objectFit: 'cover' }}/>
        <div className="card-body">
          <h5 className="card-title"> {title}...</h5>
          <p className="card-text">{Newsdesc}...</p>
          <a href={url} target='_blank' className="btn btn-dark">Read News</a>
        </div>
      </div>
    </div>
    // </Router>
    )
  }
}
