import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [
    async () => ({
      currentUser: await (
        await fetch("https://jsonplaceholder.typicode.com/users/1")
      ).json(),
    }),
  ],
};

export default preview;
