import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Recording: React.FC<Props> = (props) => {
  return (
    <div className="pt-10">
      <div className="text-gray-800 pt-80 pl-20 font-bold">
        <div className="absolute top-40 text-5xl pl-10 uppercase text-transparent bg-gradient-to-br from-red-700 to-blue-500 bg-clip-text font-extrabold">
          Welcome to Recording Page
        </div>
      </div>
      <div className="absolute ml-40 space-y-5">
        Want to go to dashboard ?
        <Link to="/dashboard">
          <button className="pl-4 text-green-500 font-bold hover:text-red-600">
            DashBoard
          </button>
        </Link>
      </div>
    </div>
  );
};

Recording.defaultProps = {};
export default memo(Recording);
