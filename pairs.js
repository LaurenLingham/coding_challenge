const findNumberOfPairs = (arr, x) => {
    let countPairs = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] + arr[j] === x) {
                countPairs++;

                /*
                i will always be greater than j so the element at index i should be removed first
                because removing the element at j first would change the index of the other element 
                by decreasing it by 1
                */
                arr.splice(i, 1);
                arr.splice(j, 1);

                /*
                if a match is found 2 elements are removed from the array so i needs to be decreased by 1 before
                the outer for loop iterates again (which will also decrease i by 1) to reduce the index by 2 in total
                which will ensure the index is not out of range
                */
                i--;
                break;
            }
        }
    }
    
    return countPairs;
}

let test1Expected = 0;
let test1Actual = findNumberOfPairs([3, 4, 5, 6], 1);
console.log(test1Expected === test1Actual);

let test2Expected = 1;
let test2Actual = findNumberOfPairs([0, 15, 32, 2000, 15000], 15);
console.log(test2Expected === test2Actual);

let test3Expected = 2;
let test3Actual = findNumberOfPairs([1, 1, 10, 32, 41], 42);
console.log(test3Expected === test3Actual);
