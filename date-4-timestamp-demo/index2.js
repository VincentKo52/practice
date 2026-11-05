//Date object bukan untuk merepresentasikan tanggal karena berat (tujuannya hanya untuk memproses date)

const date = new Date('2026-11-04T19:00:00.005Z');

//console.log(date.getMilliseconds()); // hanya mendapat ms -> 5
//console.log(date.getTime()); //untuk mendapatkan interval -> 1793818800005

const milliseconds = date.getTime() + 10 * 24 * 60 * 60 * 1000; //untuk mendapatkan tanggal expired 10 hari kemudian
const expiredDate = new Date(milliseconds);

console.log(date);        // 2026-11-04T19:00:00.005Z
console.log(expiredDate); // 2026-11-14T19:00:00.005Z

console.log('--------------------------------------------------');

const date2 = new Date('2026-11-04T19:00:00.005Z');
date2.setDate(14);  // tidak boleh melakukan setDate(14) secara langsung karena mendapatkan date dari local timezone (relatif)
console.log(date2); // 2026-11-13T19:00:00.005Z (malah dapat tgl 13)

console.log('--------------------------------------------------');

const date3 = new Date('2026-11-04T19:00:00.005Z');
console.log(date3.getDate(date3)); // 5 (karena relatif tehadap local time)

date3.setDate(15);  // jadi setDate ke tgl 15 agar bisa mendapat tgl 14
console.log(date3); // 2026-11-14T19:00:00.005Z

console.log('--------------------------------------------------');

//CARA YANG BENAR UNTUK SET DATE TAMBAH 10 HARI MENJADI TGL 14
const date4 = new Date('2026-11-04T19:00:00.005Z');
date4.setDate(date4.getDate() + 10); // dengan getDate dapat 4 lalu ditambah 10 = tgl 14
console.log(date4);  // 2026-11-14T19:00:00.005Z

console.log('--------------------------------------------------');

//DENGAN FITUR AUTOCORRECT
const date5 = new Date('2026-11-04T19:00:00.005Z');
date5.setDate(date5.getDate() + 100);  // bisa setDate 100 hari kemudian
console.log(date5);  // 2027-02-12T19:00:00.005Z 

date.setMonth(date.getMonth() + 10);   // bisa setDate 10 bulan kemudian
console.log(date);   // 2027-09-04T19:00:00.005Z 

date3.setMinutes(date3.getMinutes() + 5); //set waktu expired OTP dalam 5 menit
console.log(date3);  // 2026-11-14T19:05:00.005Z

console.log('--------------------------------------------------');

// .setYear()       -> buatan Ms.Explorer (bisa 2 digit = berantakan / banyak bug)
// .setFullYear();  -> dari komunitas JavaScript, terciptalah setFullYear

const date6 = new Date('2026-11-04T19:00:00.005Z');
date6.setFullYear(date6.getFullYear() + 5);
console.log(date6);





