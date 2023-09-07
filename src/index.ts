import http from "http";
import { parseUrl } from "./utils/url";

const server = http.createServer((req, res) => {
  let parsedData = {};
  const reqUrl = req?.url || "";
  if (reqUrl === "/favicon.ico") {
    res.end();
    return;
  }
  if (reqUrl) {
    parsedData = parseUrl(reqUrl);
  }
  console.log(parsedData);
  res.end(JSON.stringify(parsedData));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(
    `Open your http://localhost:${port}/6/api/listings/3?sort=desc&limit=10 and test this url parser`
  );
});
