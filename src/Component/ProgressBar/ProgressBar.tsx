import { FC, memo } from "react";

interface Props {
  progress: number;
  className?: string;
  colorTheme?: string;
}

const ProgressBar: FC<Props> = ({ progress, colorTheme, className }) => {
  return (
    <div className={"h-4 bg-gray-200 rounded-full mx-16 " + className}>
      <div
        style={{ width: progress + "%" }}
        className={"h-4 rounded-full " + colorTheme}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  colorTheme:"bg-red-700",
};

export default memo(ProgressBar);
