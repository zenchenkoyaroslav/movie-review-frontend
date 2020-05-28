import React, { Component } from 'react';
import api from '../API.js';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            username: ''
        }
    }

    async componentDidMount() {
        this.checkLogin();
    }

    checkLogin = async () => {
        if (localStorage.getItem("token")){
            try {
                let response = await api.get("/users/current")
                this.setState({
                    isLogged : true,
                    username : response.data.name
                })
            } catch (error){
                localStorage.removeItem("token");
                this.setState({
                    isLogged : false,
                    username : ''
                })
            }
        } else {
            this.setState({
                isLogged : false,
                username : ''
            })
        }
    }

    dataHeaderTaglines = [
        "Cinema finder through millions of movies. "
    ];

    onLogout = (e) => {    
        api.post('/users/logout', "").then(data => {            
            this.setState({isLogged:false});
            localStorage.removeItem('token');
        }).catch(this.setState({isLogged:true}));  
    }
    
    TopNav = () => {
        let loginButton;
        let addFilmButton;
        if (this.state.isLogged) {
            loginButton = <a className="btn btn-outline-danger ml-4" href="/" onClick={this.onLogout}>Logout</a>;
            if(this.state.username === "Admin"){
                addFilmButton = <a className="btn btn-outline-danger ml-4" href="/add_film">Add Film</a>;
            }
        } else {
            loginButton = <a className="btn btn-outline-danger ml-4" href="/login">Log in</a>;
        }
        
        return (
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <nav className="my-2 my-md-0"></nav>
                {loginButton}
                {addFilmButton}
            </div>
        );
    }

    Header = ({ title, taglines }) =>
        <div className="container px-3 py-3 pt-md-3 pb-md-3 mx-auto text-center">
            <a href="/" className="text-dark"><h1 className="display-4"><i className="fas fa-film"></i> {title}</h1></a>
            <p className="lead">
                {taglines.map((tagline, i) =>
                    <span key={i}>{tagline}</span>
                )}</p>
        </div>

    render() {
        return (
            <div>
                <this.TopNav links={this.dataTopnavlinks} />
                <this.Header title="Cinder" taglines={this.dataHeaderTaglines} />
            </div>
        )
    }

}
