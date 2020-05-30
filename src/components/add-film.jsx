import React, {useState, useEffect} from 'react';
import API from '../API'
import Alert from './alert'
import { withRouter, Redirect } from 'react-router-dom';

const AddFilm = ({filmId, history}) => {
    const [title, setTitle] = useState("")
    const [description, setDescriprion] = useState("")
    const [year, setYear] = useState()
    const [country, setCountry] = useState("")
    const [poster, setPoster] = useState("")

    const [film, setFilm] = useState('')
    const [error, setError] = useState('')

    
    useEffect(() => {
      async function getFilm() {
        let f = await API.get(`/films/${filmId}`).then(data => {return data.data})
        setFilm(f);
      }

      if(filmId){
        getFilm()
        setTitle(film.title)
        setYear(film.year)
        setDescriprion(film.description)
        setCountry(film.country)
        setPoster(film.poster)
      }
    });

    const descriptionChange = (e) => {
        setDescriprion(e.target.value)
        setError('')
    } 

    const posterChange = (e) => {
        setPoster(e.target.value)
        setError('')
    }

    const yearChange = (e) => {
        let year = Number(e.target.value)
        setYear(year)
        setError('')
    }

    const titleChange = (e) => {
      setTitle(e.target.value)
      setError('')
    }

    const countryChange = (e) => {
      setCountry(e.target.value)
      setError('')
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const data = {
        title : title,
        year : year,
        poster : poster,
        description : description,
        country : country
      }
      if(filmId){
        API.put(`/films/${filmId}`, data).then( data => history.push(`/films/${filmId}`)).catch(e => setError(e))
      } else{
        API.post("/films", data).then( data => history.push(`/`)).catch(e => setError(e))
      }
    }

    return (
        <div class="col-12">  
        <h3>Add New Film</h3>     
        <Alert error={error}/>       
        <form>
          <div className="form-group">
            <label for="filmTitleInput">Title</label>
              <input type="text" className="form-control" defaultValue={title} id="filmTitleInput" placeholder="Title" onChange={titleChange}></input>
          </div>
          <div className="form-group">
            <label for="filmYearInput">Year</label>
              <input type="text" className="form-control" defaultValue={year} id="filmYearInput" placeholder="Year" onChange={yearChange}></input>
          </div>
          <div className="form-group">
            <label for="filmCountryInput">Country</label>
              <input type="text" className="form-control" defaultValue={country} id="filmCountryInput" placeholder="Country" onChange={countryChange}></input>
          </div>
          <div className="form-group">
            <label for="filmPosterInput">Poster</label>
              <input type="text" className="form-control" defaultValue={poster} id="filmPosterInput" placeholder="Image Link" onChange={posterChange}></input>
          </div>
          <div className="form-group">
            <label for="filmDescriptionInput">Descriprion</label>
              <textarea className="form-control" defaultValue={description} id="filmDescriptionInput" rows="3" onChange={descriptionChange}></textarea>
          </div>
          <div>
              <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-success" onClick={onSubmit}>Add Film</button>
          </div>
        </form>
      </div>
    )
}

export default withRouter(AddFilm)