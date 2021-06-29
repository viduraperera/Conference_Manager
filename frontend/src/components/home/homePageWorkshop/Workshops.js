import React, {useRef} from "react";
import ModelPopup from "../../modelPopup/modelPopup";

const Workshop = () =>{

    const modelRef = useRef();

    const openModel = () =>{
        console.log(modelRef.current)
        modelRef.current.openModel();
    }

    return(
        <div className="container py-4">
            <header className="pb-3 mb-4 border-bottom">
                    <span className="fs-4">WORKSHOPS</span>

            </header>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">CONFERENCE WORKSHOPS</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like
                        the one in previous versions of Bootstrap. Check out the examples below for how you can remix
                        and restyle it to your liking.</p>
                </div>
            </div>

            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>Want To Be a Part of the Conference:</h2>
                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron
                            look. Then, mix and match with additional component themes and more.</p>
                            <button onClick={openModel} className="btn btn-outline-light" type="button">
                                Add you Proposal Now
                            </button>
                        <ModelPopup ref={modelRef}>
                            <h1>Model Header</h1>
                            <p>hello</p>
                            <button onClick={() => modelRef.current.close()}>
                                Close
                            </button>
                            <a href="/createWorkshop">
                                <button>open</button>
                            </a>
                        </ModelPopup>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3">
                        <h2>Confused on whats in Store?</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your
                            content. Be sure to look under the hood at the source HTML here as we've adjusted the
                            alignment and sizing of both column's content for equal-height.</p>
                        <a href="/approvedWorkshops">
                            <button className="btn btn-outline-secondary" type="button">View Workshops</button>
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