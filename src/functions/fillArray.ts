function fillArray<T>(
  callback: (index: number) => T | Promise<T>,
  length: number = 1,
): T[] | Promise<T[]> {
  const outputArray = new Array(length).fill(null).map((_, index) => {
    return callback(index);
  });

  const isAsync = outputArray.some((item) => {
    return item instanceof Promise;
  });
  if (isAsync) {
    return Promise.all(outputArray);
  }

  return outputArray as T[];
}

export default fillArray;
