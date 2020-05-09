import React from 'react';

const Footer = ({ name, url }) => {

  return (
    <div className="alert alert-light" role="alert">
      <small>Photo by <a href={url} className="alert-link">{name}</a> on <a href="https://unsplash.com/" className="alert-link">Unsplash</a>.</small>
    </div>
  );
}

export default Footer;