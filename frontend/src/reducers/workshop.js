import {FETCH_WORKSHOPS, FETCH_ONE_WORKSHOP} from "../constants/constants";

const WorkshopReducer = (state = {workshops:null, workshop:null}, action) =>{
    switch (action.type){
        case FETCH_WORKSHOPS:
            return {...state, workshops: action?.payload};
        case FETCH_ONE_WORKSHOP:
            return {...state, workshop: action?.payload};
        default:
            return state;
    }
}

export default WorkshopReducer;