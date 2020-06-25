import React from 'react';
import './cards.css';

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="slider">
        <div id="slides">
          <figure id="slide1">
            <img src="https://zupimages.net/up/20/26/8i42.png" alt="actu1" />
          </figure>
          <figure id="slide2">
            <img src="https://zupimages.net/up/20/26/tctv.png" alt="actu2" />
          </figure>
          <figure id="slide3">
            <img src="https://zupimages.net/up/20/26/zv3o.png" alt="actu3" />
          </figure>
          <figure id="slide4">
            <img src="https://zupimages.net/up/20/26/eus5.png" alt="actu4" />
          </figure>
          <figure id="slide5">
            <img src="https://zupimages.net/up/20/26/od8h.png" alt="actu5" />
          </figure>
        </div>
      </div>
    );
  }
}

export default NewsCard;
