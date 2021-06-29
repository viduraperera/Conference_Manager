import React from "react";

const ApprovedResearchCard = ({research}) =>{
    console.log(research)
    return(
        <div className={"col-md-6 dg-dark jumbotron"}>
            <div className="card h-100 p-5 dg-dark rounded-3">
                <div className="card-body dg-dark">
                    <h5 className="card-title">{research.title}</h5>
                    <p className="card-text">{research.description}</p>
                    <a href= {`http://localhost:5000/${research.path}`}>link</a>
                </div>
            </div>
        </div>
    )
}

export default ApprovedResearchCard;