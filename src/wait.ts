function wait(seconds: number): Promise<void> {
  return new Promise<void>((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export default wait;
