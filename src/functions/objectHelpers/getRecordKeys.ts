import type { RecordKey } from "src/types";

function getRecordKeys<T extends Record<RecordKey, unknown>>(record: T & object): (keyof T)[] {
  return Object.keys(record) as (keyof T)[];
}

export default getRecordKeys;
