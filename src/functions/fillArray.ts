function fillArray<T>(callback: (index: number) => T, length: number = 1): T[] {
  return new Array(length).fill(null).map((_, index) => {
    return callback(index);
  });
}

export default fillArray;
