"use strict";
const unitMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, from, to) {
    const fromIndex = unitMass.indexOf(from);
    const toIndex = unitMass.indexOf(to);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log(convertMass(20, 'g', 'mg'));
