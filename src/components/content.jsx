import React, { Component } from 'react';
import ContentFilmCard from './content-film-card';
import api from '../API.js';
import { Link } from 'react-router-dom';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      perPage: 10,
      currentPage: 0,
      offset: 0,
    };
  }

  async componentDidMount() {
    api.get('/films').then(data => {
      this.setState({ films: data.data.content });
    });
  }

  paginationComp = () => {
    return (
      <ul className="pagination justify-content-center">
        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
      </ul>
    );
  }

  render() {
    let filmsComponent = this.state.films.map((film) =>
      <ContentFilmCard
        filmId={film.id}
        filmTitle={film.title}
        filmYear={film.year}
        filmDescription={film.description}
        filmPoster={film.poster}
      />
    );

    return (
      <>
        <div className="col-md-12 col-lg-12">
          <div className="row">
            {filmsComponent}
          </div>
          <div className="w-100 text-center">
            <nav aria-label="Page navigation example">
              {this.paginationComp()}
            </nav>
          </div>
        </div>
      </>
    );
  }
}