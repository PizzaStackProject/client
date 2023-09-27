import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link.component";

const meta = {
  title: "Common/Link",
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    url: "/",
    children: "Pizza",
  },
} satisfies Story;
