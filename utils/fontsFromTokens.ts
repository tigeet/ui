const css = ``;
const fonts = new Set();
for (const line of css.split(";")) {
  const match = /\-\-([a-zA-Z0-9\-]+)\:/gi.exec(line);
  if (!match) {
    continue;
  }
  const fontName = match[1];
  console.log(fontName);
  fonts.add(`"${fontName}"`);
}

console.log([...fonts].join(", "));
