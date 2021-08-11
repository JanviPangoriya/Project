import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware } from "../Sagas";
import { watchGroupQueryChanged } from "../Sagas/groups.sagas";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { uiReducer } from "./reducers/ui.reducers";
import { userReducer } from "./reducers/user.reducer";

const reducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  groups: groupReducer,
  ui: uiReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchGroupQueryChanged);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


