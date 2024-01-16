function tinhToanBieuThuc(n) {
    let result = 0;
    let currentTerm = 1;
    for (let i = 1; i <= n; i++) {
        currentTerm = currentTerm * 10 + i;
        result += currentTerm;
    }
    return result;
}
function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương n:"));
        if (isNaN(n) || n <= 0) {
            console.log("Vui lòng nhập một số nguyên dương.");
            return;
        }
        let result = tinhToanBieuTuc(n);
        console.log(`Giá trị của biểu thức S là: ${result}`);
    } catch (error) {
        console.log("Vui lòng nhập một số nguyên dương.");
    }
}
main();
