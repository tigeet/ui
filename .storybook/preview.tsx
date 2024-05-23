import type { Preview } from "@storybook/react";
import "../theme/dark.css";
import "../theme/light.css";
import React from "react";

const withTheme = (Story, { globals }) => {
  const root: HTMLElement | null = document.querySelector(":root");
  console.log("@with theme", root);
  if (root) root.dataset.theme = globals.theme ?? "light";
  return <Story />;
};
const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
