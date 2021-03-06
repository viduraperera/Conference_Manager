import {FETCH_RESEARCH, FETCH_ONE_RESEARCH, CREATE_RESEARCH} from "../constants/constants";
import * as api from '../api/index.js';


//getting research
export const getResearch = () => async (dispatch) =>{

    try{
        const  {data} = await  api.fetchResearch();
        dispatch ({type: FETCH_RESEARCH, payload: data});

    }catch (error){
        console.log("getting research error" + error);
    }
}

//create research
export const createResearch = (research) => async (dispatch) =>{

    try{
        const res = await api.createResearch(research);
        dispatch({type: CREATE_RESEARCH, payload:res.data});
        return {...res}
    }catch (error){
        console.log("creating research" + error)
        return {...error}
    }
}

//update research
export  const updateResearch = (research) => async (dispatch) =>{

    try {
        const res = await api.updateResearch(research);
        return {...res}
    }catch (error){
        console.log("update research" + error);
        return {...error}
    }
}

////delete research
export const removeResearch = (id) => async (dispatch) =>{

    try{
        const res = await api.deleteResearch();
        return {...res}
    }catch (error){
        console.log("delete research" + error);
        return {...error}
    }
}