import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './App.css';

function Movie({ project}) {
  if (!project) {
    return null;
  }

  const {title, description, image, genre_ids} = project;

  return (
    <Link to={`/lightbox/${genre_ids}`} style={{ textDecoration: "none" }}>
      <motion.div
        layout
        className="movie-container"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {/* <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="" className="movieImage"/> */}
        <div className="overlay">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <img src={image} alt="" className="movie-image" />
      </motion.div>
    </Link>
  );
}

export default Movie;