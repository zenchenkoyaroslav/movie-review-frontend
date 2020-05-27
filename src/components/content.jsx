import React, { Component } from 'react';
import ContentFilmCard from './content-film-card';
import api from '../API.js';
import { Link } from 'react-router-dom';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      perPage: 6,
      currentPage: 0,
      offset: 0,
      sort: "year",
      desc: true
    };
  }

  getRequest(){
    let request = `/films?page=${this.state.actualPage}&size=${this.state.perPage}&sort=${this.state.sort}`
    if(this.state.desc){
      request += `,desc`
    }
    return (request);
  }

  async componentDidMount() {
    this.readFilms(0);
  }

  paginationComp = () => {
    let pagesNumbers = []
    for (let i = 1; i <= this.state.totalPages; i++) {
        pagesNumbers.push(<li className="page-item"><button type="button" value={i} onClick={this.onPageChange} class="btn btn-outline-info">{i}</button></li>);
    }
    return (
      <ul className="pagination justify-content-center">
        {pagesNumbers}
      </ul>
    );
  }

  sortingComp = () => {
    return (
      <p>
        <button type="button" value="title" onClick={this.onSortChange} class="btn btn-outline-info">Title</button>
        <button type="button" value="year" onClick={this.onSortChange} class="btn btn-outline-info">Year</button>
      </p>
    );
  }

  onPageChange = (e) => {
    let pageNumber = e.target.value - 1
    this.setState({actualPage: pageNumber})
    this.readFilms()
  }

  onSortChange = (e) => {
    let sortBy = e.target.value
    this.setState({sort: sortBy})
    this.readFilms()
  }

  readFilms() {
    this.setState({desc: !this.state.desc})
    api.get(this.getRequest()).then(data => {
      this.setState({
      films: data.data.content,
        totalPages: data.data.totalPages,
        totalItemsCount: data.data.totalItemsCount,
        size: data.data.size
      });
    });
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
          <div class="col px-md-5" className="w-100 text-center">
            <div class="p-3 border bg-light">
              {this.sortingComp()}
            </div>
          </div>
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