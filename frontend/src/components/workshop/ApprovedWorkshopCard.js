import React from "react";

const ApprovedWorkshopCard = ({workshop}) =>{
    return(
        <div className={"col-md-6 dg-dark jumbotron"}>
            <div className="card h-100 p-5 dg-dark rounded-3">
                <div className="card-body dg-dark">
                    <h5 className="card-title">{workshop.title}</h5>
                    <p className="card-text">{workshop.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ApprovedWorkshopCard;