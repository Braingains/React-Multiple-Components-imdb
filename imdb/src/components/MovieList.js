import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <li>
                <Movie name={movie.name} url={movie.url} key={movie.id}></Movie>
            </li>
        )
    });

    return (
        <>
        {movieNodes}
        </>
    )
}

export default MovieList;