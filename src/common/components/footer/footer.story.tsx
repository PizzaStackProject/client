import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer.component";

const meta = {
  title: "Common/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {} satisfies Story;
