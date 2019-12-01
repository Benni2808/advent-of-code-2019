const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function day1() {
  let data;
  try {
    const buffer = await readFile("./input.txt", "utf8");
    data = buffer.split("\n");
  } catch (err) {
    console.log(err);
  }
  if (data !== undefined) {
    let sum = 0;
    for (const item of data) {
      let fuelToAdd = item;
      while (fuelToAdd > 0) {
        fuelToAdd = Math.floor(fuelToAdd / 3) - 2;
        if (fuelToAdd <= 0) break;
        sum += fuelToAdd;
      }
    }
    console.log("sum", sum);
  }
}

day1();
