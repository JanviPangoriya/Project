import React from "react";
import { memo } from "react";
import { logout } from "../api/auth";

interface Props {}

const LeftSideBar: React.FC<Props> = (props) => {
  return (
    <div className="hidden md:block fixed h-screen w-60 bg-gray-500 pt-16"></div>
  );
};

LeftSideBar.defaultProps = {};
export default memo(LeftSideBar);
