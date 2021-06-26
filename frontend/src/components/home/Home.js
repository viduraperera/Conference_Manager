import React from "react";

import CountDown from "./countdown/CountDown";
import Workshops from "./homePageWorkshop/Workshops";

const Home = () =>{
    return(
        <div>
            <CountDown/>
            <Workshops/>
        </div>
    )
}

export default Home;