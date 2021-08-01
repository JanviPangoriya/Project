import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import AppContext from "../App.context";
import { IoIosArrowDown } from "react-icons/io";
interface Props {}

const SubHeader: React.FC<Props> = (props) => {
  const { user } = useContext(AppContext);
  return (
    <div className="fixed top-14 z-20 w-full bg-white h-14">
      <div className=" flex flex-row justify-between items-center px-3">
        <div className="flex flex-row items-center ">
          <div>
            <GiHamburgerMenu className="w-7 h-7 text-gray-700 mt-4 mr-5" />
          </div>
          <Link to="/dashboard">
            <div className="pt-4 text-gray-700 text-lg font-semibold ">
              DashBoard
            </div>
          </Link>
        </div>
        <Menu>
          <Menu.Button>
            <div className="flex flex-row  mt-3 border-2 border-gray-600 px-3 py-1 rounded-md text-gray-700 text-md">
              <div className=" ">Setting</div>
              <IoIosArrowDown className="ml-3 mt-1 " />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute text-sm bg-white border rounded text-dark-200 top-12 mt-1 right-8 px-6 py-3 ">
            <Menu.Item>
              <div className="flex px-6 py-2 hover:text-blue-500 cursor-pointer">
                <p>Settings</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex px-6 py-1.5 hover:text-blue-500 cursor-pointer">
                <p>Mail</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex px-6 py-1.5 hover:text-blue-500 cursor-pointer">
                <p>Print</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex px-6 py-1.5 hover:text-blue-500 cursor-pointer">
                <p>Download </p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex px-6 py-1.5 hover:text-blue-500 cursor-pointer">
                <p>Share</p>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

SubHeader.defaultProps = {};
export default React.memo(SubHeader);
