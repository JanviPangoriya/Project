import Avatar from "./Avatar";
import "../../index.css";

export default {
  title: "Avatar",
  component: Avatar,
  
};

const Template = (args: any) => <Avatar {...args}></Avatar>;

export const Main: any = Template.bind({});
Main.args = {
    className: "",
};
