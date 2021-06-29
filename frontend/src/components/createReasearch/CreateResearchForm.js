import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createResearch} from "../../actions/research";
import { useLocation } from 'react-router-dom';
import { createWorkshops } from "../../actions/workshop";
import { getUser } from "../../actions/auth";
import { useToasts } from 'react-toast-notifications';

const CreateResearchForm = () =>{
    const location = useLocation();
    const { addToast } = useToasts();

    const path = location.pathname.split('/')[1];
    useEffect(() => {
        dispatch(getUser());
      }, []);
    const user = useSelector((state) => state.auth.user);

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
        if (path === 'createResearch'){
            formData.append('user', user._id);
            const res = await dispatch(createResearch(formData));
            if(res.status === 201){
                addToast('Research Created Successfully. An Email will be sent with Approval', { appearance: 'success', autoDismiss: true, });
            } else {
                addToast('Research Created Error', { appearance: 'error', autoDismiss: true, });
            }
        } else {
            formData.append('conductor', user._id);
            const res = await dispatch(createWorkshops(formData));
            if(res.status === 201){
                addToast('Workshop Created Successfully. An Email will be sent with Approval', { appearance: 'success', autoDismiss: true, });
            } else {
                addToast('Workshop Created Error', { appearance: 'error', autoDismiss: true, });
            }
        }
        setResearchData({title: '', description: '', file: ''})
    }

    return(
        <div className={"container"}>
            <h1 className="display-5 text-center my-5">Upload your {path === 'createResearch'? 'Research' : 'Workshop'} Data</h1>
            <form className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto">
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="titleLabel" className="form-label">
                           { path === 'createResearch'? 'Research Title' : 'Workshop Title'} 
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