import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos }) => {
  return (
    <>
      <ul className="gallery">
        {photos.map(({ id, largeImageURL, webformatURL }) => (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
          />
        ))}
      </ul>
    </>
  );
};
