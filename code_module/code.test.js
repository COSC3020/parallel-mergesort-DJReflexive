import { mergesort } from "./code.js";
import jsc from 'jsverify';


    /* Helper Methods */

function generateArray(lowRange, highRange, size) {
    let newArray = [];

    for (let i = 0; i < size; i++) {
        newArray.push(jsc.random(lowRange, highRange));
    }

    return newArray;
}

function checkIfSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
            return false;
        }
    }

    return true;
}


    /* Custom Testing */

const numTests = 100000;
const maxArraySize = 1000;
const lowRange = -1000000;
const highRange = 1000000;

for (let i = 0; i < numTests; i++) {
    const arraySize = jsc.random(0, maxArraySize);

    let array = generateArray(lowRange, highRange, arraySize);

    mergesort(array); // *Should* sort the array

    const isSorted = checkIfSorted(array);

    console.assert(isSorted, "Array was not sorted...");

    if (!isSorted) {
        throw "Array was not sorted...";
    }
}