const fs = require("fs");

//!Reading  file

// console.log("Before \n");
// fs.readFile("input.txt", "utf-8", (error, data) => {
//   // non blocking
//   if (error) throw error;
//   console.log(data);
// });

// console.log("After \n");

// const data = fs.readFileSync("input.txt", "utf-8"); //blocking
// console.log(data);

const readStream = fs.createReadStream("input.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Read done");
});

//!Writing file

// fs.writeFile("input.txt", "\nHello, World!", (error) => {
//   if (error) throw error;
//   console.log("File written successfully!");
// });

// fs.appendFile("input.txt", "\nHello, World!", (error) => {
//   if (error) throw error;
// });

const writeStream = fs.createWriteStream("input.txt", "utf-8");
writeStream.write("Mesozoic");

//!Remove file

// fs.unlink("input.txt", (error) => {
//   if (error) throw error;
// });
