import React from 'react';
import { withRouter } from 'react-router-dom';

const ContentFilmCard = ({ filmId, filmTitle, filmYear, filmDescription, filmPoster, history }) => {
    
    return (
        <div className="col-sm-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{filmTitle}</h3>
                    <div className="mb-1 text-muted">{filmYear}</div>
                    <p className="card-text mb-auto">{filmDescription}</p>
                    <button className="btn btn-block btn-outline-danger" onClick={() => history.push(`/films/${filmId}`)}>Read more</button>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width="200" src={filmPoster} alt={filmTitle}></img>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ContentFilmCard)