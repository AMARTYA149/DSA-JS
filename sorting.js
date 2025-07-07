let arr = [5, 4, 6, 1, 9, 0];

function bubbleSort(arr) {

    console.log("Bubble Sort");

    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}

function selectionSort(arr) {
    console.log("Selection Sort");
    let min, minIndex, temp;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        min = arr[i + 1];
        
        //  find the minimum in the arr
        for (let j = i + 1; j < n; j++){
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }

        // swap the ith element with minimum element in arr
        if (arr[minIndex] < arr[i]) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

function insertionSort(arr) {

    console.log("Insertion Sort");

    let curr = 1, prev;
    let n = arr.length;
    let currValue;

    while (curr < n) {
         currValue = arr[curr];
        prev = curr - 1;
        while (prev >= 0 && arr[prev] > currValue ) {
           
            arr[prev + 1] = arr[prev];
            --prev;
        } 
        arr[prev + 1] = currValue;
        ++curr;
        
    }

    return arr;
}

// let res = bubbleSort(arr);

// let res = selectionSort(arr);

let res = insertionSort(arr);

console.log(res);
