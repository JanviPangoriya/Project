import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { HiLockClosed } from "react-icons/hi";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "alert" | "success" | "info" | "warning" | "error";
  children: string;
  type?: "submit" | "reset" | "button";
  Icon?: IconType;
  fill: "solid" | "outline";
}

const Button: React.FC<Props> = ({
  children,
  theme,
  className,
  Icon,
  fill,
  ...rest
}) => {
  var themeClasses = "";
  if (theme === "alert") {
    themeClasses = "blue";
  } else if (theme === "success") {
    themeClasses = "green";
  } else if (theme === "info") {
    themeClasses = "gray";
  } else if (theme === "warning") {
    themeClasses = "yellow";
  } else {
    themeClasses = "red";
  }

  var buttonTypeClasses =
    fill === "outline"
      ? " text-gray-600 hover:text-gray-500 border-2 border-" +
        themeClasses +
        "-500 "
      : " bg-" +
        themeClasses +
        "-200 text-" +
        themeClasses +
        "-500 hover:bg-" +
        themeClasses +
        "-300";

  var IconThemeClasses =
    fill === "solid"
      ? " text-" + themeClasses + "-700"
      : " text-" + themeClasses + "-600";
  return (
    <>
      <button
        {...rest}
        className={
          "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 " +
          buttonTypeClasses +
          " " +
          className
        }
      >
        {Icon && (
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <Icon
              className={"z-50 m-2 w-7 h-7  absolute " + IconThemeClasses}
              aria-hidden="true"
            ></Icon>
          </span>
        )}
        Sign in
      </button>
    </>
  );
};

Button.defaultProps = {
  theme: "info",
  fill: "solid",
};
export default Button;
