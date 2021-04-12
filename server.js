const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client inserted");
  socket.on("data", (data) => {
    if (data == undefined || data == null) {
      return;
    }
    const dataArgs = data.toString().split(" ");

    if (dataArgs.length === 0) {
      return socket.write("ERROR No Data");
    }

    const command = dataArgs[0];
    if (command === "ADD") {
      if (dataArgs.length !== 3) {
        socket.write("ERROR Incorect Number of arguments");
        return;
      }

      const op1 = parseInt(dataArgs[1]);
      const op2 = parseInt(dataArgs[2]);

      const result = (op1 + op2).toString();

      if (result === "NaN") {
        socket.write("ERROR Invalid arguments");
        return;
      }

      socket.write("Result Is :" + result);
      console.log("Result Is :" + result);
      return;
    } else {
      socket.write("ERROR Invalid Command");
      return;
    }
  });
});

server.listen(50000);
