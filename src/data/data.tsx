import { levelAlises } from "../utils/types";

export const user_point = 550000;
export const pointToAdd = 10;
export const User_Level: levelAlises = [
  "Bronze", //from 0 to 50,000 MXD
  "Silver", // from 50,001 to 35,000 MXD
  "Gold", // FROM 36,000 TO 100,000 MXD
  "Diamond", // FROM 100,001 TO 15,000,000
  "Lagendary", // FROM 15,000,000 TO 100,000,000
  "Master", // FROM 100,000,001 TO 150,000,000
  "lord", // FROM 150,000,001 TO infinity
];

export const levelMinPoint = [
  0, //Bronze
  50000, //silver
  35000, //Gold
  100000, //Diamond
  15000000, //Legendary
  100000000, //Master
  500000000, //Lord
];
