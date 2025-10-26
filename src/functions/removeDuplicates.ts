function removeDuplicates<T>(array: T[]): T[] {
  const outputArray: T[] = [];
  for (const item of array) {
    if (!outputArray.includes(item)) {
      outputArray.push(item);
    }
  }
  return outputArray;
}

export default removeDuplicates;
