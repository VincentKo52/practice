// ...variable -> (spread operator) atau (rest operator)
// spread dan rest operator banyak digunakan di React

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// const mergeNums = nums1.concat(nums2); // [ 1, 2, 3, 4, 5, 6 ]
// spread merupakan alt dari concat 
// spread -> membongkar array menjadi numbers
const spreadMerge1 = [1, 2, 3, ...nums2];
const spreadMerge2 = [...nums1, 4, 5, 6];
const mergeNums = [...nums1, ...nums2];

console.log(spreadMerge1);
console.log(spreadMerge2);
console.log(mergeNums);

// concat lebih cepat namun spread memiliki kegunaan lain:
const copyOfNums1 = nums1;
copyOfNums1.push(5);

// console.log(nums1); 
// console.log(copyOfNums1);
// kedua2nya akan menghasilkan [ 1, 2, 3, 5 ] karena keduanya ikut berubah (array copy by reference)

//const copyOfNums2 = nums2.slice();
const copyOfNums2 = [...nums2];
nums2.push(10); // [ 4, 5, 6, 10 ]
// spread juga bisa digunakan sebagai alt dari slice untuk mendapatkan [ 4, 5, 6 ]
// slice lebih bagus dalam performa untuk mendapatkan copynya

console.log(copyOfNums2); 








