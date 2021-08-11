import { takeEvery, call, put } from "@redux-saga/core/effects";
import { GROUP_QUERY} from "../constant";
import {queryCompletedAction} from '../store/actions/groups.actions'
import { fetchGroups as fetchGroupsApi } from "../api/group";
import { AnyAction } from "redux";
function* fetchGroups(action: AnyAction): Generator<any> {
  console.log("groups changed");
  const group:any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });
  yield put(queryCompletedAction(group, action.payload));
}

export function* watchGroupQueryChanged() {
  console.log("watch group Query called");
  yield takeEvery(GROUP_QUERY, fetchGroups);
}
