import { bindActionCreators } from "redux";
import { store } from "..";
import { UI_SIDEBAR } from "../../constant";

const uiSideBarAction = (open: boolean) => ({ type: UI_SIDEBAR, payload: open });

export const uiAction = bindActionCreators(
  {
    open: uiSideBarAction,
  },
  store.dispatch
);
