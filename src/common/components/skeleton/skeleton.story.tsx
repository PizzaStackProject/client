import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton.component";

const meta = {
  title: "Common/Skeleton",
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: 34,
        height: 19
    }
} satisfies Story;
