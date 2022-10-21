export function allLongestStrings(inputArray: string[]): string[] {
  let longest = inputArray[0].length

  const newArray = (array): string[] => {
    array.map((item) => {
      console.log(item)
      let result = []
      if (item.length > longest) {
        longest = item.length
        newArray(array)
      } else {
        result.push(item)
      }; 
      return result
    });
  };

  return newArray(inputArray)
};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));