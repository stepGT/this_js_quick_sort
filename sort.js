const arr = [7, 1, 4, 2, 3, 5, 8, 0, 6, 9];

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

const IQuickSort = (array) => {
  return IQuickSortHelper(array, 0, array.length - 1);
};

const IQuickSortHelper = (array, left, right) => {
  if (array.length < 2) return array;
  const index = partition(array, left, right);
  if (left < index - 1) IQuickSortHelper(array, left, index - 1);
  if (index < right) IQuickSortHelper(array, index, right);
  return array;
};

const partition = (array, left, right) => {
  const root = array[Math.floor((left + right) / 2)];
  //
  while (left <= right) {
    while (array[left] < root) {
      left++;
    }
    while (array[right] > root) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const swap = (array, i, j) => {
  const temp = array[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//console.log(quickSort(arr));
console.log(IQuickSort(arr));
