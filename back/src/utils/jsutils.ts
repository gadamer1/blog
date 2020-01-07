export const selectCopyObject = (from: any, select: string[]) => {
  const output: any = {};
  select.forEach(element => {
    if (from[element] !== undefined) {
      output[element] = from[element];
    }
  });

  return output;
};
