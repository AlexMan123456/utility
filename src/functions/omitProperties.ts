function omitProperties<T extends Record<string, unknown>, K extends keyof T>(
  keysToOmit: K | readonly K[],
  object: T,
): Omit<T, K> {
  const outputObject = { ...object };
  const keysArray = Array.isArray(keysToOmit) ? keysToOmit : [keysToOmit];
  keysArray.forEach((key) => {
    delete outputObject[key];
  });
  return outputObject;
}

export default omitProperties;
