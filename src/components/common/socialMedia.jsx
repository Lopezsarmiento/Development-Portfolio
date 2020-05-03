import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends Component {
  state = {
    socials: [
      { id: 1, name: 'instagram', icon: 'fa fa-instagram', url: 'https://www.instagram.com/sumercisco/' },
      { id: 2, name: 'github', icon: 'fa fa-github', url: 'https://github.com/Lopezsarmiento' },
      { id: 3, name: 'twitter', icon: 'fa fa-twitter', url: 'https://twitter.com/Sumercisco' },
      { id: 4, name: 'linkedin', icon: 'fa fa-linkedin-square', url: 'https://www.linkedin.com/in/diego-lopez-sarmiento-7330b156/' },
    ]
  }
  render() {

    const { socials } = this.state;
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {socials.map(social => (
            <a key={social.id} className="p-2 text-muted" href={social.url} target="_blank" rel="noopener noreferrer">
              <span><i className={social.icon} aria-hidden="true"></i></span>
            </a>
          ))}
        </nav>
      </div>
    );
  }
}

export default SocialMedia;