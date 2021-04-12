const net = require("net");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newIssue = () => {
  let opComand = "";
  let op1 = "";
  let op2 = "";
  readline.question("Inter the Command :", (op) => {
    if (op == "q") {
      client.end();
    }
    opComand = op;
    readline.question("First Number :", (num) => {
      if (num == "q") {
        client.end();
      }
      op1 = num;

      readline.question("Second Number :", (num) => {
        if (num == "q") {
          client.end();
        }

        op2 = num;
        client.write(opComand + " " + op1 + " " + op2);
      });
    });
  });
};

const options = {
  port: 50000,
};

let client = net.connect(options, () => {
  console.log("Connected!");
});

client.on("data", (data) => {
  console.log(data.toString());
  newIssue();
});

client.on("end", () => {
  console.log("Disconnected!");
  readline.close();
});

console.log("Enter q to Exit!");
newIssue();
