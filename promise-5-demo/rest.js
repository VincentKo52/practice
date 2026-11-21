// function sum(...nums) {
//     console.log(nums);
// }

// sum(1, 2, 3); // hasilnya akan menjadi array [ 1, 2, 3 ]

// Kegunaan dari Rest operator -> menggabungkan menjadi satu (array)
// sebelum tahun 2015, arguments yang dipakai bukan spread
// function sum() {
function sum(...nums) {
    let total = 0;
    // for (const num of arguments) {  //arguments tidak dipakai lagi
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));  //55

const person = {
    firstName: 'Edward',
    lastName: 'Anthony',
};

//dengan spread juga bisa didaptkan firstName sekaligus lastName person
const obj = {
    ...person, 
    age: 25,
    city: 'Jakarta',
};

console.log(obj); // { firstName: 'Edward', lastName: 'Anthony', age: 25, city: 'Jakarta' }





