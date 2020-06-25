import React from 'react';
import './cards.css';

const article = [
  {
    id: 'actu1',
    src: 'https://zupimages.net/up/20/26/8i42.png'
  },
  {
    id: 'actu2',
    src: 'https://zupimages.net/up/20/26/tctv.png'
  },
  {
    id: 'actu3',
    src: 'https://zupimages.net/up/20/26/zv3o.png'
  },
  {
    id: 'actu4',
    src: 'https://zupimages.net/up/20/26/eus5.png'
  },
  {
    id: 'actu5',
    src: 'https://zupimages.net/up/20/26/od8h.png'
  }
];

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="slider">
        <div id="slides">
          {article.map(item => (
            <img src={item.src} alt={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsCard;
