import React from "react";

interface Props {
  status?: "offline" | "online";
  size: "large" | "medium" | "small";
  className?: string;
}

const Avatar: React.FC<Props> = ({ status, size, className }) => {
  var sizeTheme;
  if (size === "large") sizeTheme = " h-28 w-28 ";
  else if (size === "medium") sizeTheme = " h-16 w-16 ";
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
    <div
      className={
        " flex justify-center items-end w-full relative mt-16 " + className
      }
    >
      <img
        className={sizeTheme + " rounded-full "}
        src="https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg"
      />

      {status && (
        <div
          className={
                      "border-white rounded-full inline-block relative " +
                       IconColorTheme+
            IconSizeTheme
           
          }
        ></div>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  status: undefined,
  size: "large",
};
export default Avatar;
