import React, {useRef} from "react";

const Workshop = () =>{


    //style objects
    const Componentbg ={
        backgroundColor: "#2d415a"
    }
    //#1a2132

    const CardHeading = {
        color: "#cc9057"
    }

    const Cardbg = {
        backgroundColor: "#92757a"
    }

    const Cardbackg = {
        backgroundColor: "#000000"
    }

    return(
        <div className="container col-lg-10 rounded-3 px-4 py-4" style={Componentbg}>
            <header className="pb-3 mb-4 border-bottom">
                <span className="fs-3 text-white">WORKSHOPS</span>

            </header>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold" style={CardHeading}>CONFERENCE WORKSHOPS</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like
                        the one in previous versions of Bootstrap. Check out the examples below for how you can remix
                        and restyle it to your liking.</p>
                </div>
            </div>

            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 text-white rounded-3" style={Cardbackg}>
                        <h2>Want To Be a Part of the Conference:</h2>
                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron
                            look. Then, mix and match with additional component themes and more.</p>
                        <a href="/createWorkshop">
                            <button className="btn btn-outline-light" type="button">
                                Add you Proposal Now
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 rounded-3" style={Cardbg}>
                        <h2 className="text-white">Confused on whats in Store?</h2>
                        <p className="text-white">Or, keep it light and add a border for some added definition to the boundaries of your
                            content. Be sure to look under the hood at the source HTML here as we've adjusted the
                            alignment and sizing of both column's content for equal-height.</p>
                        <a href="/approvedWorkshops">
                            <button className="btn btn-outline-light" type="button">View Workshops</button>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="pt-3 mt-4 text-muted border-top">
            </footer>
        </div>

    );
}

export  default Workshop;