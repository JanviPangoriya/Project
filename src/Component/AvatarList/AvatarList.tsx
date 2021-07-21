import React from "react";

const image =
  "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg";
interface Props {
    avatarlength: number;
}
const AvatarList: React.FC<Props> = ({ avatarlength }) => {
  function fillArray(value: string, len: number) {
    if (len == 0) return [];
    var a = [value];
    while (a.length * 2 <= len) a = a.concat(a);
    if (a.length < len) a = a.concat(a.slice(0, len - a.length));
    return a;
  }
  var avatarArray = fillArray(image, avatarlength);
  var remaining = 0;
  if (avatarArray && avatarArray.length > 0) {
    remaining = avatarArray.length - 4;
  }
  return (
    <div className="flex flex-row items-center mt-28 ml-10">
      {avatarArray &&
        avatarArray.slice(0, 4).map((avatar, index) => (
          <div >
            <img
              src={avatar}
              key={index}
              alt=""
              className={
                "relative -left-" +
                index * 8 +
                " transform duration-1000 hover:-translate-y-4 rounded-full "
              }
            />
          </div>
        ))}
      {remaining > 0 && (
        <div className="w-28 h-12 relative -left-28 border-2 border-gray-500  bg-white shadow-2xl font-medium text-blue-500 rounded-full flex items-center justify-center">
          + {remaining} more
        </div>
      )}
    </div>
  );
};

AvatarList.defaultProps = {
    avatarlength:5,
};
export default AvatarList;
