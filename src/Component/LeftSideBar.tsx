import React from "react";
import { memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api";

interface Props {}

const LeftSideBar: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div>
      <div className="h-screen pt-10 w-1/5 bg-gray-500"></div>
      <button onClick = {() => {
        logout();
        window.location.href = "/login";
      }}>Logout</button>
    </div>
  );
};

LeftSideBar.defaultProps = {};
export default memo(LeftSideBar);
