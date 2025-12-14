function callDeepCopy<T>(input: T) {
  return typeof input === "object" && input !== null ? deepCopy(input) : input;
}

function deepCopy<T extends object>(object: T): T {
  if (Array.isArray(object)) {
    return object.map((item) => {
      return callDeepCopy(item);
    }) as T;
  }

  const clonedObject: T = { ...object };
  for (const key in clonedObject) {
    const value = clonedObject[key];
    clonedObject[key] = callDeepCopy(value);
  }

  return clonedObject;
}

export default deepCopy;
