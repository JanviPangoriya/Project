import { bindActionCreators } from "redux";
import { store } from "..";
import { ME_UPDATE } from "../../constant";
import { User } from "../../model/User";


const meUpdate = (u: User) => ({
  type: ME_UPDATE,
  payload: u,
});

export const userActions = bindActionCreators(
  {
    update: meUpdate,
  },
  store.dispatch
);
