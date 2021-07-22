import Avatar from "./Avatar";
import '../../index.css'

export default {
  title: "Avatar Array",
  component: Avatar,
  argTypes: {
    avatarlength: {
      control: {
        type: "range",
        min: 0,
        step: 1,
        max: 10,
      },
    },
  },
};

export const Template = (args: any) => <Avatar {...args}></Avatar>

Template.args = {
  avatarlength:5,
};