import minimist from "minimist";
import { flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv);

let call = args["call"]

if (!(call === "heads" || call === "tails")) {
  console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
  console.log(flipACoin(call));
}