const { inputTask1, inputTask2 } = require("./input")
const secret = 19690720

console.log("task 1", run())
console.log("task 2", task2())
function run(codes = [...inputTask1], noun = 12, verb = 2) {
  let halt = false
  // console.log("run", noun, verb)
  let index = 0
  codes[1] = noun
  codes[2] = verb
  while (!halt) {
    switch (codes[index]) {
      case 1:
        codes[codes[index + 3]] =
          codes[codes[index + 1]] + codes[codes[index + 2]]
        index += 4
        break
      case 2:
        codes[codes[index + 3]] =
          codes[codes[index + 1]] * codes[codes[index + 2]]
        index += 4
        break
      case 99:
        halt = true
        return codes[0]
      default:
        console.log("somethinig went wrong at index", index, codes[index])
    }
  }
}

function task2() {
  for (let verb = 0; verb < 100; verb++) {
    for (let noun = 0; noun < 100; noun++) {
      tmp = [...inputTask2]
      tmp[1] = verb
      tmp[2] = noun
      result = run(tmp, noun, verb)
      // console.log("subtotal", result)
      if (result === secret) return 100 * noun + verb
    }
  }
}
