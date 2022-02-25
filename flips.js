import minimist from "minimist";
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv);

function output_flips(flips) {
  let result = `[`
  
  for (let i = 0; i < flips.length; i++){
    if (i != 0) {
      result += (`,`)
    }
    result +=(`'${flips[i]}'`)
  }
  result += `]`
  return result;
}

// console.log(args)


let numflips = args['number'] || 1
const flips = coinFlips(numflips);
console.log(output_flips(flips));
// console.log(flips)
console.log(countFlips(flips));

