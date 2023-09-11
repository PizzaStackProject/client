import type { Meta, StoryObj } from "@storybook/react";
import { MenuItemLoading } from "./menu-item-loading.component";
const meta = {
  title: "Menu/MenuItemLoading",
  component: MenuItemLoading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuItemLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {} satisfies Story;