import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { memo } from "react";
import {
  FiCpu,
  FiTarget,
  FiAirplay,
  FiMap,
  FiPieChart,
} from "react-icons/fi";
import { BiCube} from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import { useAppSelector } from "../../store";
import SidebarElement from "./SidebarElement";
import { AiOutlineHome} from "react-icons/ai";

interface Props {}

const LeftSideBar: React.FC<Props> = (props) => {
  const sidebarStatus = useAppSelector((state) => state.isSideBarOpen);
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
          " w-60 bg-gray-300 mt-16 top-12 z-30 md:z-0 overflow-y-auto h-screen pb-32 fixed scrollbar scrollbar-width-x-2"
        }
      >
        <SidebarElement
          text={"Dashboard"}
          icon={<AiOutlineHome className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Apps "}
          icon={<FiCpu className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Components"}
          icon={<BiCube className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Font Icons"}
          icon={<GiElectric className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Font Icon"}
          icon={<FiTarget className="w-5 h-5" />}
          dropdown={false}
        />
        <SidebarElement
          text={"Widgets"}
          icon={<FiAirplay className="w-5 h-5" />}
          dropdown={false}
        />

        <SidebarElement
          text={"Maps"}
          icon={<FiMap className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Charts"}
          icon={<FiPieChart className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Font Icon"}
          icon={<FiTarget className="w-5 h-5" />}
          dropdown={false}
        />
        <SidebarElement
          text={"Widgets"}
          icon={<FiAirplay className="w-5 h-5" />}
          dropdown={false}
        />

        <SidebarElement
          text={"Maps"}
          icon={<FiMap className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Charts"}
          icon={<FiPieChart className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Font Icon"}
          icon={<FiTarget className="w-5 h-5" />}
          dropdown={false}
        />
        <SidebarElement
          text={"Widgets"}
          icon={<FiAirplay className="w-5 h-5" />}
          dropdown={false}
        />

        <SidebarElement
          text={"Maps"}
          icon={<FiMap className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Charts"}
          icon={<FiPieChart className="w-5 h-5" />}
          dropdown={true}
        />
        <SidebarElement
          text={"Font Icon"}
          icon={<FiTarget className="w-5 h-5" />}
          dropdown={false}
        />
        
      </div>
    </Transition>
  );
};

LeftSideBar.defaultProps = {};
export default memo(LeftSideBar);
