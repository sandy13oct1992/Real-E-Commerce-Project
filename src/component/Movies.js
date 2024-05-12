import { useState } from "react";
import MovieList from "./MovieList";

const DummyMovies = [{
  id:1,
  title:'Some dummy movie',
  OpeningText: "This is the Opening Text of Movie",
  ReleaseDate : '21-04-2024'
},
{id:2,
  title:'Some dummy movie2',
  OpeningText: "This is the Opening Text of Movie",
  ReleaseDate : '21-04-2024',
}
]

const Movies =() => {
    //  const [movi, setMovi] = useState([]);

    // function fetchMoviesHandler() {
    //    fetch('https://swapi.dev/api/films/').then(response =>{
    //     return response.json();
    //    }).then((data) => {
    //     setMovi(data.results)
    //    })

    
    return
        <div>
         
            <button>Fetch Movie</button>
        
         </div>
        
    
} 
export  default Movies;

