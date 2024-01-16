function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương:"));

        if (isNaN(n) || n <= 0) {
            console.log("Vui lòng nhập một số nguyên dương.");
            return;
        }

        let squares = [];
        let sumOfSquares = 0;

        for (let i = 2; ; i += 2) {
            let square = i ** 2;
            if (sumOfSquares + square <= n) {
                squares.push(square);
                sumOfSquares += square;
            } else {
                break;
            }
        }

        console.log(`Bình phương các số nguyên dương chẵn từ 1 đến ${n} có tổng nhỏ hơn ${n} là: ${squares}`);

    } catch (error) {
        console.log("Vui lòng nhập một số nguyên dương.");
    }
}

main();
