export type FormDataResolutionStrategy = "stringify" | "empty" | "omit";

export interface CreateFormDataOptionsUndefinedOrNullResolution {
  undefinedResolution?: FormDataResolutionStrategy;
  nullResolution?: FormDataResolutionStrategy;
  nullableResolution?: never;
}

export interface CreateFormDataOptionsNullableResolution {
  undefinedResolution?: never;
  nullResolution?: never;
  nullableResolution: FormDataResolutionStrategy;
}

export type CreateFormDataOptions =
  | CreateFormDataOptionsUndefinedOrNullResolution
  | CreateFormDataOptionsNullableResolution;

function createFormData<T extends Record<string, unknown>>(
  data: T,
  options: CreateFormDataOptions = { nullableResolution: "empty" },
): FormData {
  const formData = new FormData();

  function resolveByStrategy(
    key: string,
    value: unknown,
    resolutionStrategy: FormDataResolutionStrategy,
  ) {
    switch (resolutionStrategy) {
      case "empty":
        formData.append(key, "");
        break;
      case "stringify":
        formData.append(key, JSON.stringify(value));
        break;
      case "omit":
        break;
      default:
        throw new Error("SLOPPY_PURE_JAVASCRIPT_USER_ERROR");
    }
  }

  for (const key in data) {
    if (data[key] instanceof Blob) {
      formData.append(key, data[key]);
    } else if (data[key] === undefined || data[key] === null) {
      if (options.nullableResolution) {
        resolveByStrategy(key, data[key], options.nullableResolution);
        continue;
      }
      if (options.undefinedResolution || options.nullResolution) {
        if (data[key] === undefined && options.undefinedResolution) {
          resolveByStrategy(key, data[key], options.undefinedResolution);
          continue;
        }
        if (data[key] === null && options.nullResolution) {
          resolveByStrategy(key, data[key], options.nullResolution);
          continue;
        }
      }
    } else if (typeof data[key] === "object") {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, String(data[key]));
    }
  }
  return formData;
}

export default createFormData;
