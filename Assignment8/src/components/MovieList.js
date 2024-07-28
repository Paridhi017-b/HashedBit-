import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../image/th.jpeg'
import image2 from '../image/th.jpg'
import image3 from '../image/tumbaad.png'
import image4 from '../image/uri.png'


const movies = [
  { id: 1, title: 'The Conjuring', imgSrc: image1 },
  { id: 2, title: 'Major', imgSrc: image2 },
  { id: 3, title: 'Tumbaad', imgSrc: image3 },
  { id: 4, title: 'URI', imgSrc: image4 },
];

const MovieList = () => (
  <div className="movie-list">
    {movies.map((movie) => (
      <div key={movie.id} className="movie-item">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default MovieList;

