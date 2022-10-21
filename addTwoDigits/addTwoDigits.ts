export function addTwoDigits(n: any): number {
  let list: string[] = `${n}`.split('')
  let total: number = 0; 
  list.forEach((num) => {
    total += parseInt(num, 10)
  })
  return total
}

// console.log(addTwoDigits(29));