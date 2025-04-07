import ImageGallery from 'react-image-gallery';
import './ImageGallery.css'
import 'react-image-gallery/styles/css/image-gallery.css';
function MyGallery() {
  const images = [
    {
      original: 'src/assets/image1.jpeg',
      thumbnail: 'src/assets/image1-thumbnail.jpeg',
      description: 'Teaching Building'
    },
    {
        original: 'src/assets/image2.jpeg',
        thumbnail: 'src/assets/image2.jpeg',
        description: 'Main Gate',
    },
    {
        original: 'src/assets/image3.jpeg',
        thumbnail: 'src/assets/image3-thumbnail.jpeg',
        description: 'Dormitory Building',
    }
  ];
  const thumbnailWidth = 100; // Specify the desired thumbnail width
  const thumbnailHeight = 100; // Specify the desired thumbnail height

  return (
    <div className='ImageGallery'>
        <h2>School Gallery</h2>
      <ImageGallery
        items={images}
        originalHeight={thumbnailHeight} 
        originalWidth={thumbnailWidth}
      />
    </div>
  );
}

export default MyGallery;
