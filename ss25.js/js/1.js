function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương:"));
        if (isNaN(n) || n <= 0) {
            console.log("Vui lòng nhập một số nguyên dương.");
            return;
        }
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            console.log(i);
            sum += i;
        }
        if (sum % 2 !== 0) {
            console.log(`Tổng các số từ 1 đến ${n} là ${sum} (số lẻ).`);
        } else {
            console.log(`Tổng các số từ 1 đến ${n} là ${sum} (số chẵn).`);
        }
    } catch (error) {
        console.log("Vui lòng nhập một số nguyên dương.");
    }
}
main();
