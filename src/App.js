
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./Movie";
import Filter from "./Filter";
import LightboxPage from "./LightboxPage"; // Create LightboxPage component
import { motion, AnimatePresence } from "framer-motion";
import projects from "./_data/projects.json";
import './App.css';


function App() {
  const [popular, setPopular] = useState([]); //all movies
  const [filtered, setFiltered] = useState([]); //Filter
  const [activeGenre, setActiveGenre] = useState(0); // button active

  useEffect(() => {
    setPopular(projects);
    setFiltered(projects);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/lightbox/:category" element={<LightboxPage />} />
        <Route
          path="/"
          element={
            <div className="App">
              <Filter
                popular={popular}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
              />
              <motion.div layout className="popular-movies">
                <AnimatePresence>
                  {filtered.map((project) => (
                    <Movie key={project.id} project={project} activeGenre={activeGenre}/>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
