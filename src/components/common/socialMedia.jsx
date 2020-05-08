import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends Component {
  state = {
    socials: [
      { id: 1, name: 'instagram', icon: 'fa fa-instagram fa-lg', url: 'https://www.instagram.com/sumercisco/' },
      { id: 2, name: 'github', icon: 'fa fa-github fa-lg', url: 'https://github.com/Lopezsarmiento' },
      { id: 3, name: 'twitter', icon: 'fa fa-twitter-square fa-lg', url: 'https://twitter.com/Sumercisco' },
      { id: 4, name: 'linkedin', icon: 'fa fa-linkedin fa-lg', url: 'https://www.linkedin.com/in/diego-lopez-sarmiento-7330b156/' },
    ]
  }
  render() {

    const { socials } = this.state;
    return (
      <div className="nav-scroller py-1 mb-2 container-fluid">
        <nav className="nav d-flex justify-content-between">
          {socials.map(social => (
            <a key={social.id} className="p-2 text-dark font25" href={social.url} target="_blank" rel="noopener noreferrer"><i className={social.icon}></i></a>
          ))}
        </nav>
      </div>
    );
  }
}

export default SocialMedia;