import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const placementImages = [
  { original: '/images/hotel1.jpg', thumbnail: '/images/hotel1.jpg' },
  { original: '/images/hotel2.jpg', thumbnail: '/images/hotel2.jpg' },
  { original: '/images/hotel3.jpg', thumbnail: '/images/hotel3.jpg' },
  { original: '/images/hotel4.jpg', thumbnail: '/images/hotel4.jpg' },
  { original: '/images/hotel5.jpg', thumbnail: '/images/hotel5.jpg' },
  { original: '/images/hotel7.jpg', thumbnail: '/images/hotel7.jpg' },
  { original: '/images/hotel8.jpg', thumbnail: '/images/hotel8.jpg' },
  { original: '/images/hotel9.jpg', thumbnail: '/images/hotel9.jpg' },
  { original: '/images/hotel10.jpg', thumbnail: '/images/hotel10.jpg' },
];

const PlacementGallery = () => (
  <section className="section">
    <h2>🏡 Место размещения Green Paradise и Green Paradise Deluxe</h2>
    <ImageGallery items={placementImages} />
  </section>
);

export default PlacementGallery;
