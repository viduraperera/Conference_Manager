import React from "react";

const Research = () =>{
    return(
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                    <span className="fs-4">RESEARCH</span>

            </header>

            <main>
                <h1>Get In Touch With the latest Research</h1>
                <p className="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready
                    files with this barebones example featuring some basic HTML and helpful links. Download all our
                    examples to get started.</p>

                <div className="mb-5">
                    <a href="/approvedResearch" className="btn btn-primary btn-lg px-4">Browse Latest Research</a>
                </div>

                <hr className="col-3 col-md-2 mb-5"></hr>

                    <div className="row g-5">
                        <div className="col-md-6">
                            <h2>Whats in Store</h2>
                            <p>Ready to beyond the starter template? Check out these open source projects that you can
                                quickly duplicate to a new GitHub repository.</p>
                            <ul className="icon-list">
                                <li><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener"
                                       target="_blank">Bootstrap npm starter</a></li>
                                <li className="text-muted">Bootstrap Parcel starter (coming soon!)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h2>Contribute With Your Own Research</h2>
                            <p>Read more detailed instructions and documentation on using or contributing to
                                Bootstrap.</p>
                            <ul className="icon-list">
                                <li><a href="/docs/5.0/getting-started/introduction/">Bootstrap quick start guide</a>
                                </li>
                                <li><a href="/docs/5.0/getting-started/webpack/">Bootstrap Webpack guide</a></li>
                                <li><a href="/docs/5.0/getting-started/parcel/">Bootstrap Parcel guide</a></li>
                                <li><a href="/docs/5.0/getting-started/build-tools/">Contributing to Bootstrap</a></li>
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