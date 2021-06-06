import {FETCH_WORKSHOPS} from "../constants/constants";
import * as api from '../api/index.js';

//getting workshops
export const getWorkshops = () => async (dispatch) =>{
    try{
        const {data} = await api.fetchWorkshop();
    }catch (error){
        console.log("getting workshop error" + error);
    }
}

