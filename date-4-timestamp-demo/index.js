// Absolute
// 1. Unix timestamp (ms)
const date1 = new Date(1793796288683);
console.log(date1);

// 2. ISO8601
const date2 = new Date('2026-11-04T19:45:30.000+00:00'); //timezone +0
const date3 = new Date('2026-11-04T19:45:30.000Z'); // cara ninja (jika tidak ditambah Z, maka akan menjadi relative)
console.log(date2);
console.log(date3);

// Relative
const date4 = new Date(2026, 10, 4, 19, 49, 0, 0); // relative terhadap local timezone
console.log(date4);

const person = {
    name: 'Roger',
    birthDate1: new Date(2002, 10, 5),               //2002-11-04T17:00:00.000Z  (object is expensive)
    birthDate2: new Date(2002, 10, 5).toISOString(), //'2002-11-04T17:00:00.000Z' (ISO8601)
    birthDate3: new Date(2002, 10, 5).getTime(),     //1036429200000   (unix timestamp (ms))
    birthDate4: '2002-10-05T19:45:30.000+07:00',     //'2002-10-05T19:45:30.000+07:00' (timestamp ditetapkan langsung)
}
console.log(person);

//iso8601.com








