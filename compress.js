// [JavaScript] напишите функцию, которая сжимает символы в строке:
//
//   compress('aaabbc') // 'a3b2c1'
// compress('aabbcca') // 'a2b2c2a1'

const compress = symbols => {
  const res = [];
  let symbol = symbols[0];
  let amount = 0;
  let index = 0;
  while (index <= symbols.length) {
    let currentSymbol = symbols[index];
    if (symbol !== currentSymbol) {
      res.push(`${symbol}${amount}`);
      symbol = currentSymbol;
      amount = 0;
    } else {
      index += 1;
      amount += 1;
    }
  }
  return res;
};

compress("aaabbc");
compress("aabbcca");
