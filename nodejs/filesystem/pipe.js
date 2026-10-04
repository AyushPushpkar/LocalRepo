const fs = require("fs");

//! copy data

const readStream = fs.ReadStream("input.txt");
const writeStream = fs.WriteStream("output.txt");

readStream.pipe(writeStream);
