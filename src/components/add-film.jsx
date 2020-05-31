import React, {useState, useEffect} from 'react';
import API from '../API'
import Alert from './alert'
import { withRouter } from 'react-router-dom';

const AddFilm = ({filmId, history}) => {
    const [title, setTitle] = useState("")
    const [description, setDescriprion] = useState("")
    const [year, setYear] = useState()
    const [country, setCountry] = useState("")
    const [poster, setPoster] = useState("")
    const [submitText, setSubmitText] = useState("Add Film")

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
        setSubmitText("Edit Film")
      }
    }, [filmId, film.title, film.year, film.description, film.country, film.poster]);

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

    
    const onSubmit = async (e) => {
      e.preventDefault();
      const data = {
        title : title,
        year : year,
        poster : poster,
        description : description,
        country : country
      }
      if(filmId!=null){
        await API.put(`/films/${filmId}`, data).then( data => history.push(`/films/${filmId}`)).catch(e => setError(e))
      } else{
        await API.post("/films", data).then( data => history.push(`/`)).catch(e => setError(e))
      }
    }

    return (
        <div className="col-12">  
        <h3>Add New Film</h3>     
        <Alert error={error}/>       
        <form>
          <div className="form-group">
            <label htmlFor="filmTitleInput">Title</label>
              <input type="text" className="form-control" defaultValue={title} id="filmTitleInput" placeholder="Title" onChange={titleChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="filmYearInput">Year</label>
              <input type="text" className="form-control" defaultValue={year} id="filmYearInput" placeholder="Year" onChange={yearChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="filmCountryInput">Country</label>
              <input type="text" className="form-control" defaultValue={country} id="filmCountryInput" placeholder="Country" onChange={countryChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="filmPosterInput">Poster</label>
              <input type="text" className="form-control" defaultValue={poster} id="filmPosterInput" placeholder="Image Link" onChange={posterChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="filmDescriptionInput">Descriprion</label>
              <textarea className="form-control" defaultValue={description} id="filmDescriptionInput" rows="3" onChange={descriptionChange}></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-success" onClick={onSubmit}>{submitText}</button>
          </div>
        </form>
      </div>
    )
}

export default withRouter(AddFilm)