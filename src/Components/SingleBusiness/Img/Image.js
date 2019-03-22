import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./Image.scss";

const Image = props => {
  const { images } = props;

  const photos = images.photos;

  const width = window.innerWidth;

  const imageGallery = photos.map(res => {
    return {
      original: res,
      thumbnail: res
    };
  });

  return (
    <div className="Image">
      <ImageGallery
        items={imageGallery}
        originalClass="image"
        thumbnailPosition="left"
        lazyLoad={true}
        showFullscreenButton={false}
        showThumbnails={width <= 812 ? false : true}
      />
    </div>
  );
};

export default Image;
