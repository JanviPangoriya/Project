import React from "react";
import { memo } from "react";
import { logout } from "../api/auth";

interface Props {
}

const LeftSideBar: React.FC<Props> = (props) => {
  return (
    <div className="hidden md:block fixed h-screen w-60 bg-gray-500 pt-16">
      
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
