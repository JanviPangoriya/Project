import AvatarList from "./AvatarList";
import "../../index.css";

export default {
  title: "AvatarList",
  component: AvatarList,
  argTypes: {
    avatarlength: {
      control: {
        type: "range",
        min: 0,
        max: 10,
      },
    },
  },
};

export const Main = (args:any) => <AvatarList {...args}>
    
</AvatarList>

Main.args = {
    avatarlength: 5,
    className:""
};
