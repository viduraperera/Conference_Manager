import React from "react";

const Research = () =>{

    //style objects
    const HeadingText = {
        color: "#cc9057"
    }

    const HeadingText2 ={
        color: "#92757a"
    }

    const CardButton = {
        backgroundColor: "#cc9057"
    }

    const CardButton2 = {
        backgroundColor: "#92757a"
    }

    const CardButton3 = {
        backgroundColor: "#000000"
    }

    const MainDiv = {
        marginTop: "20px"
    }

    return(

        <div className="col-lg-10 mx-auto px-4 py-md-5 bg-white rounded-3" style={MainDiv}>
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                <span className="fs-4">RESEARCH</span>

            </header>

            <main>
                <h1 style={HeadingText}>Get In Touch With the latest Research</h1>
                <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready
                    files with this barebones example featuring some basic HTML and helpful links. Download all our
                    examples to get started.</p>

                <div className="mb-5">
                    <a href="/approvedResearch" className="btn text-white btn-lg px-4" style={CardButton}>Browse Latest Research</a>
                </div>

                <hr className="col-3 col-md-2 mb-5"></hr>

                <div className="row g-5">
                    <div className="col-md-6">
                        <h2>Whats in Store</h2>
                        <p>Ready to beyond the starter template? Check out these open source projects that you can
                            quickly duplicate to a new GitHub repository.</p>
                        <ul className="icon-list">
                            <a href="/approvedResearch">
                                <button type="button" className="btn text-white" style={CardButton3}>Show Research</button>
                            </a>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h2 style={HeadingText2}>Contribute With Your Own Research</h2>
                        <p>Read more detailed instructions and documentation on using or contributing to
                            Bootstrap.</p>
                        <ul className="icon-list">
                            <a href="/call_for_research_papers">
                                <button type="button" className="btn text-white" style={CardButton2}>How to Submit your papers</button>
                            </a>
                        </ul>
                    </div>
                </div>
            </main>
            <footer className="pt-5 my-5 text-muted border-top">
            </footer>
        </div>
    )
}

export default Research;