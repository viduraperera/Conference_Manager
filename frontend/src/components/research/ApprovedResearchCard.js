import React from "react";
import research_paper from "../../../images/Paper.png"
import "./reserach.css"

const ApprovedResearchCard = ({research}) =>{

    //style objects
    const CardBody = {
        backgroundColor: "#f3f4ee"
    }

    const Heading = {
        color: "#cc9057"
    }

    return(
        <div className="card mx3" style={CardBody}>
            <img src={research_paper} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title fw-5" style={Heading}>{research.title}</h5>
                    <p className="card-text text-dark">{research.description}</p>
                    <a href={`http://localhost:5000/${research.path}`} className="btn btn-primary">Click To Download</a>
                </div>
        </div>
    )
}

export default ApprovedResearchCard;

