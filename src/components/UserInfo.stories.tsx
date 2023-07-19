import type { Meta, StoryObj } from "@storybook/react";

import { UserInfo } from "./UserInfo";

const meta = {
  title: "UserInfo",
  component: UserInfo,
  /*  render: (args, { loaded: { currentUser } }) => {
    console.log("currentUser", JSON.stringify(currentUser, null, 2));
    return <UserInfo {...currentUser} />;
  }, */
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Example Story with custom render function using a loader
 */
export const Starter: Story = {
  render: (args, { loaded: { currentUser } }) => {
    console.log("currentUser", JSON.stringify(currentUser, null, 2));
    return <UserInfo {...currentUser} />;
  },
};
