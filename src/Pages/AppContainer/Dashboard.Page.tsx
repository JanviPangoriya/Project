import React, { memo } from "react";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../store";
const cssStyle = { minHeight: "713px" };
interface Props {}
const Dashboard: React.FC<Props> = () => {
  const user = useAppSelector(meSelector);
  return (
    <>
      <div className={"text-gray-800 pt-32 flex items-center justify-items-center font-bold relative transfom duration-500  mx-auto text-4xl "} style={cssStyle}>
          Welcome Back {user?.first_name} {user?.middle_name} {user?.last_name} !!!
        </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
