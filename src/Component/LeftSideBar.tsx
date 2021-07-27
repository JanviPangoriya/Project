import React from "react";
import { memo } from "react";
import { logout } from "../api/auth";
import { User } from "../model/User";

interface Props {
  user: User;
}

const LeftSideBar: React.FC<Props> = ({user}) => {
  return (
    <div className="hidden md:block fixed h-screen w-60 bg-gray-500 pt-16">
      <div className="text-center text-lg uppercase text-white bg-red-300 ml-20 mr-20 py-2 rounded-md">{user.first_name}</div>
      <button
        className="py-3 px-10 bg-red-400 rounded-full absolute bottom-24 left-10"
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

LeftSideBar.defaultProps = {};
export default memo(LeftSideBar);
