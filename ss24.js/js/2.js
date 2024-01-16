function main() {
    try {
        let a = parseInt(prompt("Nhập số nguyên a:"));
        let b = parseInt(prompt("Nhập số nguyên b:"));

        if (isNaN(a) || isNaN(b)) throw "Vui lòng nhập số nguyên hợp lệ.";

        let start = Math.min(a, b);
        let end = Math.max(a, b);

        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }

        console.log(`Tổng các số nguyên trong khoảng từ ${start} đến ${end} là: ${sum}`);
    } catch (error) {
        console.log(error);
    }
}

main();
