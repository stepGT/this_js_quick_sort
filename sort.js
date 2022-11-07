const arr = [];

const quickSort = (array) => {
  if (array.length < 2 || !array.length) return array;
  const root = array[Math.floor(array.length / 2)];
  const less = [];
  const greater = [];
  //
  for (let i = 0; i < array.length; i++) {
    if (array[i] === root) continue;
    if (array[i] <= root) less.push(array[i]);
    else greater.push(array[i]);
  }
  return [...quickSort(less), root, ...quickSort(greater)];
};

console.log(quickSort(arr));
