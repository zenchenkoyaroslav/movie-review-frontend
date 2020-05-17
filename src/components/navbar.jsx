import React, { Component } from 'react';


export default class Navbar extends Component {


    dataHeaderTaglines = [
        "Cinema finder through millions of moovies.",
        "DiCaprio finally got an oscar!"
    ];

    dataTopnavlinks = [
        {
            "title": "Top",
            "href": "#top",
            "class": "p-2 text-dark"
        },
        {
            "title": "All",
            "href": "#all",
            "class": "p-2 text-dark"
        },
        {
            "title": "Favourites",
            "href": "#favourites",
            "class": "p-2 text-dark"
        }
    ];

    TopNav = ({ links }) => <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <nav className="my-2 my-md-0">
        </nav>
        <a className="btn btn-outline-danger ml-4" href="#">Log in</a>
        <a className="btn btn-outline-danger ml-4" href="#">Logout</a>
    </div>

    Search = () =>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2"></input>
            <div className="input-group-append">
                <button className="btn btn-outline-danger" type="button" id="button-addon2">Search</button>
            </div>
        </div>

    Header = ({ title, taglines }) =>
        <div className="container px-3 py-3 pt-md-3 pb-md-3 mx-auto text-center">
            <h1 className="display-4"><i className="fas fa-film"></i> {title}</h1>
            <p className="lead">
                {taglines.map((tagline, i) =>
                    <span key={i}>{tagline}</span>
                )}</p>
            <this.Search/>
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
