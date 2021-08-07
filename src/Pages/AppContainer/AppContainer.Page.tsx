import React from "react";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import SubHeader from "../../Component/SubHeader";
import TopNav from "../../Component/TopNav";
import DashboardPage from "./Dashboard.Page";
import Profile from "./Profile";
import Groups from "./Groups.Page";
import GroupDetail from "./GroupDetail.Page";

interface Props {}

const AppContainer: React.FC<Props> = () => {
  return (
    <div>
      <TopNav />
      <SubHeader />
      <div className="flex flex-row bg-gray-300 pt-10 ">
        {/* <LeftSideBar /> */}
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/groups" exact>
            <Groups />
          </Route>
          <Route path="/groups/:groupId" exact>
            <GroupDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

AppContainer.defaultProps = {};
export default memo(AppContainer);
