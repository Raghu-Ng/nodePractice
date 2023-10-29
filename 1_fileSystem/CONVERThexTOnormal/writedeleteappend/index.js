const {input} = require('./input')

const hexString = input;
// Split the string by spaces and remove "<Buffer" and the space after it
const hexValues = hexString.split(' ').slice(1);

// Convert hexadecimal values to text
const text = hexValues.map(hex => String.fromCharCode(parseInt(hex, 16))).join('');

console.log(text);


// const hexString = "<Buffer 68 69 20 73 64 68 20 76 68 67 20 73 64 20 20 6f 73 61 20 64 68 76 20 64 63 20 62 6e 20 6c 6k 20 78 64 68 66 76 20 67 20 65 75 6f 66 68>";

// // Split the string by spaces and remove "<Buffer" and the space after it
// const hexValues = hexString.split(' ').slice(2);

// // Convert hexadecimal values to text
// const text = hexValues.map(hex => String.fromCharCode(parseInt(hex, 16))).join('');

// console.log(text);
