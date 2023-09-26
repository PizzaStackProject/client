import type { Meta, StoryObj } from "@storybook/react";
import { MenuCategory } from "./menu-category.component";

const meta = {
  title: "Menu/MenuCategory",
  component: MenuCategory,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuCategory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      id: "b790a7d3-5b87-47c6-b14c-8f32407797c2",
      title: "Pizza",
      slug: "pizza",
      menu_items: [
        {
          id: 1,
          image: "manhattan.jpeg",
          weight: 555,
          title: "Manhattan Pizza",
          ingredients:
            "(double portion of mushrooms), Mushrooms, Mozzarella, Pepperoni, Alfredo Sauce",
          price: 215,
        },
        {
          id: 2,
          image: "pepperoni-w-tomatoes.jpeg",
          weight: 554,
          title: "Pepperoni Pizza with Tomatoes",
          ingredients: "Mozzarella, Pepperoni, Tomatoes, Barbecue Sauce",
          price: 215,
        },
      ],
    },
  },
} satisfies Story;
