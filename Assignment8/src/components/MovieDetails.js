import React from 'react'
 import { useParams, Link, useNavigate } from 'react-router-dom'

import image1 from '../image/th.jpeg'
import image2 from '../image/th.jpg'
import image3 from '../image/tumbaad.png'
import image4 from '../image/uri.png'


const movies=[
  { id: 1, title: 'The Conjuring', imgSrc: image1, description: 'Description of The Conjuring:-----"The Conjuring" is a popular horror movie that follows the real-life experiences of paranormal investigators Ed and Lorraine Warren. In the film, they help a family terrorized by a dark presence in their farmhouse. The movie is known for its intense atmosphere, creepy moments, and jump scares. It is definitely a spine-chilling watch for horror fans!' },
  { id: 2, title: 'Major', imgSrc: image2, description: 'Description of movie Major:----"The movie Major" is a biographical sports drama film based on the life of Indian former cricketer and captain of the Indian cricket team, Major Rajesh Singh. It showcases his journey, struggles, and achievements in the world of cricket. The film highlights his determination, passion for the sport, and the challenges he overcame to become a successful cricketer. It is an inspiring and emotional story that resonates with audiences.'},
  { id: 3, title: 'Tumbaad', imgSrc: image3, description:'Description of the movie Tumbaad:------"The movie Tumbbad" is a unique Indian horror film that blends elements of fantasy and mythology. It tells the story of a man greed and the consequences that follow across multiple generations. The film is visually stunning and offers a dark and eerie atmosphere that keeps viewers on the edge of their seats. "Tumbbad" is known for its intriguing storyline, rich visuals, and haunting themes.' },
  { id: 4, title: 'URI', imgSrc: image4, description:'Description of the movie URI:------"The movie Uri" is a Bollywood action film based on the true events of the 2016 Uri attack in Jammu and Kashmir, India. It follows the Indian Army retaliatory surgical strike on terrorist launch pads across the Line of Control. The film showcases the bravery, strategic planning, and execution of the military operation. "Uri" is known for its patriotic themes, intense action sequences, and strong performances by the cast. It is a gripping and engaging watch for fans of action movies.'},
];


function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  return (
    <div className="movie-details">
      <img src={movie.imgSrc} alt={movie.title} />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
     <div className='link'><Link to={`/book/${movie.id}`}>Book Seat</Link>
     </div>
    </div>
  );
}
export default MovieDetails;