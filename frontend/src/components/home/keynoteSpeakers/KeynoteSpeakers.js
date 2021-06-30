import React from "react";
import { Link } from 'react-router-dom';

import keynoteSpeaker from "../../../../images/keynoteImage.jpg"

const KeynoteSpeakers = () =>{

    const Cardbg = {
        backgroundColor: "#1a2132"
    }

    const ButtonTxt = {
        color: "#1a2132"
    }

    return(
        <div className="container col-lg-10 my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg" style={Cardbg}>
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-white">Kick Starters Of The Conference</h1>
                    <p className="lead text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to="/keynote">
                            <button type="button" className="btn bg-white btn-lg px-4 me-md-2 fw-bold" style={ButtonTxt}>Show Keynote Speakers</button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 pr-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={keynoteSpeaker} alt="" width="500"/>
                </div>
            </div>
        </div>
    )
}

export default KeynoteSpeakers;