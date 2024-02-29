import fs from "fs/promises";
import path from "path";

const filePath = path.join(import.meta.dirname, "homework.txt");

const homework = async () => {};

try {
  await fs.writeFile(filePath, "Homework 01 in Basic Node");

  await fs.appendFile(filePath, " FINISHED!!!!!!");

  const read = await fs.readFile(filePath, { encoding: "utf-8" });

  console.log(read);
} catch (error) {
  console.error(error);
}

homework();
