import React from "react";


const WorkshopCard = ({workshop}) =>{
    return(
        <div className={"col-sm-3"}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{workshop.title}</h5>
                    <p className="card-text">{workshop.description}</p>
                    <p className="card-text">{workshop.venue}</p>
                    <p className="card-text">{workshop.date}</p>
                </div>
            </div>
        </div>
    )
}

export  default WorkshopCard;