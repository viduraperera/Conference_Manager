import React from 'react';
import {Container} from "@material-ui/core";

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./src/components/navBar/navBar";

const App = () =>{
    return(
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <NavBar/>
            </Container>
        </BrowserRouter>
    )
}
export default App;