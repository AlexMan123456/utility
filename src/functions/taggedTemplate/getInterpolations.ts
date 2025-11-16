function getInterpolations(
  strings: TemplateStringsArray,
  ...interpolations: unknown[]
): [TemplateStringsArray, unknown[]] {
  return [strings, interpolations];
}

export default getInterpolations;
