import Avatar from "./Avatar";
import "../../index.css";

export default {
  title: "Avatar",
  component: Avatar,
};

const Template = (args: any) => <Avatar {...args}></Avatar>;

export const Main: any = Template.bind({});
Main.args = {
  image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  status: "undefined",
  size: "large",
};
