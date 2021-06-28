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
            <div className={"row align-items-md-stretch h-100 p-5 text-dark  rounded-3"}>
                <h1 className="display-5 text-center mb-5">Workshops</h1>
                    {workshops?.map((workshop) =>{
                        return <WorkshopCard workshop={workshop} key={workshop._id}/>
                    })}

            </div>
    );
}

export  default Workshop;