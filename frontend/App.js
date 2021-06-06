import React from 'react';
import {Container} from "@material-ui/core";

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./src/components/navBar/navBar";
import home from "./src/components/home/home";

const App = () =>{
    return(
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <NavBar/>
                <Switch>
                    <Route path={"/"} exact component={home}/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
export default App;