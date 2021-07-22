// shuffles the order of elements in an Array.

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffle = (array) => array.slice().sort(() => Math.random() - 0.5);

console.log(shuffle(myArray));
