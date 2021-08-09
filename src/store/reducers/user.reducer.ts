import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN, ME_UPDATE } from "../../constant";
import { User } from "../../model/User";
import { addOne, EntityState, updateOne } from "./entity.reducer";

export interface UserState extends EntityState<User> {}
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
      return addOne(state, action.payload) as UserState;
    case ME_UPDATE: {
      const user = action.payload as User;

      return updateOne(state, user);
    }
    default:
      return state;
  }
};
