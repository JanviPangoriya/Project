import React from "react";

interface Props {
  status: "offline" | "online" | "undefined";
  size: "large" | "medium" | "small";
  image: string;
}

const Avatar: React.FC<Props> = ({ image, status, size }) => {
  var sizeTheme;
  if (size === "large") sizeTheme = " h-28 w-28 ";
  else if (size === "medium") sizeTheme = " h-20 w-20 ";
  else sizeTheme = " h-12 w-12 ";

  var IconSizeTheme;
  if (size === "large") IconSizeTheme = " h-7 w-7 bottom-2 right-6 border-4";
  else if (size === "medium")
    IconSizeTheme = " h-5 w-5 bottom-1 right-5 border-2 ";
  else IconSizeTheme = "h-4 w-4 bottom-1 right-4 border-2  ";

  var IconColorTheme;
  if (status === "offline") IconColorTheme = " bg-gray-400 ";
  else if (status === "online") IconColorTheme = " bg-green-400 ";

  return (
    <div className={" flex justify-center items-end w-full relative mt-16 "}>
      <img className={sizeTheme + " rounded-full "} src={image} />

      {status!="undefined" && (
        <div
          className={
            "border-white rounded-full inline-block relative " +
            IconColorTheme +
            IconSizeTheme
          }
        ></div>
      )}
    </div>
  );
};

Avatar.defaultProps = {
};
export default Avatar;
