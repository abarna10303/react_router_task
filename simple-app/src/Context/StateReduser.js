export const initialState = {
  task: [],
  isPrority: false,
};
export const Redusers = (state, action) => {
  switch (action.type) {
    case "Add_Task":
      return { ...state, task: action.payload };
      case "delete":
        return { ...state, task: action.payload };
        case "Update":
          var value=[...state.task];
          value[action.payload.index][action.payload.key]=action.payload.event;
          return { ...state, task:value };
    default:
      return state;
  }
};
