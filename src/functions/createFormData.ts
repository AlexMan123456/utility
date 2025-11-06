export type FormDataNullableResolutionStrategy = "stringify" | "empty" | "omit";
export type FormDataArrayResolutionStrategy = "stringify" | "multiple";

export interface CreateFormDataOptionsBase {
  arrayResolution?: FormDataArrayResolutionStrategy;
}

export interface CreateFormDataOptionsUndefinedOrNullResolution extends CreateFormDataOptionsBase {
  undefinedResolution?: FormDataNullableResolutionStrategy;
  nullResolution?: FormDataNullableResolutionStrategy;
  nullableResolution?: never;
}

export interface CreateFormDataOptionsNullableResolution extends CreateFormDataOptionsBase {
  undefinedResolution?: never;
  nullResolution?: never;
  nullableResolution: FormDataNullableResolutionStrategy;
}

export type CreateFormDataOptions =
  | CreateFormDataOptionsUndefinedOrNullResolution
  | CreateFormDataOptionsNullableResolution;

function createFormData<T extends Record<string, unknown>>(
  data: T,
  options: CreateFormDataOptions = { arrayResolution: "stringify", nullableResolution: "empty" },
): FormData {
  const formData = new FormData();

  function resolveByStrategy(
    key: string,
    value: unknown,
    resolutionStrategy: FormDataNullableResolutionStrategy,
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
        throw new TypeError("SLOPPY_PURE_JAVASCRIPT_USER_ERROR");
    }
  }

  function resolveNullables(key: string, value: unknown, options: CreateFormDataOptions) {
    if (options.nullableResolution) {
      resolveByStrategy(key, value, options.nullableResolution);
      return;
    }
    if (options.undefinedResolution || options.nullResolution) {
      if (data[key] === undefined && options.undefinedResolution) {
        resolveByStrategy(key, value, options.undefinedResolution);
        return;
      }
      if (data[key] === null && options.nullResolution) {
        resolveByStrategy(key, value, options.nullResolution);
      }
    }
  }

  for (const key in data) {
    if (data[key] instanceof Blob) {
      formData.append(key, data[key]);
    } else if (data[key] === undefined || data[key] === null) {
      resolveNullables(key, data[key], options);
    } else if (typeof data[key] === "object") {
      if (Array.isArray(data[key]) && options.arrayResolution === "multiple") {
        for (const item of data[key]) {
          if ((typeof item === "object" || !item) && !(item instanceof Blob)) {
            throw new TypeError("NON_PRIMITIVE_ARRAY_ITEMS_FOUND");
          }
          formData.append(key, String(item));
        }
        continue;
      }
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, String(data[key]));
    }
  }

  return formData;
}

export default createFormData;
