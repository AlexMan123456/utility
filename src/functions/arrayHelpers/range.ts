function range(start: number, stop: number, step: number = 1): number[] {
  const numbers: number[] = [];
  if (step === 0) {
    throw new Error("ZERO_STEP_SIZE_NOT_ALLOWED");
  } else if (step > 0) {
    if (start > stop) {
      throw new Error("INVALID_BOUNDARIES");
    }
    for (let i = start; i < stop; i += step) {
      numbers.push(i);
    }
  } else if (step < 0) {
    if (start < stop) {
      throw new Error("INVALID_BOUNDARIES");
    }
    for (let i = start; i > stop; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

export default range;
