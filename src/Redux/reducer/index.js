import { combineReducers } from "redux";
import {dataReducer} from "./dataReducer";
import {inputReducer} from "./inputReducer";

console.log(dataReducer)

const combineReduce=combineReducers({
    data:dataReducer,
    inputValue:inputReducer
})

export default combineReduce