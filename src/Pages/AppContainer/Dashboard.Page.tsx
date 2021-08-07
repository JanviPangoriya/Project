import React, { memo } from "react";
interface Props {}
const Dashboard: React.FC<Props> = () => {
  // const sidebarStatus = useAppSelector((state) => state.isSideBarOpen);
  return (
    <>
      <div className="text-gray-800 pt-80 pl-20 font-bold ">
        <div className="absolute top-40 text-5xl pl-10 uppercase text-transparent bg-gradient-to-br from-red-700 to-blue-500 bg-clip-text font-extrabold">
          Welcome to Dashboard Page
        </div>
      </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
