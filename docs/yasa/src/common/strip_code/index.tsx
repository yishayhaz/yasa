export const STRIP_CODE = "// @end imports@ //";

export const stripCode = (code: string) => {
  code = code
    .replace("export function", "function")
    .replace("export const", "const");

  let hasEnded = false;
  return code
    .split("\n")
    .reduce((acc, line) => {
      if (line === STRIP_CODE) {
        hasEnded = true;
        return "";
      }

      if (!hasEnded) {
        return "";
      }

      return acc + line + "\n";
    }, "")
    .trim();
};
