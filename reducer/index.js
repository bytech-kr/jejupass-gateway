import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import sampleReducer from "./sampleReducer";

const rootReducer = combineReducers({
    index:(state={},actions)=>{
        switch (actions.type){
            case HYDRATE:
                return{...state,...actions.payload};
            default:
                return state;
        }
    },
    //리듀서 추가
    sampleReducer
});

export default rootReducer;