
const MovieList = (props) => {

    return(
        <>
          <h2>{props.title}</h2>
          <h3>{props.releaseDate}</h3>
          <p>{props.openingText}</p>
        </>
    )
}

export default MovieList;