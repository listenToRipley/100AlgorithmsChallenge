export function allLongestStrings(inputArray: string[]): string[] {
  let longest = inputArray[0].length
  const result : string[] = []; 

  inputArray.forEach((item : string) => {
    item.length > longest ? longest = item.length : longest
  }); 

  inputArray.forEach((item) => {
    if(item.length === longest) {
      result.push(item)
    };
  });

  return result; 

};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));