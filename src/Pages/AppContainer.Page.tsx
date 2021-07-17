import React from 'react';
import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import LeftSideBar from '../Component/LeftSideBar';
import TopNav from '../Component/TopNav';
import DashboardPage from './Dashboard.Page';
import LectureRecording from './LectureRecording';
import RecordingPage from './Recording.Page';

interface Props{

}

const AppContainer :React.FC<Props>=(props) => {
    return(
        <div>
            <TopNav />
        <div className="flex flex-row">
            <LeftSideBar />
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

AppContainer.defaultProps={
    
}
export default memo(AppContainer);