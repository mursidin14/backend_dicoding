// looping method

// const myArray = [1, 2, 3, 4, 5];
// let sum = 0;

// for(let i = 0; i < myArray.length; i++){
//     sum += myArray[i];
// }

// console.log(sum);

// reduce method

// const myArray = [1, 2, 3, 4, 5];

// let sum = myArray.reduce((prev, curr) => {
//      return prev + curr
// });

//  console.log(sum);

import lodash from 'lodash';

const myArray = [1, 2, 3, 4, 5];

let sum = lodash.sum(myArray);

console.log(sum);