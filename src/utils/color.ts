/* 
https://stackoverflow.com/questions/1855884/determine-font-color-based-on-background-color
https://en.wikipedia.org/wiki/Relative_luminance
*/

function getRelativeLuminance(hexColor: string) {
  function sum(acc: number, val: number) {
    return acc + val;
  }

  const hex = hexColor.replace(/#/, "");
  const MAX_COLOR_RANGE = 255;

  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);

  const color = [0.2126 * red, 0.7152 * green, 0.0722 * blue];

  const relativeLuminance = color.reduce(sum, 0) / MAX_COLOR_RANGE;

  return relativeLuminance;
}

export function getFontColor(hexColor: string) {
  return getRelativeLuminance(hexColor) > 0.5 ? "#252628" : "#FFFFFF";
}
