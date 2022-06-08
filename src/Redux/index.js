import {createStore} from "redux";
import combineReduce from "./reducer";
const store=createStore(combineReduce);
console.log(store)
export default store