const express = require("express");
const server = express();
server.use(express.json());
const port = process.env.port || 4000;

server.post("/", (req, res) => {
  const body = req.body ?? {};
  const x = parseInt(body.x ?? 0);
  const y = parseInt(body.y ?? 0);
  let result = 0;

  switch (body.operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
  }

  return res.json({
    slackUsername: "dhanjuma",
    operation_type: body.operation_type,
    result: result,
  });
});

server.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});
