import React, { memo } from "react";

interface Props {
  avatarlength: number;
}
const image =
  "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg";
const Avatar: React.FC<Props> = ({ avatarlength }) => {
  function fillArray(value: string, len: number) {
    if (len == 0) return [];
    var a = [value];
    while (a.length * 2 <= len) a = a.concat(a);
    if (a.length < len) a = a.concat(a.slice(0, len - a.length));
    return a;
  }
  var avatarArray = fillArray(image, avatarlength);
  var remaining =0;
  if (avatarlength > 0) {
    remaining = avatarlength - 4;
  }
  return (
    <>
      <div className="w-full relative flex flex-row items-center mt-12">
        {avatarArray &&
          avatarArray.slice(0, 4).map((avatar, index) => {
            return (
              <div>
                <img
                  src={avatar}
                  alt=""
                  className={"rounded-full relative border-2 border-gray-400 transform duration-1000 hover:-translate-y-4"}
                  style={{ left: index * -27 + "px" }}
                />
              </div>
            );
          })}
        {remaining > 0 && (
          <div className="w-28 h-12 relative -left-28 bg-white shadow-2xl font-medium rounded-full pt-2 pl-3 border-4 border-gray-100">
            {" "}
            +{remaining} more
          </div>)}
      </div>
      
    
    </>
  );
};

Avatar.defaultProps = {
  avatarlength: 5,
};
export default memo(Avatar);
