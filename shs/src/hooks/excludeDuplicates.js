

export const excludeDuplicates = (array) => {
  const uniqueSet = new Set();
  return array.filter((item) => {
    const key = JSON.stringify(item);
    if (!uniqueSet.has(key)) {
      uniqueSet.add(key);
      return true;
    }
    return false;
  });
};
