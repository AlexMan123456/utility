import fillArray from "src/functions/arrayHelpers/fillArray";
import interpolate from "src/functions/taggedTemplate/interpolate";

export interface NormaliseIndentsOptions {
  preserveTabs?: boolean;
}
export type NormalizeIndentsOptions = NormaliseIndentsOptions;

function calculateTabSize(line: string, whitespaceLength: number): number {
  const potentialWhitespacePart = line.slice(0, whitespaceLength);
  const trimmedString = line.trimStart();

  if (potentialWhitespacePart.trim() !== "") {
    return 0;
  }

  const tabSize = line.length - (trimmedString.length + whitespaceLength);

  return tabSize < 0 ? 0 : tabSize;
}

function getWhitespaceLength(lines: string[]): number {
  const [firstNonEmptyLine] = lines.filter((line) => {
    return line.trim() !== "";
  });
  return firstNonEmptyLine.length - firstNonEmptyLine.trimStart().length;
}

function reduceLines(lines: string[], { preserveTabs = true }: NormaliseIndentsOptions): string {
  const slicedLines = lines.slice(1);
  const isFirstLineEmpty = lines[0].trim() === "";
  const whitespaceLength = getWhitespaceLength(isFirstLineEmpty ? lines : slicedLines);

  return (isFirstLineEmpty ? slicedLines : lines)
    .map((line) => {
      const tabSize = calculateTabSize(line, whitespaceLength);
      return (
        (preserveTabs
          ? fillArray(() => {
              return " ";
            }, tabSize).join("")
          : "") + line.trimStart()
      );
    })
    .join("\n");
}

export type NormaliseIndentsFunction = (
  strings: TemplateStringsArray,
  ...interpolations: unknown[]
) => string;
export type NormalizeIndentsFunction = NormaliseIndentsFunction;

function normaliseIndents(options: NormaliseIndentsOptions): NormaliseIndentsFunction;
function normaliseIndents(strings: TemplateStringsArray, ...interpolations: unknown[]): string;

function normaliseIndents(
  first: TemplateStringsArray | NormaliseIndentsOptions,
  ...args: unknown[]
): string | NormaliseIndentsFunction {
  if (typeof first === "object" && first !== null && !Array.isArray(first)) {
    const options = first as NormaliseIndentsOptions;
    return (strings: TemplateStringsArray, ...interpolations: unknown[]) => {
      return normaliseIndents(strings, ...interpolations, options);
    };
  }

  const strings = first as TemplateStringsArray;
  const options: NormaliseIndentsOptions =
    typeof args[args.length - 1] === "object" && !Array.isArray(args[args.length - 1])
      ? (args.pop() as NormaliseIndentsOptions)
      : {};
  const interpolations = [...args];

  const fullString = interpolate(strings, ...interpolations);
  return reduceLines(fullString.split("\n"), options);
}

export const normalizeIndents = normaliseIndents;

export default normaliseIndents;
