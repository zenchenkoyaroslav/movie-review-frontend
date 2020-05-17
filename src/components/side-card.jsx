import React from 'react'

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

export default SidebarCard