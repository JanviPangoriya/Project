import Button from "./Button";
import "../../index.css";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
  },
};

const Template = (args: any) => <Button {...args}></Button>;

export const Main: any = Template.bind({});
Main.args = {
  children: "Sign in",
  className: "",
  theme: "info",
  fill: "solid",
};
