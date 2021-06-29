import React, {useEffect} from "react";
import  {getResearch} from "../../actions/research";
import ApprovedResearchCard from "./ApprovedResearchCard";
import {useDispatch, useSelector} from "react-redux";


const ApprovedResearch = () =>{

    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch(getResearch());
    }, [])

    const researches = useSelector( (state) => state.research.researches);
    console.log(researches);

    return(
        <div className={"row align-items-md-stretch h-50 p-5 rounded-3"}>
            <h1 className="display-5 text-center mb-5">Research</h1>
            {researches?.map((research) =>{
                return <ApprovedResearchCard research={research} key={research._id}/>
            })}
        </div>
    )
}
export default ApprovedResearch;