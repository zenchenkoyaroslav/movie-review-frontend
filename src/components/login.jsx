import React, { Component } from 'react';
import '../API.js';
import api from '../API.js';
import { withRouter } from 'react-router-dom';
import Alert from './alert'

 class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      error : '',
    }
  }


  onLoginChanged = (e) => {
    let username = e.target.value
    this.setState({
      username: username
    })
  }

  onPasswordChanged = (e) => {
    let password = e.target.value
    this.setState({
      password: password
    })
  }

  onClick = (e) => {

    let username = this.state.username
    let password = this.state.password
    let str = {username: username, password: password};

    var strJson = JSON.stringify(str);
    api.post('/users/login', strJson)
    .then(data => {    
        localStorage.setItem("token", data.data.token)     
        this.props.history.push("/")
    })
    .catch(e => {
      this.setState({
        error : e
      })
    });  
  }


  render() {  
    return(
      <div className="col-md-12 col-lg-12">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
          <Alert error={this.state.error}/>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-alt"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Login" onChange={this.onLoginChanged}></input>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="Password" onChange={this.onPasswordChanged}></input>
            </div>
            <div className="input-group mb-3">
              <button type="button" className="btn btn-danger w-100" onClick={this.onClick}>Login</button>
            </div>
          </div>
        </div>
      </div>);
  } 
}

export default withRouter(Login)

