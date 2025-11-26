export type ParallelTuple<A, B> = [A, B | undefined];

function paralleliseArrays<FirstArrayItem, SecondArrayItem>(
  firstArray: FirstArrayItem[] | readonly FirstArrayItem[],
  secondArray: SecondArrayItem[] | readonly SecondArrayItem[],
): ParallelTuple<FirstArrayItem, SecondArrayItem>[] {
  const outputArray: ParallelTuple<FirstArrayItem, SecondArrayItem>[] = [];

  for (let i = 0; i < firstArray.length; i++) {
    outputArray.push([firstArray[i], secondArray[i]]);
  }

  return outputArray;
}

export default paralleliseArrays;
