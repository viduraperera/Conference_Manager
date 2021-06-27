import React, {useEffect, useState} from "react";
import WorkshopCard from "./WorkShopCard";
import {getWorkshops} from "../../../actions/workshop"

import {useDispatch, useSelector} from "react-redux";

const Workshop = () =>{

        const dispatch = useDispatch();

        useEffect( ()=>{
            dispatch(getWorkshops());

        }, [dispatch]);

        const workshops = useSelector( (state) => state.workshop.workshops);
        console.log(workshops);

    return(
            <div className={"row container-lg mx-auto mt-5 px-0"}>
                <h1 className="display-5 text-center mb-5">Workshops</h1>
                <div>
                    {workshops?.map((workshop) =>{
                        return <WorkshopCard workshop={workshop} key={workshop._id}/>
                    })}
                </div>
            </div>
    );
}

export  default Workshop;