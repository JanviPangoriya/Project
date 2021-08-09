import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { memo } from "react";
import { FiCpu} from "react-icons/fi";
import SidebarElement from "./SidebarElement";
import { AiOutlineHome } from "react-icons/ai";
import { uiSideBarSelector } from "../../selectors/ui.selectors";
import { useAppSelector } from "../../store";
import { Link } from "react-router-dom";
import { uiAction } from "../../store/actions/ui.actions";
import { logout } from "../../api/auth";

interface Props {}

const LeftSideBar: React.FC<Props> = (props) => {
  const sidebarStatus = useAppSelector(uiSideBarSelector);
  const toggleSideBar = () => {
    uiAction.open(false);
  };
  return (
    <Transition
      as={Fragment}
      show={sidebarStatus}
      enter="transition ease-in-out duration-500 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      entered="translate-x-0"
      leave="transition ease-in-out duration-500 transform"
      leaveFrom="translate-x-0 "
      leaveTo="-translate-x-full"
    >
      <div
        className={
          " w-60 bg-gray-500 mt-16 top-12 z-30 md:z-0 overflow-y-auto h-screen pb-32 fixed scrollbar scrollbar-width-x-2"
        }
      >
        <Link
          to="/dashboard"
          className="transform duration-500 "
          onClick={toggleSideBar}
        >
          <SidebarElement
            text={"Dashboard"}
            icon={<AiOutlineHome className="w-5 h-5" />}
            dropdown={true}
          />
        </Link>
        <Link
          to="/groups"
          className="transform duration-500 "
          onClick={toggleSideBar}
        >
          <SidebarElement
            text={"Groups"}
            icon={<FiCpu className="w-5 h-5" />}
            dropdown={true}
          />
        </Link>
        <Link
          to="/dashboard"
          className="transform duration-500 "
          onClick={toggleSideBar}
        >
          <SidebarElement
            text={"Group By Id"}
            icon={<FiCpu className="w-5 h-5" />}
            dropdown={true}
          />
        </Link>
        <Link
          to="/profile"
          className="transform duration-500 "
          onClick={toggleSideBar}
        >
          <SidebarElement
            text={"Edit Profile"}
            icon={<FiCpu className="w-5 h-5" />}
            dropdown={true}
          />
        </Link>
        <Link
          to="/dashboard"
          className="transform duration-500 "
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          <SidebarElement
            text={"Logout"}
            icon={<FiCpu className="w-5 h-5" />}
            dropdown={true}
          />
        </Link>
      </div>
    </Transition>
  );
};

LeftSideBar.defaultProps = {};
export default memo(LeftSideBar);
