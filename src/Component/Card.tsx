import React from "react";
import { State, User } from "../api";
declare module "react" {
  interface DOMAttributes<T> {
    onError?: ReactEventHandler<T>;
  }
}
interface Props {
  name: string;
  creator: User;
  description: string;
  group_image_url?: string;
  state: State;
  index: number;
}
const Card: React.FC<Props> = ({
  name,
  index,
  creator,
  description,
  group_image_url,
}) => {
  return (
    <div className="ml-5 mr-3 sm:ml-7 justify-center w-96 mb-4">
      <div
        className={
          "flex flex-row space-y-2 items-center justify-center h-32 py-4 " +
          (index % 2 === 1
            ? "bg-yellow-200 border-red-700 text-black hover:bg-yellow-100 hover:text-red-700"
            : "bg-gray-500 border-black hover:bg-gray-400 ") +
          " rounded-xl space-x-10 border-4 "
        }
      >
        <div className="">
          <object
            data={group_image_url}
            type="image/png"
            className="w-24 h-24 rounded-full ml-3 sm:ml-1"
          >
            <img
              src="https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg"
              className="w-24 h-24 rounded-full "
              alt={name}
            />
          </object>
        </div>
        <div className="w-2/3">
          <p className="w-full text-xl  mb-1 font-semibold uppercase ">
            {name}
          </p>
          <p className="w-full pb-1 text-md tracking-wide leading-tight pr-4 ">
            {description}
         </p>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {};
export default Card;
