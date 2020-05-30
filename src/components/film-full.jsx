import React, {useState, useEffect} from 'react';
import Review from './review'
import Cast from './cast'
import API from '../API'
import Alert from './alert'

const FilmFull = ({filmId}) => {
    const [film, setFilm] = useState('');
    const [reviews, setReviews] = useState([])
    const [cast, setCast] = useState([])
    const [edit, setEdit] = useState('')

    const [error, setError] = useState('')

    useEffect(() => {
      if (!film){
        getFilm()
      }
      getEdit()
    }, [])

    const getEdit = async () => {
      let u = await API.get("/users/current")
      if(u.data.role === "ADMIN"){
        setEdit(<a href={`/add_film/${film.id}`} type="button" className="btn btn-outline-danger mb-3">Edit</a>)
      }
    }

    const getFilm = async () => {
      let f = await API.get(`/films/${filmId}`).then(data => {return data.data})
      setFilm(f);

      let reviewsComp = f.reviews.map((rev) => { return <Review {...rev}/>})
        setReviews(reviewsComp)

      let castComp = f.actors.map((cast) => { return <Cast {...cast}/>})
        setCast(castComp)
    }

    return (
      <div className="col-md-12 col-lg-12">
        <Alert error={error}/>  
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <div className="row">
              <div className="col d-flex justify-content-between">
                <a href="/" type="button" className="btn btn-outline-danger mb-3">
                  Back to catalog
                </a>
                {edit}
                <a href={`/review/${film.id}`} type="button" className="btn btn-outline-danger mb-3">
                  Add review
                </a>
              </div>
            </div>
            <h3 className="mb-0">{film.title}</h3>
            <div className="mb-1 text-muted">{film.year}</div>
            <p className="card-text mb-auto">{film.description}</p>
            <div className="mt-5 mb-0">
              <h5>Cast</h5>
              {cast}
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
              <img width="200" alt={film.title} src={film.poster}></img>
          </div>
        </div>
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <h5 className="mb-0">Reviews</h5>
              {reviews}
          </div>
        </div>
        

        
      </div>
    )
}

export default FilmFull