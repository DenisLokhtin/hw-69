import React from 'react';
import './MovieCard.css'
import {useSelector} from "react-redux";

const MovieCard = (props) => {
    const film = useSelector(state => state.film);

    const image = (data) => {
        if (data) {
            return (
                <div>
                    <img src={data.medium} alt="img"/>
                </div>
            )
        }
    };

    const printFilms = () => {
        return film.map(film => {
            return (
                <div key={film.show.name} className="card">
                    {image(film.show.image)}
                    <div className="text">
                        <h3>{film.show.name}</h3>
                        <div dangerouslySetInnerHTML={{__html: film.show.summary}}/>
                        <p>Language: {film.show.language}</p>
                        <p>Runtime: {film.show.averageRuntime}</p>
                        <p>Status: {film.show.status}</p>
                        <p>Premiered: {film.show.premiered}</p>
                        <p>Ended: {film.show.ended}</p>
                        <p>Rating: {film.show.rating.average}</p>
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="container">
            <div className="container-inner">
                {printFilms()}
            </div>
        </div>
    )
};

export default MovieCard;