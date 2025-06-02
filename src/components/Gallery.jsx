import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  { original: '/images/photo1.jpg', thumbnail: '/images/photo1.jpg' },
  { original: '/images/photo2.jpg', thumbnail: '/images/photo2.jpg' },
  { original: '/images/photo3.jpg', thumbnail: '/images/photo3.jpg' },
  { original: '/images/photo4.jpg', thumbnail: '/images/photo4.jpg' },
];

const Gallery = () => (
  <section className="section">
    <h2>📷 Фотогалерея</h2>
    <ImageGallery items={images} />
  </section>
);

export default Gallery;
