export type ParallelTuple<A, B> = [A, B | undefined];

function paralleliseArrays<FirstArrayItem, SecondArrayItem>(
  firstArray: FirstArrayItem[],
  secondArray: SecondArrayItem[],
): ParallelTuple<FirstArrayItem, SecondArrayItem>[] {
  const outputArray: ParallelTuple<FirstArrayItem, SecondArrayItem>[] = [];

  for (let i = 0; i < firstArray.length; i++) {
    outputArray.push([firstArray[i], secondArray[i]]);
  }

  return outputArray;
}

export default paralleliseArrays;
