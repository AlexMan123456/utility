import type { RecordKey } from "src/types";

export type FormDataNullableResolutionStrategy = "stringify" | "empty" | "omit";
export type FormDataArrayResolutionStrategy = "stringify" | "multiple";

export interface CreateFormDataOptionsBase<K extends RecordKey> {
  arrayResolution?:
    | FormDataArrayResolutionStrategy
    | Partial<Record<K, FormDataArrayResolutionStrategy>>;
}

export interface CreateFormDataOptionsUndefinedOrNullResolution<K extends RecordKey>
  extends CreateFormDataOptionsBase<K> {
  undefinedResolution?:
    | FormDataNullableResolutionStrategy
    | Partial<Record<K, FormDataNullableResolutionStrategy>>;
  nullResolution?:
    | FormDataNullableResolutionStrategy
    | Partial<Record<K, FormDataNullableResolutionStrategy>>;
  nullableResolution?: never;
}

export interface CreateFormDataOptionsNullableResolution<K extends RecordKey>
  extends CreateFormDataOptionsBase<K> {
  undefinedResolution?: never;
  nullResolution?: never;
  nullableResolution:
    | FormDataNullableResolutionStrategy
    | Partial<Record<K, FormDataNullableResolutionStrategy>>;
}

export type CreateFormDataOptions<K extends RecordKey> =
  | CreateFormDataOptionsUndefinedOrNullResolution<K>
  | CreateFormDataOptionsNullableResolution<K>;

function getNullableResolutionStrategy(
  key: RecordKey,
  strategy:
    | FormDataNullableResolutionStrategy
    | Partial<Record<RecordKey, FormDataNullableResolutionStrategy>>,
) {
  return (typeof strategy === "object" ? strategy[key] : strategy) ?? "empty";
}

function createFormData<T extends Record<RecordKey, unknown>, K extends keyof T>(
  data: T,
  options: CreateFormDataOptions<K> = { arrayResolution: "stringify", nullableResolution: "empty" },
): FormData {
  const formData = new FormData();

  function resolveNullablesByStrategy(
    key: K,
    value: unknown,
    resolutionStrategy: FormDataNullableResolutionStrategy,
  ) {
    switch (resolutionStrategy) {
      case "empty":
        formData.append(String(key), "");
        break;
      case "stringify":
        formData.append(String(key), JSON.stringify(value));
        break;
      case "omit":
        break;
      default:
        throw new TypeError("SLOPPY_PURE_JAVASCRIPT_USER_ERROR");
    }
  }

  function resolveNullables(key: K, value: unknown, options: CreateFormDataOptions<K>) {
    if (options.nullableResolution) {
      resolveNullablesByStrategy(
        key,
        value,
        getNullableResolutionStrategy(key, options.nullableResolution),
      );
      return;
    }
    if (options.undefinedResolution || options.nullResolution) {
      if (data[key] === undefined && options.undefinedResolution) {
        resolveNullablesByStrategy(
          key,
          value,
          getNullableResolutionStrategy(key, options.undefinedResolution),
        );
        return;
      }
      if (data[key] === null && options.nullResolution) {
        resolveNullablesByStrategy(
          key,
          value,
          getNullableResolutionStrategy(key, options.nullResolution),
        );
      }
    }
  }

  const entries = Object.entries(data) as [K, unknown][];
  for (const [key, value] of entries) {
    if (value instanceof Blob) {
      formData.append(String(key), value);
    } else if (value === undefined || value === null) {
      resolveNullables(key, value, options);
    } else if (typeof value === "object") {
      if (
        Array.isArray(value) &&
        (options.arrayResolution === "multiple" ||
          (typeof options.arrayResolution === "object" &&
            options.arrayResolution[key] === "multiple"))
      ) {
        for (const item of value) {
          if ((typeof item === "object" || !item) && !(item instanceof Blob)) {
            throw new TypeError("NON_PRIMITIVE_ARRAY_ITEMS_FOUND");
          }
          formData.append(String(key), String(item));
        }
        continue;
      }
      formData.append(String(key), JSON.stringify(value));
    } else {
      formData.append(String(key), String(value));
    }
  }

  return formData;
}

export default createFormData;
