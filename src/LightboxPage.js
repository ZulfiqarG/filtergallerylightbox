import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import projects from "./_data/projects.json";

function LightboxPage() {
  const { category } = useParams();
  const filteredImages = projects.filter(
    (project) => project.genre_ids.toString() === category
  );

  const images = filteredImages.map((project) => ({
    original: project.image,
    thumbnail: project.image2,
    // description: project.title,
  }));

  return (
    <div>
      {/* <h1>{category === "0" ? "All" : category}</h1> */}
      <Gallery items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true} />
    </div>
  );
}

export default LightboxPage;