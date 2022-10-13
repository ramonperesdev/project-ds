import { Meta, StoryObj } from "@storybook/react";
import { ITextProps, Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextProps>;

export const Default: StoryObj<ITextProps> = {};

export const Small: StoryObj<ITextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<ITextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    asChild: true,
    children: <p>text with p</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
