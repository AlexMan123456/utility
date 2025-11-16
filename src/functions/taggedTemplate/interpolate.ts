import paralleliseArrays from "src/functions/paralleliseArrays";

function interpolate(strings: TemplateStringsArray, ...interpolations: unknown[]): string {
  let result = "";
  for (const [string, interpolation = ""] of paralleliseArrays(strings, interpolations)) {
    result += string + interpolation;
  }
  return result;
}

export default interpolate;
