import React from "react";

const Footer = () =>{
    return(
            <footer class={"bd-footer  mt-5 bg-dark"}>
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h6 className="text-uppercase text-white bg-dark">International Conference on Application Frameworks</h6>
                                <p className={"text-white bg-dark"}>Here you can use rows and columns to organize your footer content.</p>

                            </div>
                            <hr className="clearfix w-100 d-md-none pb-3"></hr>
                                <div className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="text-uppercase text-white bg-dark">Links</h5>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3 text-white bg-dark">© Created By:
                        <a href="https://mdbootstrap.com/"> Gorup</a>
                    </div>

            </footer>
    )

}

export default Footer;