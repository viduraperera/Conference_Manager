import {FETCH_RESEARCH, FETCH_ONE_RESEARCH, CREATE_RESEARCH} from "../constants/constants";

const ResearchReducer = (state = {researches:null, research: null}, action) =>{
    switch (action.type){
        case CREATE_RESEARCH:
            return {...state, researches: action?.payload};
        case FETCH_RESEARCH:
            return {...state, researches: action?.payload};
        case FETCH_ONE_RESEARCH:
            return {...state, researches: action?.payload};
        default:
            return state;
    }
}

export  default ResearchReducer;