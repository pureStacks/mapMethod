const myArray = [2, 4, 6, 8];
function myCustomMapOperationCallback(itemFromArray) {
    return itemFromArray * 2;
}

const newArray = myArray.map(myCustomMapOperationCallback)

console.log(newArray);

const strArray = ["Hello", "world", "my", "name", "is", "Zach"];
console.log (strArray.map(itemFromArray => itemFromArray[0]))