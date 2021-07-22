import Listavatar from "./Listavatar";
import "../../index.css"


export default {
  title: "Avatar Stacked",
  component: Listavatar,
  argTypes: {
    avatarLength: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
};

export const main = (args: any) => <Listavatar {...args}></Listavatar>;

main.args = {
  avatarLength:5,
};
