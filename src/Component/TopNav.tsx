import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineInbox, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaRegBell, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { VscLock } from "react-icons/vsc";
import caFlag from "../img/Flags/caFlag.png";
import deFlag from "../img/Flags/deFlag.png";
import frFlag from "../img/Flags/frFlag.png";
import jpFlag from "../img/Flags/jpFlag.png";
import { FiMail } from "react-icons/fi";
import { logout } from "../api";
interface Props {}

const TopNav: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const showInput = () => {
    setShow(true);
  };
  return (
    <header className="fixed z-30 w-screen h-14  bg-gray-900">
      <div
        className={
          " py-3 justify-between  flex-row items-center ml-5 mr-8 " +
          (show ? "hidden" : "flex")
        }
      >
        <img
          className="w-8 h-8"
          src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg "
          alt=""
        />
        <div className="text-gray-200 absolute font-bold left-16 text-2xl uppercase top-3 hidden md:block">
          Cork
        </div>
        <div>
          <div className={"top-0 w-96 left-52 absolute hidden md:block "}>
            <FaSearch className=" absolute lg:right-12 top-5 w-5 h-5 text-gray-300 left-5 " />
            <label className="flex flex-row justify-between items-center">
              <input
                id="input"
                type="text"
                className="max-w-screen bg-gray-800 justify-center w-full border-2 border-none placeholder-gray-200 mt-3 text-white h-9 px-16 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 "
                placeholder="Search ..."
              />
            </label>
          </div>
        </div>
        <div>
          <Menu>
            <Menu.Button>
              <AiOutlineSearch
                className={"w-6 h-6 mr-4 rounded-md text-white md:hidden"}
                onClick={showInput}
              />
            </Menu.Button>
          </Menu>
          <Menu>
            <Menu.Button>
              <img src={caFlag} className="w-6 h-6 " alt="Canadian Flag" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-in-out"
              enterFrom="transform translate-y-4 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform translate-y-4 opacity-0"
            >
              <Menu.Items className="absolute py-4 px-2 text-sm bg-white  rounded text-dark-200 top-14 right-28  border ">
                <div
                  className="absolute -top-2.5 right-14"
                  style={{
                    borderBottom: "15px solid #fff",
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                  }}
                ></div>
                <Menu.Item>
                  <a href="#" className="flex px-4 py-1.5 hover:text-blue-500">
                    <img
                      src={deFlag}
                      className="w-5 h-5 mr-4"
                      alt="German Flag"
                    />
                    <p>German</p>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="google.com"
                    className="flex px-4 py-1.5 hover:text-blue-500"
                  >
                    <img
                      src={frFlag}
                      className="w-5 h-5 mr-4"
                      alt="German Flag"
                    />
                    <p>Japanese</p>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="google.com"
                    className="flex px-4 py-1.5 hover:text-blue-500"
                  >
                    <img
                      src={jpFlag}
                      className="w-5 h-5 mr-4"
                      alt="Japanese Flag"
                    />
                    <p>French</p>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="google.com"
                    className="flex px-4 py-1.5 hover:text-blue-500"
                  >
                    <img
                      src={deFlag}
                      className="w-5 h-5 mr-4"
                      alt="French Flag"
                    />
                    <p>English</p>
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu>
            <Menu.Button>
              <FiMail className="w-6 h-6 ml-4 text-white " />
            </Menu.Button>
          </Menu>
          <Menu>
            <Menu.Button>
              <FaRegBell className="w-6 h-6 ml-4 rounded-md text-white " />
            </Menu.Button>
          </Menu>
          <Menu>
            <Menu.Button>
              <img
                src="https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg"
                className="w-8 h-8 ml-4 rounded-md "
                alt="Canadian Flag"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-in-out"
              enterFrom="transform translate-y-4 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform translate-y-4 opacity-0"
            >
              <Menu.Items className="absolute text-sm bg-white border rounded text-dark-200 top-14 right-8 p-5">
                <div
                  className="absolute -top-2.5 right-0"
                  style={{
                    borderBottom: "15px solid #fff",
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                  }}
                ></div>

                <Menu.Item>
                  <a
                    href="google.com"
                    className="flex px-4 py-2 hover:text-blue-500"
                  >
                    <AiOutlineUser className="mr-4 h-6 w-6" />
                    <p>Profile</p>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="google.com"
                    className="flex px-4 py-1.5 hover:text-blue-500"
                  >
                    <AiOutlineInbox className="mr-4 h-6 w-6" />

                    <p>Inbox</p>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="google.com"
                    className="flex px-4 py-1.5 hover:text-blue-500"
                  >
                    <VscLock className="mr-4 h-6 w-6" />

                    <p>Lock Screen</p>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="flex px-4 py-1.5 hover:text-blue-500"
                    onClick={() => {
                      logout();
                      window.location.href = "/login";
                    }}
                  >
                    <FaSignOutAlt className="mr-4 h-6 w-6 " />
                    <p> Sign Out </p>
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className={"bg-gray-900 relative " + (show ? "" : "hidden")}>
        <FaSearch className=" absolute lg:right-12 top-5 w-5 h-5 text-gray-300 left-5 " />
        <label className="flex flex-row justify-between items-center">
          <input
            id="input"
            type="text"
            className="max-w-screen border-0 border-none  bg-gray-900 justify-center w-full placeholder-gray-200 text-white h-14 px-16"
            placeholder="Search ..."
          />
        </label>
      </div>
    </header>
  );
};

TopNav.defaultProps = {};
export default React.memo(TopNav);
