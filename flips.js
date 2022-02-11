import minimist from "minimist";
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv);

// console.log(args)

let numflips = args['number'] || 1
const flips = coinFlips(numflips);
console.log(flips);
if (numflips > 1) {
  console.log(countFlips(flips));
}
