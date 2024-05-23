const path = require("path");
const { glob } = require("glob");
const fs = require("fs");
const watch = require("glob-watcher");
const readline = require("readline");

type Config = {
  outDir: string;
  watch: boolean;
};

const themes = ["light", "dark"] as const;
type Theme = (typeof themes)[number];

type RawTokens = Record<string, string>;

const makeConfig = (): Config => {
  const outDir = path.resolve(process.env.OUT ?? "");
  const watch = Boolean(process.env.WATCH);

  return { outDir, watch };
};

const config = makeConfig();

const parseFile = async (file: string): Promise<RawTokens> => {
  const content: string = fs.readFileSync(file, "utf8");
  const match = /\{([^}]*)\}/g.exec(content)?.[1] ?? "";
  const tokens: RawTokens = {};
  for (const line of match?.split(";")) {
    if (/^\s*\/\*.*\*\/\s*$/.test(line)) continue;
    if (/^\s*$/.test(line)) continue;

    const [key, value] = line.split(":");
    tokens[key] = value;
  }
  return tokens;
};

const saveToFile = (writeTo: string, theme: Theme, tokens: RawTokens[]) => {
  const combinedTokens: string[] = [];
  tokens.forEach((tokens) =>
    Object.keys(tokens).map((key) =>
      combinedTokens.push(`${key}:${tokens[key]}`)
    )
  );

  const content = `:root[data-theme="${theme}"] { ${combinedTokens.join(";")}}`;
  fs.writeFileSync(writeTo, content);
};

const makeTokens = async (theme: Theme, pattern: string[]) => {
  const files: string[] = await glob(pattern, { ignore: "node_modules/**" });
  const tokens = await Promise.all(files.map((file) => parseFile(file)));
  const writeTo = `${config.outDir}/${theme}.css`;
  await saveToFile(writeTo, theme, tokens);
};

const main = async () => {
  for (const theme of themes) {
    const pattern = [
      `src/**/*${theme}.tokens.css`,
      `src/theme/palette.${theme}.css`,
      `src/theme/semantic.${theme}.css`,
      `src/theme/global.${theme}.css`,
    ];

    if (config.watch) {
      await watch(pattern, async (done: Function) => {
        await makeTokens(theme, pattern);
        done();
      });
    } else {
      await makeTokens(theme, pattern);
    }
  }
};

main();
