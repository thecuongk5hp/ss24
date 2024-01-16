function main() {
    try {
        let a = parseInt(prompt("Nhập số nguyên a:"));
        let b = parseInt(prompt("Nhập số nguyên b:"));

        if (isNaN(a) || isNaN(b)) throw "Vui lòng nhập số nguyên hợp lệ.";

        let result = Math.pow(a, b);

        console.log(`${a} ^ ${b} = ${result}`);
    } catch (error) {
        console.log(error);
    }
}

main();
