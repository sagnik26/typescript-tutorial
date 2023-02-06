"use strict";
const score = [];
const names = [];
// Basic syntax //
function identityThree(val) {
    return val;
}
// OR 
function identityFour(val) {
    return val;
}
identityFour({ brand: 'nik', type: 2 });
// Arrow function with generics //
function getSearchProducts(products) {
    // do some database operation
    const myIndex = 0;
    return products[myIndex];
}
// OR
const getMoreSearchProducts = (products) => {
    // do some database operation
    const myIndex = 3;
    return products[myIndex];
};
