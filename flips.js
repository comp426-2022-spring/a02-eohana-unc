import minimist from "minimist";
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = minimist(process.argv);

// console.log(args)

const flips = coinFlips(args['number']) || 1;
console.log(flips);
console.log(countFlips(flips));
