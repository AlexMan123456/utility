import fillArray from "src/functions/fillArray";
import interpolate from "src/functions/taggedTemplate/interpolate";

function calculateTabSize(line: string): number {
  const defaultWhitespaceLength = 12;
  const potentialWhitespacePart = line.slice(0, defaultWhitespaceLength);
  const trimmedString = line.trim();

  if (potentialWhitespacePart.trim() !== "") {
    return 0;
  }

  const tabSize = line.length - (trimmedString.length + defaultWhitespaceLength);

  return tabSize < 0 ? 0 : tabSize;
}

function reduceLines(lines: string[]): string {
  return lines
    .map((line) => {
      const tabSize = calculateTabSize(line);
      return (
        fillArray(() => {
          return " ";
        }, tabSize).join("") + line.trim()
      );
    })
    .join("\n");
}

function stripIndents(strings: TemplateStringsArray, ...interpolations: unknown[]): string {
  const fullString = interpolate(strings, ...interpolations);
  return reduceLines(fullString.split("\n"));
}

export default stripIndents;
