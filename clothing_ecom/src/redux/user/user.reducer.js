import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// we are giving state a default parameter i.e INITIAL_STATE, if state hav=s no value it will get INITIAL_STATE value as default
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
