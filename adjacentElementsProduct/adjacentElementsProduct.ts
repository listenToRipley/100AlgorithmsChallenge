export function adjacentElementsProduct(inputArray: number[]): number {
  // let largest: number = 0 can start with the first element so we have one less loop
  let largest : number = inputArray[0] * inputArray[1]
  for (let i = 1; i < inputArray.length - 1; i ++) {
    let temp = inputArray[i] * inputArray [i + 1]
    temp > largest ? largest = temp : largest
  };
  return largest
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));