import React from 'react';

const Review = ({id, title, content, color, rate, userFullname}) => {

    return (
      <div key={id} className="row my-3">
        <div className="col-12">
          <h6 className={color}>{title} <span>{rate} out of 5 by {userFullname}</span></h6> 
        </div>
        <div className="col-12 px-5">
          {content}
        </div>
      </div>
  )      
}

export default Review