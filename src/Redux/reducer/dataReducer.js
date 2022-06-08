import { saveLocal, deleteItem,clickItem,addEditing } from "../action/DataAction";
const initalValue = JSON.parse(localStorage.getItem("todo")) || [];

export const dataReducer = (state = initalValue, action) => {
  switch (action.type) {
    case "Submit":
      return saveLocal(action.payload, state);

    case "Delete":
      return deleteItem(action.payload, state);

    case "Checked":
      return clickItem(action.payload, state);

      case "Editing" :
          return addEditing(action.payload,state);
    default:
      return state;
  }
};
