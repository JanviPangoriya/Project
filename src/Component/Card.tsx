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
    <div className="max-w-11/12 ml-5 mr-3 sm:ml-7 justify-center mb-4">
      <div
        className={
          "flex flex-row space-y-2 items-center justify-center h-full py-4 " +
          (index % 2 === 1
            ? "bg-yellow-200 border-red-700 text-black hover:bg-yellow-100 hover:text-red-700"
            : "bg-gray-500 border-black hover:bg-gray-400 ") +
          " rounded-xl space-x-10 border-4 "
        }
      >
        <div className="w-auto ">
          <img
            className="flex-1 rounded-lg  border-2 border-white w-32 h-32 ml-2 sm:ml-0"
            src="https://www.w3schools.com/howto/img_avatar2.png" alt={name}
          />
          {/* </object> */}
        </div>
        <div className="w-2/3">
          <p className="w-full text-xl  mb-4 font-semibold uppercase ">
            {name}
          </p>
          <p className="w-full pb-4 text-md tracking-wide leading-tight pr-4 ">
            {description}
          </p>
          <div className="rounded w-full ">
            <div className="opacity-95 rounded-lg e px-4">
              <p className="m-auto inset-0 text-lg  leading-normal text-right text-black underline py-1 px-5 font-bold">
                Creator Details :
              </p>
            </div>
            <div className="opacity-95 rounded-lg e px-4">
              <p className="m-auto inset-0 text-md font-medium leading-normal text-right py-1">
                Id : {creator.id}
              </p>
            </div>
            <div className="opacity-95 rounded-lg  px-4">
              <p className="m-auto inset-0 text-md font-medium leading-normal text-right  py-1">
                First Name: {creator.first_name}
              </p>
            </div>
            <div className="opacity-95 rounded-lg px-4">
              <p className="m-auto inset-0 text-md font-medium leading-normal text-right py-1">
                Last Name: {creator.last_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {};
export default Card;
