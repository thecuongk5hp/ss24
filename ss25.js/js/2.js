function main() {
    try {
        let a = parseInt(prompt("Nhập số nguyên dương a:"));
        let b = parseInt(prompt("Nhập số nguyên dương b:"));
        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            console.log("Vui lòng nhập hai số nguyên dương.");
            return;
        }
        let batDau = Math.min(a, b);
        let ketThuc = Math.max(a, b);
        let sumOdd = 0;
        let sumEven = 0;

        for (let i = batDau; i <= ketThuc; i++) {
            if (i % 2 === 0) {
                sumEven += i;
            } else {
                sumOdd += i;
            }
        }
        console.log(`Tổng các số lẻ từ ${batDau} đến ${ketThuc} là ${sumOdd}.`);
        console.log(`Tổng các số chẵn từ ${batDau} đến ${ketThuc} là ${sumEven}.`);

    } catch (error) {
        console.log("Vui lòng nhập hai số nguyên dương.");
    }
}
main();
