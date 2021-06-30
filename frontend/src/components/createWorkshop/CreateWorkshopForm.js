import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {createWorkshops} from "../../actions/workshop"



const CreateWorkshopFrom = ({setIsCreated}) =>{


    const [workshopData, setWorkshopData] = useState({
        title:'',
        description:'',
        file: ''
    });

    const dispatch = useDispatch();

    const handleFile = (e) =>{
        console.log(e.target.files[0])
        setWorkshopData({...workshopData, file: e.target.files[0]})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(workshopData.title);
        let formData = new FormData();
        formData.append('title', workshopData.title);
        formData.append('description', workshopData.description);
        formData.append('file', workshopData.file);
        console.log(formData.get('title'))
        dispatch(createWorkshops(formData));
        setIsCreated(true);
        setWorkshopData({title: '', description: '', file: ''})
    }

    return(
        <div className={"container"}>
            <form className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto">
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="titleLabel" className="form-label">
                            Workshop Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="titleLabel"
                            value={workshopData.title}
                            onChange={(e) => setWorkshopData({ ...workshopData, title: e.target.value })}
                        />
                    </div>
                    <div className="row">
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Description
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            rows={"5"}
                            value={workshopData.description}
                            onChange={(e) => setWorkshopData({ ...workshopData, description: e.target.value })}
                        />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Input Your Proposal</label>
                        <input
                            className="form-control"
                            type={"file"}
                            id="formFile"
                            onChange={(e) => handleFile(e)}

                        />
                    </div>
                </div>
                <button className="btn btn-primary" data-testid={"submit-button"} onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateWorkshopFrom;