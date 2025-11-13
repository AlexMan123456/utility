import parseIntStrict from "src/functions/parseIntStrict";

export interface KebabToCamelOptions {
  startWithUpper?: boolean;
}

function kebabToCamel(string: string, options?: KebabToCamelOptions): string {
  if (string !== string.toLowerCase()) {
    throw new Error("INVALID_KEBAB_CASE_INPUT");
  }
  if (string.startsWith("-") || string.endsWith("-") || string.includes("--")) {
    throw new Error("INVALID_KEBAB_CASE_INPUT");
  }

  let outputString = "";
  let skip = false;
  for (const stringIndex in [...string]) {
    if (skip) {
      skip = false;
      continue;
    }
    const index = parseIntStrict(stringIndex);
    if (index === 0 && options?.startWithUpper) {
      outputString += string[index].toUpperCase();
      continue;
    }

    if (index === string.length - 1) {
      outputString += string[index];
      break;
    }

    if (string[index] === "-" && /^[a-zA-Z]+$/.test(string[index + 1])) {
      outputString += string[index + 1].toUpperCase();
      skip = true;
    } else {
      outputString += string[index];
    }
  }
  return outputString;
}

export default kebabToCamel;
