const values = [3, 11, 7, 2, 9, 10];
sum = 0;
for (i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum);
console.log(Math.min(...values));
console.log(Math.max(...values));