function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương:"));
        if (n <= 0 || isNaN(n)) throw "Vui lòng nhập một số nguyên dương.";

        let squares = Array.from({length: Math.floor(n / 2)}, (_, i) => (i * 2 + 2) ** 2);

        console.log(`Bình phương của các số nguyên dương chẵn từ 1 đến ${n} là: ${squares}`);
    } catch (error) {
        console.log(error);
    }
}

main();
