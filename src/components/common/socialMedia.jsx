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
        <h5 className="font-italic text-monospace">You can find me on</h5>
        <nav className="nav d-flex justify-content-between">
          {socials.map(social => (
            <a key={social.id} className="p-2 alert-link" href={social.url} target="_blank" rel="noopener noreferrer">
              <span className="font-weight-bold alert socialIcons"><i className={social.icon} aria-hidden="true"></i></span>
            </a>
          ))}
        </nav>
      </div>
    );
  }
}

export default SocialMedia;