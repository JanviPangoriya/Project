import Avatar from "./Avatar";
import "../../index.css";

export default {
  title: "Stacked Avatar",
  component: Avatar,
  argTypes: {
    stackedlength: {
      control: {
        type: "range",
        min: 0,
        step: 1,
        max: 10,
      },
    },
  },
};

export const Template = (args: any) => <Avatar {...args}></Avatar>;

Template.args = {
  stackedlength: 4,
  AvatarImage: [
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-7.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-8.jpeg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",
  ],
};
