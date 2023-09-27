import type { Meta, StoryObj } from "@storybook/react";
import { MenuCategoryLoading } from "./menu-category-loading.component";

const meta = {
  title: "Menu/MenuCategoryLoading",
  component: MenuCategoryLoading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuCategoryLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {} satisfies Story;
