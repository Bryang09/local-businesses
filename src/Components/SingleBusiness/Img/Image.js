import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./Image.scss";

const Image = props => {
  const { images } = props;

  console.log(images.photos);

  const photos = images.photos;

  const imageGallery = photos.map(res => {
    return {
      original: res,
      thumbnail: res
    };
  });

  console.log(imageGallery);

  return (
    <div className="Image">
      <ImageGallery
        items={imageGallery}
        originalClass="image"
        thumbnailPosition="left"
      />
    </div>
  );
};

export default Image;
