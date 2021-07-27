import React from "react";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import LeftSideBar from "../../Component/LeftSideBar";
import TopNav from "../../Component/TopNav";
import { User } from "../../model/User";
import DashboardPage from "./Dashboard.Page";
import LectureRecording from "./LectureRecording";
import RecordingPage from "./Recording.Page";

interface Props {
  user: User;
}

const AppContainer: React.FC<Props> = ({user}) => {
  return (
    <div>
      <TopNav />
      <div className="flex flex-row">
        <LeftSideBar user={user} />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/recordings" exact>
            <RecordingPage />
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
