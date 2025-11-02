export interface StringListToArrayOptions {
  separator?: string;
  trimWhitespace?: boolean;
}

function stringListToArray(
  stringList: string,
  { separator = ",", trimWhitespace = true }: StringListToArrayOptions = {},
): string[] {
  if (trimWhitespace && stringList.trim() === "") {
    return [];
  }

  const arrayList = stringList.split(separator ?? "");

  return trimWhitespace
    ? arrayList.map((item) => {
        return item.trim();
      })
    : arrayList;
}

export default stringListToArray;
