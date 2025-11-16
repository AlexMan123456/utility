import fillArray from "src/functions/fillArray";
import interpolate from "src/functions/taggedTemplate/interpolate";

export interface StripIndentsOptions {
  whitespaceLength?: number;
  preserveTabs?: boolean;
}

function calculateTabSize(line: string, whitespaceLength: number = 12): number {
  const potentialWhitespacePart = line.slice(0, whitespaceLength);
  const trimmedString = line.trimStart();

  if (potentialWhitespacePart.trim() !== "") {
    return 0;
  }

  const tabSize = line.length - (trimmedString.length + whitespaceLength);

  return tabSize < 0 ? 0 : tabSize;
}

function reduceLines(
  lines: string[],
  { whitespaceLength = 12, preserveTabs = true }: StripIndentsOptions,
): string {
  return lines
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

export type StripIndentsFunction = (
  strings: TemplateStringsArray,
  ...interpolations: unknown[]
) => string;

function stripIndents(options: StripIndentsOptions): StripIndentsFunction;
function stripIndents(strings: TemplateStringsArray, ...interpolations: unknown[]): string;

function stripIndents(
  first: TemplateStringsArray | StripIndentsOptions,
  ...args: unknown[]
): string | StripIndentsFunction {
  if (typeof first === "object" && first !== null && !Array.isArray(first)) {
    const options = first as StripIndentsOptions;
    return (strings: TemplateStringsArray, ...interpolations: unknown[]) => {
      return stripIndents(strings, ...interpolations, options);
    };
  }

  const strings = first as TemplateStringsArray;
  const options: StripIndentsOptions =
    typeof args[args.length - 1] === "object" && !Array.isArray(args[args.length - 1])
      ? (args.pop() as StripIndentsOptions)
      : {};
  const interpolations = [...args];

  const fullString = interpolate(strings, ...interpolations);
  return reduceLines(fullString.split("\n"), options);
}

export default stripIndents;
