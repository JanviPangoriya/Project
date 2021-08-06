import { bindActionCreators } from "redux";
import { store } from "..";
import { ME_FETCH, ME_LOGIN } from "../../constant";
import { User } from "../../model/User";

const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

const meLoginAction = (u: User) => ({ type: ME_LOGIN, payload: u });

export const authAction = bindActionCreators(
    {
        fetch: meFetchAction,
        login:meLoginAction,

    },store.dispatch
)