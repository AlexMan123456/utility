/* eslint-disable @typescript-eslint/no-deprecated */
/**
 * @deprecated The functionality of fillArrayAsync has been combined with fillArray, so fillArray should now be used instead.
 */
async function fillArrayAsync<T>(
  callback: (index: number) => Promise<T>,
  length: number = 1,
): Promise<T[]> {
  return Promise.all(
    new Array(length).fill(null).map(async (_, index) => {
      return await callback(index);
    }),
  );
}

export default fillArrayAsync;
