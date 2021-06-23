import React, {useState} from "react";
import CreateWorkshopForm from "./CreateWorkshopForm";

const CreateWorkshop = () =>{
    const [isCreated, setIsCreated] = useState(false);

    return(
        <div className={"container"}>
            <h1 className="display-5 text-center my-5">Create Workshop</h1>
            <CreateWorkshopForm setIsCreated = {setIsCreated}/>
            {
                isCreated && (
                    <div class="alert alert-success w-75 mx-auto mt-5" role="alert">
                        your WorkShop is added, An Email will be sent with Approval
                    </div>
                )
            }
        </div>
    )
}

export default CreateWorkshop();