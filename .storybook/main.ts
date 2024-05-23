// @ts-nocheck
import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],

  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config!.resolve!.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];

    config.module.rules
      .filter((rule) => rule?.test?.test(".css"))
      .forEach((rule) => (rule.exclude = /\.css$/i));

    config.module.rules
      .filter((rule) => rule?.test?.test(".scss"))
      .forEach((rule) => (rule.exclude = /\.scss$/i));

    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.module?.rules?.push({
      test: /\.css$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: ["postcss-nested"],
            },
          },
        },
      ],
    });

    config.module.rules
      .filter((rule) => rule?.test?.test(".svg"))
      .forEach((rule) => (rule.exclude = /\.svg$/i));

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });

    return config;
  },
};
export default config;
