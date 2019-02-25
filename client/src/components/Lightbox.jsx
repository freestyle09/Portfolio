import React from 'react';

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false,
      isLoading: false
    };
  }

  menu;
  gallery;

  startLightbox = async e => {
    e.preventDefault();
    if (window.innerWidth > 768) {
      let index = parseInt(e.target.dataset.image);
      await this.setState({
        isLoading: true,
        openImage: index
      });
      let lightbox = document.querySelector('.lightbox-container');
      lightbox.style.display = 'block';
    }
  };

  closeLightbox = e => {
    if (e.target.classList.contains('lightbox')) {
      e.target.parentElement.style.display = 'none';
      this.setState({ isLoading: false, openImage: 0 });
    }
    if (e.target.classList.contains('lg-close') || e.target.classList.contains('fa-times')) {
      document.querySelector('.lightbox-container').style.display = 'none';
      this.setState({ isLoading: false, openImage: 0 });
    }
  };

  prevImage = () => {
    this.setState({
      isLoading: true,
      openImage: this.state.openImage <= 1 ? this.props.images.length : this.state.openImage - 1
    });
  };

  nextImage = () => {
    this.setState({
      isLoading: true,
      openImage: this.state.openImage >= this.props.images.length ? 1 : this.state.openImage + 1
    });
  };

  render() {
    return (
      <div className='gallery'>
        <div className='container'>
          <div className='grid-gallery'>
            {this.props.images.map(el => {
              return (
                <div key={parseInt(el.id)} className={el.class ? el.class + ' imageGallery1' : 'imageGallery1'}>
                  <a onClick={this.startLightbox} data-image={parseInt(el.id)} href={el.url} title={el.alt}>
                    <img src={el.tb} data-image={parseInt(el.id)} alt={el.alt} />
                  </a>
                </div>
              );
            })}

            <div onClick={this.closeLightbox} className='lightbox-container'>
              <div className='lightbox'>
                <button onClick={this.closeLightbox} className='lg-close'>
                  <i className='fas fa-times' />
                </button>
                <button onClick={this.prevImage} className='lg-arrows lg-left'>
                  <i className='fas fa-caret-left' />
                </button>
                <button onClick={this.nextImage} className='lg-arrows lg-right'>
                  <i className='fas fa-caret-right' />
                </button>
                {this.state.isLoading && (
                  <div className='loading'>
                    <img src={process.env.PUBLIC_URL + '/Spinner-1s-200px-white.svg'} alt='' />
                  </div>
                )}
                {this.state.openImage && (
                  <img
                    onLoad={() => this.setState({ isLoading: false })}
                    src={this.props.images[this.state.openImage - 1].url}
                    alt=''
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/*Context Menu*/}
        <div className='contextmenu'>This photo is &copy; by Olczański Dom.</div>
      </div>
    );
  }

  keyUp = e => {
    if (e.key === 'a' || e.key === 'ArrowLeft') {
      this.prevImage();
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      this.nextImage();
    } else if (e.key === 'Escape') {
      document.querySelector('.lightbox-container').style.display = 'none';
    } else if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  showCopyright = e => {
    e.preventDefault();
    this.menu = document.querySelector('.contextmenu');
    this.menu.classList.toggle('contextmenu-show');
    this.menu.style.left = `${e.pageX}px`;
    this.menu.style.top = `${e.clientY}px`;
  };
  closeCopyright = () => {
    if (this.menu) {
      if (this.menu.classList.contains('contextmenu-show')) {
        this.menu.classList.remove('contextmenu-show');
      }
    }
  };

  componentDidMount() {
    this.gallery = document.querySelector('.grid-gallery');
    document.addEventListener('keydown', this.keyUp);
    document.addEventListener('click', this.closeCopyright);
    this.gallery.addEventListener('contextmenu', this.showCopyright);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyUp);
    document.removeEventListener('click', this.closeCopyright);
    this.gallery.removeEventListener('contextmenu', this.showCopyright);
  }
}
