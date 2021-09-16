import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => (
    <div className="container">
        <div className="container-inner">
            <div className="card">
                <div>
                    <img src="" alt="img"/>
                </div>
                <div>
                    <h3>Movie</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quia?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, repellat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, veniam.</p>
                </div>
            </div>
        </div>
    </div>
);

export default MovieCard;