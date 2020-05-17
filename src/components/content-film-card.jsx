import React from 'react';

const ContentFilmCard = ({ filmTitle, filmGenre, filmYear, filmDescription, filmPoster }) => {

    return (
        <div className="col-sm-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{filmTitle}</h3>
                    <div className="mb-1 text-muted">{filmYear}</div>
                    <p className="card-text mb-auto">{filmDescription}</p>
                    <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal">
                        Read more
              </button>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width="200" src={filmPoster}></img>
                </div>
            </div>
        </div>
    );
}

export default ContentFilmCard