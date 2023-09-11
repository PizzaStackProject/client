import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menu-item.component";


const meta = {
  title: "Menu/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;


const values = {
  image: "/assets/pizza/manhattan.jpeg",
  weight: 555,
  title: "Pizza Manhattan",
  ingredients: "Mushrooms, Mozzarella, Peperoni,Souse Alfredo",
  price: 20,
};

export const Primary: Story = {
  args: values,
} satisfies Story;
