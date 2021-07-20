import React from "react";
import { memo } from "react";

interface Props {}

const LeftSideBar: React.FC<Props> = (props) => {
  return <div className="h-screen pt-10 w-1/5 bg-gray-500"></div>;
};

LeftSideBar.defaultProps = {};
export default memo(LeftSideBar);
