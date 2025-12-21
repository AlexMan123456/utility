import type { CreateEnumType } from "src/types/CreateEnumType";

export const VersionType = {
  major: "major",
  minor: "minor",
  patch: "patch",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type VersionType = CreateEnumType<typeof VersionType>;
