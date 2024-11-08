import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "../Page";
import { withProviders } from "../../roy3/test-utils";
import { mockHandlers } from "../../roy3/handlers";

const meta: Meta<typeof Page> = {
  title: "Roy4/Page",
  component: Page,
  decorators: [withProviders],
  parameters: {
    // Default parameters that apply to all stories
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [mockHandlers],
    },
  },
};
