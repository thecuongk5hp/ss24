function countEvenDigits(n) {
    let count = 0;
    let digits = n.toString();
    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        if (digit % 2 === 0) {
            count++;
        }
    }
    return count;
}
function main() {
    try {
        let n = parseInt(prompt("Nhập một số nguyên n:"));
        if (isNaN(n)) {
            console.log("Vui lòng nhập một số nguyên.");
            return;
        }
        let result = countEvenDigits(n);
        console.log(`Trong số nguyên ${n}, có ${result} chữ số chẵn.`);
    } catch (error) {
        console.log("Vui lòng nhập một số nguyên.");
    }
}
main();
