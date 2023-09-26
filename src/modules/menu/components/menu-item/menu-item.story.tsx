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



export const General: Story = {
  args: {
  image: "menu/menu-1695190195",
  weight: 555,
  title: "Pizza Manhattan",
  ingredients: "Mushrooms, Mozzarella, Peperoni,Souse Alfredo",
  price: 20,
},
} satisfies Story;

export const Drink: Story = {
  args: {
    image: "menu/menu-1695290698",
    title: "Pizza Manhattan",
    price: 20,
    weight: null,
    ingredients: "",
    fitImage: true,
  },
} satisfies Story;
