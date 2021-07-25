import React, { memo } from "react";

interface Props {}

const TopNav: React.FC<Props> = (props) => {
  return <div className=" fixed bg-gray-200 w-screen h-16 z-50"></div>;
};

TopNav.defaultProps = {};
export default memo(TopNav);
