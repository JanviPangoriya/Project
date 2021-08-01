import React from "react";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";
// import LeftSideBar from "../../Component/LeftSideBar";
import Sidemenu from "../../Component/Sidemenu/Sidemenu";
import SubHeader from "../../Component/SubHeader";
import TopNav from "../../Component/TopNav";
import DashboardPage from "./Dashboard.Page";
import LectureRecording from "./LectureRecording";
import Profile from "./Profile";
import RecordingPage from "./Recording.Page";

interface Props {}

const AppContainer: React.FC<Props> = () => {
  return (
    <div>
      <TopNav />
      <SubHeader />
      <div className="flex flex-row bg-gray-300 pt-10 ">
        <Sidemenu />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/recordings" exact>
            <RecordingPage />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/batch/:batchNumber/lecture/:lectureNumber" exact>
            <LectureRecording />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

AppContainer.defaultProps = {};
export default memo(AppContainer);
