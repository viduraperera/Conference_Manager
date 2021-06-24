import React from 'react';
import {BrowserRouter , Switch, Redirect, Route} from "react-router-dom";

import NavBar from "./src/components/navBar/NavBar";
import CreateWorkshop from "./src/components/createWorkshop/CreateWorkshop";
import Home from "./src/components/home/Home";

const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <NavBar/>
                    <Switch>
                        <Route path={"/"}  exact component={Home}></Route>
                        <Route path={"/createWorkshop"}  exact component={CreateWorkshop}></Route>
                    </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;