console.log('-------------------------------------------------------------------')
console.log('This is step 2')

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
// write your code here...
function calPieces(fruit) {
    return fruit.apple + fruit.pear + fruit.peach;
}

console.log('The Answer:          ', calPieces(fruit));