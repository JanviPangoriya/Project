import React, { memo } from "react";
import { uiSideBarSelector } from "../../selectors/ui.selectors";
import { useAppSelector } from "../../store";
const cssStyle = { minHeight: "713px" };
interface Props {}
const Dashboard: React.FC<Props> = () => {
  const sidebarStatus = useAppSelector(uiSideBarSelector);

  return (
    <>
      <div className={"text-gray-800 pt-32 font-bold "+"relative transfom duration-500  ml-5" +
          (sidebarStatus ? " md:ml-64 " : "")} style={cssStyle}>
        <div className="text-5xl uppercase text-transparent bg-gradient-to-br from-red-700 to-blue-500 bg-clip-text font-extrabold">
          Welcome to Dashboard Page
        </div>
      </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
