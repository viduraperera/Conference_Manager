import {FETCH_WORKSHOPS} from "../constants/constants";

const WorkshopReducer = (state = {workshops:null}, action) =>{
    switch (action.type){
        case FETCH_WORKSHOPS:
            return {...state, workshops: action?.payload};
        default:
            return state;
    }
}

export default WorkshopReducer;