import React, {useState} from "react";
import CreateResearchForm from "./CreateResearchForm";


const CreateResearch = ()=>{
    const [isCreated, setIsCreated] = useState(false);

    return(
        <div className={"container"}>
            <h1 className="display-5 text-center my-5">Upload Research</h1>
            <CreateResearchForm setIsCreated={setIsCreated}/>
            {
                isCreated && (
                    <div className="alert alert-success w-75 mx-auto mt-5" role="alert">
                        your Research is added, An Email will be sent with Approval
                    </div>
                )
            }
        </div>
    )
}

export default CreateResearch;