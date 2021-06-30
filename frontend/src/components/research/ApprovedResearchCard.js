import React from "react";
import research_paper from "../../../images/Paper.png"
import "./reserach.css"

const ApprovedResearchCard = ({research}) =>{
    console.log(research)
    return(
        <div className="card">
            <img src={research_paper} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{research.title}</h5>
                    <p className="card-text">{research.description}</p>
                    <a href={`http://localhost:5000/${research.path}`} className="btn btn-primary">Click To Download</a>
                </div>
        </div>
    )
}

export default ApprovedResearchCard;

