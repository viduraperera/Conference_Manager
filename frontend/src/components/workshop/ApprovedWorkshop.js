import React, {useEffect} from "react";
import {getWorkshops} from "../../actions/workshop";
import {useDispatch, useSelector} from "react-redux";
import ApprovedWorkshopCard from "./ApprovedWorkshopCard";


const ApprovedWorkshop = () =>{

    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch(getWorkshops());
    }, [dispatch])

    const workshops = useSelector( (state) => state.workshop.workshops);
    console.log(workshops);

    return(
        <div className={"row align-items-md-stretch h-50 p-5 rounded-3"}>
            <h1 className="display-5 text-center mb-5">Workshops</h1>
            {workshops?.map((workshop) =>{
                return <ApprovedWorkshopCard workshop={workshop} key={workshop._id}/>
            })}

        </div>
    )

}

export default ApprovedWorkshop;