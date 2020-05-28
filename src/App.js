import React from 'react';
import Navbar from './components/navbar'
import Content from './components/content'
import NotFound from './components/notfound'
import Login from './components/login'
import AddFilm from './components/add-film'
import FilmFull from './components/film-full'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AddReview from './components/add-review';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="container px-3 py-3 pt-md-2 pb-md-4 mx-auto">
          <div className="row">
              <Switch>
                <Route refresh exact path="/" component={Content} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/top" component={Content} />
                <Route exact path="/all" component={Content} />
                <Route exact path="/add_film" component={AddFilm} />
                <Route exact path="/films/:filmId" render={({match}) => <FilmFull filmId={match.params.filmId}/>} />
                <Route exact path="/review/:filmId" render={({match}) => <AddReview filmId={match.params.filmId}/>} />
                <Route component={NotFound} />
              </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
