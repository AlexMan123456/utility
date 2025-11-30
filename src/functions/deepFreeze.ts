import type { DeepReadonly } from "src/types/DeepReadonly";

function deepFreeze<T extends object>(object: T): DeepReadonly<T> {
  for (const value of Object.values(object)) {
    if (typeof value === "function") {
      continue;
    }
    // Both arrays and objects are considered object in JavaScript
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object) as DeepReadonly<T>;
}

export default deepFreeze;
