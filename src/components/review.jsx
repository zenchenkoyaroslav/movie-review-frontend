import React from 'react';

const Review = ({title, content, color, rate, name}) => {

    return (<div className="row my-3">
    <div className="col-12">
      <h6 className={color}>{title} <span>{rate} out of 10 by {name}</span></h6> 
    </div>
    <div className="col-12 px-5">
      {content}
    </div>
  </div>)
      
}

export default Review