import React from 'react';
import './NewsCard.css';

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
    this.displayArticle = this.displayArticle.bind(this);
  }

  displayArticle(article) {
    for (let i = 0; i < article.length; i++) {
      let { info } = this.article[i];
      setTimeout(() => {
        return <img src={info.src} alt={info.id} />;
      }, i * 1000);
      i += 1;
    }
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
/*
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
*/
