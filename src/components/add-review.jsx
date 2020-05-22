import React, {useState} from 'react';
import API from '../API'
import Alert from './alert'
import { withRouter, Redirect } from 'react-router-dom';


const AddReview = ({filmId, history}) => {

    const [rate, setRate] = useState(1);
    const [title, setTitle] = useState("Title")
    const [content, setContent] = useState("Content")
    const [error, setError] = useState('');

    const rateChange = (e) => {
        setRate(e.target.value)
        setError('')
    } 

    const contentChange = (e) => {
        setContent(e.target.value);
        setError('')
    }

    const titleChange = (e) => {
      setTitle(e.target.value);
      setError('')
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const data = {
        content : content,
        title : title,
        rate : rate,
        filmId : filmId
      }
      API.post("/reviews", data).then( data => history.push(`/films/${filmId}`)).catch(e => setError(e))
    }

    if (!localStorage.getItem("token")){
      return <Redirect to="/login"/>
    }

    return (
        <div class="col-12">  
        <h3>Add review form</h3>     
        <Alert error={error}/>       
        <form>
          <div className="form-group">
            <label for="reviewTitleInput">Review title</label>
              <input type="text" className="form-control" id="reviewTitleInput" placeholder="Title" onChange={titleChange}></input>
          </div>
          <label for="reviewRateInput">Rate</label>
          <select class="custom-select mb-3" onChange={rateChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="form-group">
            <label for="reviewTextInput">Review text</label>
              <textarea className="form-control" id="reviewTextInput" rows="3" onChange={contentChange}></textarea>
          </div>
          <div>
              <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-success" onClick={onSubmit}>Add Review</button>
          </div>
        </form>
      </div>
    )
}

export default withRouter(AddReview)