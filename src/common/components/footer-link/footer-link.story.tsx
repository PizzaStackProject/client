import type { Meta, StoryObj } from "@storybook/react";
import { FooterLink } from "./footer-link.component";

const meta = {
  title: "Common/FooterLink",
  component: FooterLink,
} satisfies Meta<typeof FooterLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "tel:+00 00 00 00",
    children: "00 00 00 00",
  },
} satisfies Story;
