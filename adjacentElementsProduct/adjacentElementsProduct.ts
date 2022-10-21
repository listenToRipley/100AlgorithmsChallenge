export function adjacentElementsProduct(inputArray: number[]): number {
  let largest: number = 0
  for (let i = 0; i < inputArray.length - 1; i ++) {
    let temp = inputArray[i] * inputArray [i + 1]
    if (temp > largest) {
      largest = temp
    };
  };
  return largest
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));