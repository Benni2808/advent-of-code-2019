const { input } = require("./input")
const tmp = [...input]
tmp[1] = 12
tmp[2] = 2
let index = 0
let halt = false
while (!halt) {
  switch (tmp[index]) {
    case 1:
      tmp[tmp[index + 3]] = tmp[tmp[index + 1]] + tmp[tmp[index + 2]]
      index += 4
      break
    case 2:
      tmp[tmp[index + 3]] = tmp[tmp[index + 1]] * tmp[tmp[index + 2]]
      index += 4
      break
    case 99:
      halt = true
      break
    default:
      console.log("somethinig went wrong at index", index, tmp[index])
  }
}
console.log("output", tmp[0])
