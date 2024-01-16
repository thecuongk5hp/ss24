function main() {
try {
let n = parseInt(prompt("Nhập một số nguyên dương n:"));
if (n <= 0 || isNaN(n)) {
console.log("Vui lòng nhập một số nguyên dương.");
return;
}
let result = 0;
for (let i = 1; i <= n; i++) {
result += 1 / Math.pow(i, 3);
}
console.log(`Kết quả của biểu thức S là: ${result.toFixed(5)}`);
} catch (error) {
console.log("Vui lòng nhập một số nguyên.");
}
}
main();
