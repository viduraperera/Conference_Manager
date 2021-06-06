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
        await api.createWorkshop(workshop);

    }catch (error){
        console.log("creating workshop" + error);
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
        await api.updateWorkshop(workshop);

    }catch (error){
        console.log("update workshop error" + error);
    }
}

//delete single workshop
export const removeWorkshop = (id) => async (dispatch) =>{

    try {
        await api.deleteWorkshop(id);

    }catch (error){
        console.log("delete workshop" + error);
    }
}



