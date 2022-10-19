export function addBorder(picture: string[]): string[] {
  //long version
  // const lengthOfWall = picture[0].length + 2;
  // let wall = ""; 
  //   for (let i = 0; i < lengthOfWall; i++) {
  //     wall = wall.concat('*')
  //   }

  // picture.unshift(wall);
  // picture.push(wall);

  // for (let i = 1; i < picture.length -1; i++) {
  //   picture[i] = '*'.concat(picture[i], '*')
  // }

  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*'.concat(picture[i], '*')
  }

  const wall = '*'.repeat(picture[0].length)
  picture.unshift(wall); 
  picture.push(wall); 

  return picture; 
}

console.log(addBorder(["abc", "ded"]));