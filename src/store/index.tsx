import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore} from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/user.reducer";

const reducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  groups: groupReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

// switch (action.type) {
//   case UI_SIDEBAR:
//     console.log(action.payload);
//     return { ...state, isSideBarOpen: action.payload };
//   default:
//     return state;
// }
