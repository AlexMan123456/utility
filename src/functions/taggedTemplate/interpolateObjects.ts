function interpolateObjects(strings: TemplateStringsArray, ...values: unknown[]): string {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i !== strings.length - 1) {
      result += values[i] && typeof values[i] === "object" ? JSON.stringify(values[i]) : values[i];
    }
  }
  return result;
}

export default interpolateObjects;
