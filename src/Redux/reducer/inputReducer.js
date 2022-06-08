import { changeValue } from "../action/inputAction";
import { editItem } from "../action/inputAction";
import { emptyInput } from "../action/inputAction";
const initialValue ={
  value:"",
  isEdited:false,
  checked:false
};

export const inputReducer = (state = initialValue, action) => {
    console.log(state)
  switch (action.type) {
    case "Change":
      return changeValue(action.payload,state);

    case "Edit":
      return editItem(action.payload[0],action.payload[1],action.payload[2],state);

    case "Empty":
        return emptyInput(state);
      
    default:
      return state;
  }
};
