import React, { Component } from 'react';
import ContentFilmCard from './content-film-card';
import api from '../API.js';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      perPage: 6,
      currentPage: 0,
      offset: 0,
      sort: "year",
      desc: false
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
        pagesNumbers.push(<li className="page-item"><button type="button" value={i} onClick={this.onPageChange} className="btn btn-outline-info">{i}</button></li>);
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
        <button type="button" value="title" onClick={this.onSortChange} className="btn btn-outline-info">Title</button>
        <button type="button" value="year" onClick={this.onSortChange} className="btn btn-outline-info">Year</button>
        <button type="button" onClick={this.onDescChange} className="btn btn-outline-info">Reverse order</button>
      </p>
    );
  }

  onPageChange = async (e) => {
    let pageNumber = e.target.value - 1
    await this.setState({actualPage: pageNumber})
    this.readFilms()
  }

  onSortChange = async (e) => {
    let sortBy = e.target.value
    await this.setState({sort: sortBy})
    this.readFilms()
  }

  onDescChange = async (e) => {
    await this.setState({desc: !this.state.desc})
    this.readFilms()
  }

  readFilms() {
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
          <div className="col px-md-5">
            <div className="w-100 text-center">
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