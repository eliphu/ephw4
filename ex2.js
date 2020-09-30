const r = Number(prompt("Enter the circle radius: "));
var circle = {
    circumference: 2 * Math.PI * r,
    area : Math.PI * Math.pow(r, 2),
}

console.log("The circumference is ", circle.circumference);
console.log("The area is ", circle.area);