import React, { memo } from "react";

interface Props {
  stackedlength: number;
  AvatarImage: string[];
}
const Avatar: React.FC<Props> = ({ stackedlength, AvatarImage }) => {
  var avatarlength = AvatarImage.length;
  var remaining = 0;
  if (avatarlength > 0) {
    remaining = avatarlength - stackedlength;
  }
  var ImageTodisplay = 0;
  if (avatarlength < stackedlength) {
    ImageTodisplay = avatarlength;
  } else {
    ImageTodisplay = stackedlength;
  }
  return (
    <>
      <div className=" flex flex-row justify-start items-center">
        {AvatarImage &&
          AvatarImage.slice(0, ImageTodisplay).map((avatar, index) => {
            return (
              <img
                src={avatar}
                alt=""
                className={
                  "rounded-full relative border-2 border-gray-400 transform duration-1000 hover:-translate-y-4 w-24 h-24 "
                }
                style={{ left: index * -27 + "px" }}
              />
            );
          })}
        {remaining > 0 && (
          <button
            className="w-28 h-12 relative bg-white shadow-2xl font-medium rounded-full pt-2 pl-3 border-4 border-gray-100"
            style={{ left: stackedlength * -27 + "px" }}
                  >
            {" "}
            +{remaining} more
          </button>
        )}
      </div>
    </>
  );
};

Avatar.defaultProps = {};
export default memo(Avatar);
