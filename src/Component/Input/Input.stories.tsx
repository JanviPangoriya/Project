import Input from "./Input";

export default {
    title: "Form Input",
    component : Input,
}
const Template = (args: any) => <Input {...args}></Input>;

export const Main: any = Template.bind({});
Main.args = {
  className: "",
  touched: false,
  error: "Error Message",
  placeholder: "Enter your Username",
};
