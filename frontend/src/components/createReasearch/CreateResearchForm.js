import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createResearch} from "../../actions/research";

const CreateResearchForm = ({setIsCreated}) =>{

    const [researchData, setResearchData] = useState({
        title: '',
        description:'',
        file:''
    })

    const dispatch = useDispatch();

    const  handleFile = (e) =>{
        console.log(e.target.files[0])
        setResearchData({...researchData, file: e.target.files[0]})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(researchData.title);
        let formData = new FormData();
        formData.append('title', researchData.title)
        formData.append('description', researchData.description)
        formData.append('file', researchData.file)
        console.log(formData.get('title'));
        dispatch(createResearch(formData));
        setIsCreated(true);
        setResearchData({title: '', description: '', file: ''})
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