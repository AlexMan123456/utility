import type { CreateEnumType } from "src/types/CreateEnumType";

/**
 * Represents the three common software version types.
 *
 * @category Types
 */
export const VersionType = {
  MAJOR: "major",
  MINOR: "minor",
  PATCH: "patch",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type VersionType = CreateEnumType<typeof VersionType>;
