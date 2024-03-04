import http from "http";
import fs from "fs";
// import writeStudent from "./bonus.js";

const PORT = 3000;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  const URL = req.url;
  const METHOD = req.method;

  console.log(`URL: ${URL} | METHOD: ${METHOD}`);

  if (URL === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome, You are now on the Home Page</h1>");
    res.end();
  }

  if (URL === "/student") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    
    <h1>Filip</h1>
    <h2>Nikolov</h2>
    <h3>Qinshift</h3>
    <h4>Basic Node.JS</h4>
    `);
    res.end();
  }

  if (URL === "/all_students") {
    res.setHeader("Content-Type", "text/html");

    const chunks = [];

    req.on("data", (chunk) => {
      //   console.log(chunk);
      chunks.push(chunk);
    });

    req.on("end", () => {
      const parsedChunk = Buffer.concat(chunks).toString();
      //   console.log(parsedChunk);

      const studentName = parsedChunk.split("=")[1].replaceAll("+", " ");
      fs.appendFile("students.txt", `${studentName}\n`, (err) => {
        if (err) throw err;
        console.log("Student name added to students.txt");
      });
      console.log(`Student name is ${studentName}`);

      res.write(`<h1>Added Student: ${studentName}</h1>`);
      res.end();
    });
  }

  if (URL === "/add_student") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    
    <form action="/all_students" method="POST">

    <input type="text" name="studentName"/>
    <button type="submit">Add Student</button>
    </form>
    `);

    res.end();
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is up and running on http://${HOSTNAME}:${PORT}`);
});
