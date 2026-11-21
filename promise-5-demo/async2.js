async function triple(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 3), 1000);
    });
}

// await menunggu promise tersebut resolved (tanpa then)
// await dapat mengambil value lalu diassign sebagai value
async function main() {
    // const num1 = await triple(1);
    // const num2 = await triple(2);
    // const num3 = await triple(3);
    // tidak digunakan karena tidak efisien (harus tunggu 1s untuk setiap const = total 3s)

    const [num1, num2, num3] = await Promise.all([
        triple(1),
        triple(2),
        triple(3),
    ])
    // mendapatkan hasil 18 dalam waktu 1s (bukan 3s)
    // use case nya digunakan untuk mendapatkan article, post dan header secara bersamaan 
    // dengan await Promise.allSettled

    console.log(num1 + num2 + num3);  //18
}

main();  // 18