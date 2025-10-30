function deepFreeze<T extends object>(object: T): Readonly<T> {
  for (const value of Object.values(object)) {
    // Both arrays and objects are considered object in JavaScript
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

export default deepFreeze;
