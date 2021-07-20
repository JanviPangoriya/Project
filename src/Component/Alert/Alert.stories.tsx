import Alert from "./Alert";
import "../../index.css";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

const Template = (args: any) => <Alert {...args}></Alert>;

export const Main: any = Template.bind({});
Main.args = {
  children: " Lorem Ipsum is simply dummy text of the printing ",
  className: "",
  theme: "info",
  fill: "solid",
};
