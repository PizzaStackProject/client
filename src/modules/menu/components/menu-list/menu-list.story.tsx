import type { Meta, StoryObj } from "@storybook/react";
import { MenuList } from "./menu-list.component";
import pizzaMenu from '@app/mocks/pizza.json';

const meta = {
  title: "Menu/MenuList",
  component: MenuList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: pizzaMenu,
  },
} satisfies Story;
