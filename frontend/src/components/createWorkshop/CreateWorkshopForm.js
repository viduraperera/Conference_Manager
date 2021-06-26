import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createWorkshops} from "../../actions/workshop"

const CreateWorkshopFrom = ({setIsCreated}) =>{

    const [workshopData, setWorkshopData] = useState({
        title:'',
        description:'',
    });

    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(workshopData);
        const workshop = {"title" : workshopData.title, "description" : workshopData.description}
        console.log(workshop);
        dispatch(createWorkshops({...workshop}));
        setIsCreated(true);
        setWorkshopData({title: '', description: ''})
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
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateWorkshopFrom;