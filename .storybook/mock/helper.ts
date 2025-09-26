export const mockDelay = (seconds: number = 1) =>  new Promise((resolve) =>
  setTimeout(resolve, 1000 * seconds)
);

