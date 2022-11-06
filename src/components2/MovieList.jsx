import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import './componentscss.css'


function MovieList(){
    const movies = useSelector((state) => state.MovieReducer.Data);
    console.log(movies)
    return(
        <div>
            <h1 className="MovieList">Tuni Best</h1>
            <div className="cardBox">{movies.map((movie)=> (<MovieCard movie={movie} />))}</div>
            
        </div>
    )


}
export default MovieList