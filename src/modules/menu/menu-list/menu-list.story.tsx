import type { Meta, StoryObj } from "@storybook/react";
import { MenuList } from "./menu-list.component";

const meta = {
  title: "Menu/MenuList",
  component: MenuList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {} satisfies Story;
