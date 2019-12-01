const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function init() {
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
      sum += Math.floor(item / 3) - 2;
    }
    console.log("sum", sum);
  }
}

init();
