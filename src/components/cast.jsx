import React from 'react';

const Cast = ({id, name, photo}) => {

    return (
      <img key={id} className="img-thumbnail mr-2"  width="80" src={photo} alt={name} title={name}></img>
  )      
}

export default Cast