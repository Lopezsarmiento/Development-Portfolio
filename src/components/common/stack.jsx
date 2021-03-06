import React, { Component } from 'react';

class Stack extends Component {
  state = {
    items: [
      { id: 1, name: 'instagram', icon: 'devicon-mongodb-plain-wordmark colored' },
      { id: 2, name: 'instagram', icon: 'devicon-express-original colored' },
      { id: 3, name: 'instagram', icon: 'devicon-angularjs-plain colored' },
      { id: 4, name: 'instagram', icon: 'devicon-react-original-wordmark colored' },
      { id: 5, name: 'instagram', icon: 'devicon-nodejs-plain colored' },
      { id: 6, name: 'instagram', icon: 'devicon-javascript-plain colored' },
      { id: 7, name: 'instagram', icon: 'devicon-git-plain colored' }
    ]
  }

  render() {
    const { items } = this.state;
    return (
      <div className="nav-scroller container">
        <nav className="nav d-flex justify-content-between bg-transparent">
          {items.map(item => (
            <p key={item.id} className="stack">
              <span><i className={item.icon} aria-hidden="true"></i></span>
            </p>
          ))}
        </nav>
      </div>
    );
  }
}

export default Stack;