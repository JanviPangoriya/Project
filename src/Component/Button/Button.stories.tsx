import Button from "./Button";
import "../../index.css";
import { HiLockClosed, HiLogin, HiMoon } from "react-icons/hi";

const Icons = { lock: HiLockClosed, login: HiLogin };
export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
    },
    Icon: {
      control: { type: "select" },
      options: Object.keys(Icons),
      mapping: Icons,
      labels: {
        HiLockClosed: "lock closed",
        HiLogin: "Login Icon",
      },
    },
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
  type: "submit",
  theme: "info",
  fill: "solid",
  Icon: HiLockClosed,
};
