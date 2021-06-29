import {FETCH_WORKSHOPS, CREATE_WORKSHOP, FETCH_ONE_WORKSHOP} from "../constants/constants";
import * as api from '../api/index.js';

//getting workshops
export const getWorkshops = () => async (dispatch) =>{

    try{
        const {data} = await api.fetchWorkshop();
        dispatch ({type: FETCH_WORKSHOPS, payload: data});

    }catch (error){
        console.log("getting workshop error" + error);
    }

}

//create workshops
export const createWorkshops = (workshop) => async (dispatch) =>{

    try {
        console.log(workshop);
        const res = await api.createWorkshop(workshop);
        dispatch ({type: CREATE_WORKSHOP, payload: res.data})
        return {...res}
    }catch (error){
        console.log("creating workshop" + error);
        return {...error}
    }
}

//get single workshop
export const getWorkshop = (id) => async  (dispatch) =>{

    try{
        const  {data} = await api.fetchSingleWorkshop(id);
        dispatch ({type: FETCH_ONE_WORKSHOP, payload: data});

    }catch (error){
        console.log("get single workshop" + error);
    }
}

//update single workshop
export const updateWorkshops = (workshop) => async (dispatch) => {

    try {
        const res = await api.updateWorkshop(workshop);
        return {...res}
    }catch (error){
        console.log("update workshop error" + error);
        return {...error}
    }
}

//delete single workshop
export const removeWorkshop = (id) => async (dispatch) =>{

    try {
        const res = await api.deleteWorkshop(id);
        return {...res}
    }catch (error){
        console.log("delete workshop" + error);
        return {...error}
    }
}



