import async from "async";

export function mergesort(array) {
    let tmp = [];
    msort(array, 0, array.length - 1, tmp);

    return tmp;
}

function msort(x, lo, hi, tmp) {
    if (lo >= hi) return;

    var mid = Math.floor((lo+hi)/2);

    // Left branch done in new thread
    // Async function calls
    async.parallel([ 
        function(callback) { callback(0, msort(x, lo, mid, tmp)); } // left
    ]);

    //  Right branch done in main thread
    msort(x, mid+1, hi, tmp); // right

    // Merge once both threads can be joined
    merge(x, lo, mid, hi, tmp);
}

function merge(x, lo, mid, hi, tmp) {
    var a = lo, b = mid + 1;

    for(var k = lo; k <= hi; k++) {
        if(a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }

    for(var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}
