import { FC, memo } from "react";

interface Props {
  theme: "alert" | "success" | "info" | "warning" | "error";
  progress: number;
}

const ProgressBar: FC<Props> = ({ progress, theme }) => {
  var colorTheme = "bg-blue-500";
  if (theme === "alert") {
    colorTheme = " bg-blue-500 ";
  } else if (theme === "success") {
    colorTheme = " bg-green-500 ";
  } else if (theme === "info") {
    colorTheme = " bg-gray-500 ";
  } else if (theme === "warning") {
    colorTheme = " bg-yellow-500 ";
  } else {
    colorTheme = " bg-red-500 ";
  }
  if (progress > 100) {
    console.log("progress is crossing the maximum limit.");
  }
  return (
    <div className={"h-4 bg-gray-200 rounded-full mx-16 mt-20"}>
      <div
        style={{ width: progress + "%" }}
        className={"h-4 rounded-full " + colorTheme}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
};

export default memo(ProgressBar);
