import Button from "./Button";
import "../../index.css";
import { HiLockClosed, HiLogin} from "react-icons/hi";

const Icons = { lock: HiLockClosed, login: HiLogin };
export default {
  title: "Button",
  component: Button,
  argTypes: {
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
  theme: "info",
  fill: "solid",
  Icon: HiLockClosed,
};
