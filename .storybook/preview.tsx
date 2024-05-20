import type { Preview } from "@storybook/react";
import "../out/dark.css";
import "../out/light.css";
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
  // globalTypes: {
  //   themes: {
  //     description: "Global theme for components",
  //     defaultValue: "light",
  //     toolbar: {
  //       title: "Theme",
  //       icon: "circlehollow",
  //       items: ["light", "dark"],
  //     },
  //   },
  // },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
