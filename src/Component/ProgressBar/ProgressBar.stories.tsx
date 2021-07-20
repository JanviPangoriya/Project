import "../../index.css";
import ProgressBar from "./ProgressBar";

export default {
  title: "Progress Bar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
        step: 1,
        max: 100,
      },
    },
  },
};

export const main = (args: any) => <ProgressBar {...args}></ProgressBar>;

main.args = {
    progress: 50,
    className:""
};
