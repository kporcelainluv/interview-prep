// [JavaScript]
// напишите сокращатель диапазонов чисел в отсортированном массиве уникальных значений.
// write a range shortener in a sorted array of unique values.

// short([1, 2, 3, 4, 5, 6]) // "1-6"
// short([1, 2, 3, 5, 6, 8]) // "1-3, 5, 6, 8"
// short([-3, -2, -1, 1, 2, 3]) // "-3--1, 1-3"

function diapason(list) {
  let index = 0;
  let res = [];

  let start = list[0];
  let finish = undefined;

  while (index < list.length) {
    let currentN = list[index];
    if (currentN + 1 === list[index + 1]) {
      finish = list[index + 1];
    } else {
      if (finish - start >= 2) {
        res.push(`${start}-${finish}`);
      } else if (finish - start === 1) {
        res.push(start);
        res.push(finish);
      } else {
        res.push(currentN);
      }
      start = list[index + 1];
      finish = undefined;
    }
    index += 1;
  }
  return res.join(", ");
}
diapason([1, 2, 3, 4, 5, 6]); // "1-6"
diapason([1, 2, 3, 5, 6, 8]); // "1-3, 5, 6, 8"
diapason([-3, -2, -1, 1, 2, 3]); // "-3--1, 1-3"
