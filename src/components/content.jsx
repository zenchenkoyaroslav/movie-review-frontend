import React, { Component } from 'react';
import ModalFilm from './modal-film'
import ContentFilmCard from './content-film-card'

export default class Content extends Component {


    render() {
        return(
            <div className="col-md-8 col-lg-9">
          <div className="row">
            <ContentFilmCard
              filmTitle="xd"
              filmYear="2020"
              filmDescription="qwe test film description"
              filmPoster="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8e08470b-0241-47f4-9ee6-32406da24df5/360"/>
            
            <ContentFilmCard
              filmTitle="xd"
              filmYear="2020"
              filmDescription="qwe test film description"
              filmPoster="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8e08470b-0241-47f4-9ee6-32406da24df5/360"/>
            
            <ContentFilmCard
              filmTitle="xd"
              filmYear="2020"
              filmDescription="qwe test film description"
              filmPoster="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8e08470b-0241-47f4-9ee6-32406da24df5/360"/>
          </div>
          
          <ModalFilm
            filmTitle="Film Title"
            filmDescription="Film Description"
            filmPoster="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/63771e4c-3614-449c-a420-bcaf3288130a/360"
            filmYear="2020"/>
        </div>);
    }
}

