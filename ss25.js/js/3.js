function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương n:"));
        if (isNaN(n) || n <= 0) {
            console.log("Vui lòng nhập một số nguyên dương.");
            return;
        }
        let sumNumbers = 0;
        let m = 0;

        while (sumNumbers + (m + 1) <= n) {
            m += 1;
            sumNumbers += m;
        }
        console.log(`Số nguyên dương lớn nhất m sao cho tổng 1+2+3+...+m < ${n} là: ${m}`);
    } catch (error) {
        console.log("Vui lòng nhập một số nguyên dương.");
    }
}
main();
