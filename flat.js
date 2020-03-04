// [JavaScript]
// задача на разворачивание многомерного массива:
//// deploy a multidimensional array
//   flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
// flat([1, 2, [3, [4]]]); // [1, 2, 3, 4]

const flat = list => {
  const res = [list[0]];
  let index = 0;

  while (true) {
    let lastElm = res.pop();
    if (typeof lastElm === "number") {
      res.push(lastElm);
      index += 1;
      let nextElm = list[index];
      if (!nextElm) {
        break;
      }
      res.push(nextElm);
    } else {
      res.push(...lastElm);
    }
  }
  return res;
};

console.log(flat([1, 2, [3, [4]]]));
console.log(flat([1, 2, [3, 4]]));
