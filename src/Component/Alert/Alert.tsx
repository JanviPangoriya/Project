import React, { useState } from "react";
import { IconType } from "react-icons";
import { HiX } from "react-icons/hi";

interface Props {
  theme?: "alert" | "success" | "info" | "warning" | "error";
  children: string;
  fill: "solid" | "outline";
  className: string;
}

const Alert: React.FC<Props> = ({
  theme,
  children,
  fill,
  className,
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

  var alertTypeClasses =
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
  const [show, setShow] = useState("flex");
  var IconthemeClasses =
    fill === "solid"
      ? " text-" + themeClasses + "-900"
      : " text-" + themeClasses + "-600";
  const unmount = () => {
    setShow("hidden");
  };
  return (
    <div>
      <div
        className={
          "flex flex-row justify-between w-full px-3 py-2 text-md rounded-md " +
          alertTypeClasses +
          " " +
          className +
          " " +
          show
        }
      >
        <div>{children}</div>
        <button onClick={unmount}>
          <HiX className={"h-6 w-6 " + IconthemeClasses}></HiX>
        </button>
      </div>
      <button
        onClick={() => {
          setShow("flex");
        }}
        className={
          show === "hidden" ? "block ml-96 bg-red-400   px-10 py-2" : "hidden"
        }
      >
        show
      </button>
    </div>
  );
};

Alert.defaultProps = {
  theme: "info",
};
export default Alert;
