function fibonacci(n) {
    if (n <= 0) {
        return "Vui lòng nhập một số nguyên dương.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 3; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương n để tìm số Fibonacci thứ n:"));
        console.log(`Số Fibonacci thứ ${n} là: ${fibonacci(n)}`);
    } catch (error) {
        console.log("Vui lòng nhập một số nguyên dương.");
    }
}
main();
