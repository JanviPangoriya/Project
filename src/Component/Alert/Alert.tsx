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
  var solidtheme = "";
  var outlinetheme = "";
  var Icontheme = "";
  if (theme === "alert") {
    outlinetheme =
      " text-gray-600 hover:text-gray-500 border-2 border-blue-500 ";
    solidtheme = " bg-blue-200 text-blue-500 hover:bg-blue-300 ";
    Icontheme = " text-blue-700";
  } else if (theme === "success") {
    outlinetheme =
      " text-gray-600 hover:text-gray-500 border-2 border-green-500 ";
    solidtheme = " bg-green-200 text-green-500 hover:bg-green-300 ";
    Icontheme = " text-green-700";
  } else if (theme === "info") {
    outlinetheme =
      " text-gray-600 hover:text-gray-500 border-2 border-gray-500 ";
    solidtheme = " bg-gray-200 text-gray-500 hover:bg-gray-300 ";
    Icontheme = " text-gray-700";
  } else if (theme === "warning") {
    outlinetheme =
      " text-gray-600 hover:text-gray-500 border-2 border-yellow-500 ";
    solidtheme = " bg-yellow-200 text-yellow-500 hover:bg-yellow-300 ";
    Icontheme = " text-yellow-700";
  } else {
    outlinetheme =
      " text-gray-600 hover:text-gray-500 border-2 border-red-500 ";
    solidtheme = " bg-red-200 text-red-500 hover:bg-red-300 ";
    Icontheme = " text-red-700";
  }
  return (
    <div>
      <div
        className={
          "flex flex-row justify-between px-3 py-2 text-md rounded-md " +
          (fill === "solid" ? solidtheme : outlinetheme) +
          " " +
          className
        }
      >
        <div>{children}</div>
        <button>
          <HiX className={"h-6 w-6 " + Icontheme}></HiX>
        </button>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  theme: "info",
};
export default Alert;
