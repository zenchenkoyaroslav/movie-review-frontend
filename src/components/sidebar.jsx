
import React from 'react';

const Sidebar = (props) => {
    return (
        <div className="col-md-4 col-lg-3">
            <SidebarCard cardTitle="Year"
                cardContent="year" />
            <SidebarCard cardTitle="Country"
                cardContent="country" />
            <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-success">Apply</button>
            <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-danger">Reset</button>
        </div>
    )
}

const SidebarCard = ({ cardTitle, cardContent }) => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h5 className="my-0 font-weight-normal">{cardTitle}</h5>
            </div>
            <div className="card-body">
                {cardContent}
            </div>
        </div>
    )
}

export default Sidebar

