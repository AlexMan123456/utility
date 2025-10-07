function omitProperties<T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keysToOmit: K | readonly K[],
): Omit<T, K> {
  const outputObject = { ...object };
  const keysArray = Array.isArray(keysToOmit) ? keysToOmit : [keysToOmit];
  keysArray.forEach((key) => {
    delete outputObject[key];
  });
  return outputObject;
}

export default omitProperties;
