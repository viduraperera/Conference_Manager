import React from 'react';
import {Container} from "@material-ui/core";

import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./src/components/navBar/NavBar";

const App = () =>{
    return(
        <BrowserRouter>
            <NavBar/>
                <Switch>
                </Switch>
        </BrowserRouter>
    )
}
export default App;