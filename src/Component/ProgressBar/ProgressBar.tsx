import { FC, memo } from "react";

interface Props {
  progress: number;
  className?: string;
}

const ProgressBar: FC<Props> = ({ progress, className }) => {
  var colorTheme;

  if (progress > 90) {
    colorTheme = "bg-gray-500 ";
  } else if (progress > 80) {
    colorTheme = "bg-green-400 ";
  } else if (progress > 70) {
    colorTheme = "bg-indigo-300 ";
  } else if (progress > 60) {
    colorTheme = "bg-red-400 ";
  } else if (progress > 50) {
    colorTheme = "bg-red-500 ";
  } else if (progress > 40) {
    colorTheme = "bg-yellow-400 ";
  } else if (progress > 30) {
    colorTheme = "bg-green-600 ";
  } else if (progress > 20) {
    colorTheme = "bg-blue-400 ";
  } else if (progress > 10) {
    colorTheme = "bg-blue-600 ";
  }
  else
  {
      colorTheme ="bg-black"
      }

  return (
    <div className={"h-4 bg-gray-200 rounded-full mx-16 " + className}>
      <div
        style={{ width: progress + "%" }}
        className={"h-4 rounded-full " + colorTheme}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {};

export default memo(ProgressBar);
