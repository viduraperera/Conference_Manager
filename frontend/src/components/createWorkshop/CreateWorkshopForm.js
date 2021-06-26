import React, {useState} from "react";
import Select from "react-select";
import {useDispatch} from "react-redux";
import {createWorkshops} from "../../actions/workshop"

const CreateWorkshopFrom = () =>{

    const [workshopData, setWorkshopData] = useState({
        title:'',
        description:'',
        conductor:''
    });

    const dispatch = useDispatch();

    const handleSubmit =  (e) =>{
        e.preventDefault();
        console.log(workshopData);
        const formData = new FormData();
        formData.append("title", workshopData.title)
        formData.append("description", workshopData.description)
        formData.append("conductor", workshopData.conductor)
        dispatch(createWorkshops(formData));
        setWorkshopData({title: '', conductor: '', description: ''})
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
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="passMark" className="form-label">
                            Conductor
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="passMark"
                            value={workshopData.conductor}
                            onChange={(e) => setWorkshopData({ ...workshopData, conductor: e.target.value })}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateWorkshopFrom;