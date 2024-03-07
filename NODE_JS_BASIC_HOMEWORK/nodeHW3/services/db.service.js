import fs from "fs";

export function readData(database) {
  return JSON.parse(fs.readFileSync(database));
}

export function writeData(database, data) {
  fs.writeFileSync(database, JSON.stringify(data));
}
