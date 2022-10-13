import { Meta, StoryObj } from "@storybook/react";
import { ITextProps, Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
    size: "lg",
  },
} as Meta<ITextProps>;

export const Default: StoryObj = {};

export const Small: StoryObj = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: <p>testando</p>,
  },
};
