import type { Meta, StoryObj } from "@storybook/react";
import { ShowInfo } from "./show-info.component";

const meta = {
  title: "Common/ShowInfo",
  component: ShowInfo,
} satisfies Meta<typeof ShowInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: "error",
    children: (
      <>
        <p>Sorry. It's error</p>
        <p>Try later</p>
      </>
    ),
  },
} satisfies Story;

export const Info: Story = {
  args: {
    type: "info",
    children: (
      <>
        <p>Sorry. Menu is empty</p>
      </>
    ),
  },
} satisfies Story;

