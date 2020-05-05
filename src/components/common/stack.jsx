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
      { id: 7, name: 'instagram', icon: 'devicon-git-plain colored' },
      { id: 8, name: 'instagram', icon: 'devicon-bootstrap-plain colored' }
    ]
  }

  render() {
    const { items } = this.state;
    return (
      <div className="nav-scroller">
        <nav id="stack" className="nav d-flex justify-content-between">
          {items.map(item => (
            <p key={item.id} className="p-2 text-muted">
              <span><i className={item.icon} aria-hidden="true"></i></span>
            </p>
          ))}
        </nav>
      </div>
    );
  }
}

export default Stack;