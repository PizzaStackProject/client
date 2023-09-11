import type { Meta, StoryObj } from "@storybook/react";
import { MenuListLoading} from "./menu-list-loading.component";

const meta = {
  title: "Menu/MenuListLoading",
  component: MenuListLoading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuListLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: 3,
  },
} satisfies Story;
