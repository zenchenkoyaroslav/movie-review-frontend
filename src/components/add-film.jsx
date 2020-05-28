import React, {useState} from 'react';
import API from '../API'
import Alert from './alert'
import { withRouter, Redirect } from 'react-router-dom';

const AddFilm = ({history}) => {
    const [title, setTitle] = useState("Title")
    const [description, setDescriprion] = useState("Descriprion")
    const [year, setYear] = useState(2020)
    const [poster, setPoster] = useState("")
    const [error, setError] = useState('')

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
        setYear(year);
        setError('')
    }

    const titleChange = (e) => {
      setTitle(e.target.value);
      setError('')
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const data = {
        title : title,
        year : year,
        poster : poster,
        description : description,
        country : "USA"
      }
      API.post("/films", data).then( data => history.push(`/films`)).catch(e => setError(e))
    }

    return (
        <div class="col-12">  
        <h3>Add New Film</h3>     
        <Alert error={error}/>       
        <form>
          <div className="form-group">
            <label for="filmTitleInput">Title</label>
              <input type="text" className="form-control" id="filmTitleInput" placeholder="Title" onChange={titleChange}></input>
          </div>
          <div className="form-group">
            <label for="filmYearInput">Year</label>
              <input type="text" className="form-control" id="filmYearInput" placeholder="Year" onChange={yearChange}></input>
          </div>
          <div className="form-group">
            <label for="filmPosterInput">Poster</label>
              <input type="text" className="form-control" id="filmPosterInput" placeholder="Image Link" onChange={posterChange}></input>
          </div>
          <div className="form-group">
            <label for="filmDescriptionInput">Descriprion</label>
              <textarea className="form-control" id="filmDescriptionInput" rows="3" onChange={descriptionChange}></textarea>
          </div>
          <div>
              <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-success" onClick={onSubmit}>Add Film</button>
          </div>
        </form>
      </div>
    )
}

export default withRouter(AddFilm)