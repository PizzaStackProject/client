import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header.component";

const meta = {
  title: "Common/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {} satisfies Story;

export const Loading: Story = {
  args: {
    isLoading: true,
    categories: [
      {
        id: "b790a7d3-5b87-47c6-b14c-8f32407797c2",
        slug: "pizza",
        title: "Pizza",
      },
      {
        id: "8094043e-b153-458e-a1ae-dd2795548445",
        slug: "drink",
        title: "Drink",
      },
    ],
  },
} satisfies Story;
