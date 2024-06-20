import type { Preview } from "@storybook/react";
import "../theme/dark.css";
import "../theme/light.css";
import { Canvas } from "@storybook/addon-docs";
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";

import { addons } from "@storybook/manager-api";

const withTheme = (Story, { globals }) => {
  const root: HTMLElement | null = document.querySelector(":root");
  const theme = globals.theme ?? "light";
  if (root) root.dataset.theme = theme;

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

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};
