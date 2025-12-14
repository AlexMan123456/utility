function isOrdered(array: readonly number[] | number[]): boolean {
  const newArray = [...array];
  newArray.sort();

  for (const index in newArray) {
    if (newArray[index] !== array[index]) {
      return false;
    }
  }

  return true;
}

export default isOrdered;
