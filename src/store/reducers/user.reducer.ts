import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../../constant";
import { User } from "../../model/User";

export interface UserState {
  byId: {
    [id: number]: User;
  };
}
const initialState = {
  byId: {},
};
export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const user = action.payload as User;
      return { ...state, byId: { ...state.byId, [user.id]: user } };

    default:
      return state;
  }
};
