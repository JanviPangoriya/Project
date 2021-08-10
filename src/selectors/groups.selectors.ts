import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

// 1 approach- export const groupQuerySelector = (state: AppState) => state.groups.query;

// 2 approach - export const groupQuerySelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//  return  groupState.query;
// };
export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.query;
  }
);

export const groupMapQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.queryMap;
  }
);

// export const groupMapQuerySelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.queryMap;
// };
export const groupByIdSelctor = createSelector(
  [groupStateSelector],
  (groupState) => {
    return groupState.byId;
  }
);
// export const groupByIdSelctor = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.byId;
// };

export const groupQueryCompletedSelector = createSelector(
  [groupQuerySelector, groupMapQuerySelector, groupByIdSelctor],
  (query, queryMap, byId) => {
    const groupIds = queryMap[query] || [];
    const group = groupIds.map((id) => byId[id]);
    return group;
  }
);

export const selctedGroupSelector = createSelector(
  [groupStateSelector],
  (group) => {
    return group.selectedGroup;
  }
);

export const groupLoadingQuerySelector = createSelector(
  [groupStateSelector],
  (state) => state.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupLoadingQuerySelector], (query, loadingMap) =>
  {
    // console.log(loadingMap)
    return loadingMap[query];
    }
)
// export const groupQueryCompletedSelector = (state: AppState) => {
//   const groupQuery = groupQuerySelector(state);
//   const groupMapQuery = groupMapQuerySelector(state);
//   const byId = groupByIdSelctor(state);
//   const groupIds = groupMapQuery[groupQuery] || [];
//   const group = groupIds.map((id) => byId[id]);
//   return group;
// };
