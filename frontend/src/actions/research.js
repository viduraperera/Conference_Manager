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
        const  {data} = await api.createResearch();
        dispatch({type: CREATE_RESEARCH, payload:data});
    }catch (error){
        console.log("creating research" + error)
    }
}

//update research
export  const updateResearch = (research) => async (dispatch) =>{

    try {
        await api.updateResearch();

    }catch (error){
        console.log("update research" + error);
    }
}

////delete research
export const removeResearch = (id) => async (dispatch) =>{

    try{
        await api.deleteResearch();

    }catch (error){
        console.log("delete research" + error);
    }
}