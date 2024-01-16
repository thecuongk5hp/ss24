function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên dương n:"));
        if (isNaN(n) || n <= 0) throw "Vui lòng nhập một số nguyên dương.";
        let soBiDaoNguoc = parseInt([...n.toString()].reverse().join(""));
        console.log(`Số đảo ngược của ${n} là: ${soBiDaoNguoc}`);
    } catch (error) {
        console.log(error);
    }
}
main();
