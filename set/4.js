let theNumber = 100020003000;
let set = new Set([...`${theNumber}`]);
let result = [...set].filter(e => e !== '0').join('');
console.log(result); // الناتج: 123