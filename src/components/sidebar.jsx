
import React from 'react';
import SidebarCard from './side-card'

const Sidebar = (props) => {
    return (
        <div className="col-md-4 col-lg-3">
            <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-success">Apply</button>
            <button type="button" className="btn btn-lg mb-4 btn-block btn-outline-danger">Reset</button>
            <SidebarCard cardTitle="Year"
                cardContent="year" />
            <SidebarCard cardTitle="Country"
                cardContent="country" />
        </div>
    )
}

export default Sidebar

