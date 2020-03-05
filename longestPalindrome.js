// longestPalindrome('babad') // 'bab' или 'aba'
// longestPalindrome('cbbd') // 'bb'
// longestPalindrome('dbabddb') // 'dbabd'

const longestPalindrome = list => {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    let start = list[i];
    for (let j = i + 1; j < list.length; j++) {
      let finish = list[j];
      if (start === finish) {
        let subArr = list.slice(i, j + 1);
        if (checkPalindrome(subArr)) {
          res.push(subArr);
        }
      }
    }
  }
  return sortPalindromes(res)[0];
};

const sortPalindromes = palindromes => {
  return palindromes.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else if (a.length < b.length) {
      return 1;
    }
    return 0;
  });
};

const checkPalindrome = list => {
  const length = list.length - 1;
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== list[length - i]) {
      return false;
    }
  }
  return true;
};

console.log(longestPalindrome("dbabddb"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babad"));
