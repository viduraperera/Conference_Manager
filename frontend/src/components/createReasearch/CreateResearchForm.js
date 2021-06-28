import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createResearch} from "../../actions/research";

const CreateResearchForm = ({setIsCreated}) =>{

    const [researchData, setResearchData] = useState({
        title: '',
        description:'',
        path:''
    })

    const dispatch = useDispatch();

    const  handleFile = (e) =>{
        console.log(e.target.file[0])
        setResearchData({...researchData, path: e.target.file[0]})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(researchData);
        const research = {"title": researchData.title, "description": researchData.description, "path": researchData.path}
        console.log(research);
        dispatch(createResearch(...research));
        setIsCreated(true);
        setResearchData({title: '', description: '', path: ''})
    }

    return(
        <div className={"container"}>
            <form className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto">
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="titleLabel" className="form-label">
                            Research Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="titleLabel"
                            value={researchData.title}
                            onChange={(e) => setResearchData({ ...researchData, title: e.target.value })}
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
                                value={researchData.description}
                                onChange={(e) => setResearchData({ ...researchData, description: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Input Your File</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={(e) => handleFile(e)}

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

export default CreateResearchForm;