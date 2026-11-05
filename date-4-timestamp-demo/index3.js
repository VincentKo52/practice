//const purchaseDate = new Date('2026-11-04T20:10:00.000+07:00');
const purchaseDate = new Date(2026, 10, 4, 20, 10);  // lebih bagus

console.log(formatDate(purchaseDate));

/**
 * Format the given date in D MMMM, hh:mm
 * @param {number} millis 
 * @returns 
 */
function formatDate(millis) {
    const date = new Date(millis);
    return `${date.getDate()} ${getMonthName(date.getMonth())}, ${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}`;
}

/**
 * Get month name in Bahasa Indonessia
 * @param {number} month 
 */
function getMonthName(month) {
    switch(month) {
        case 0: return 'Januari';
        case 1: return 'Februari';
        case 2: return 'Maret';
        case 3: return 'April';
        case 4: return 'Mei';
        case 5: return 'Juni';
        case 6: return 'Juli';
        case 7: return 'Agustus';
        case 8: return 'September';
        case 9: return 'Oktober';
        case 10: return 'November';
        case 11: return 'Desember';
    }
}

const now = new Date();       // maka akan terprint date saat ini sesuai timezone komputer +0
console.log(now);             // 2026-11-05T17:22:27.420Z 
console.log(formatDate(now)); // 6 November, 00:22 (print Date saat ini juga dengan formatDate sebelumnya)










