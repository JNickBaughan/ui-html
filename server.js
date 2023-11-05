import express from 'express';
import bodyParser from "body-parser";
import { styles } from "./styles";

let PORT = 3000;
let server  = express();

const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];
	
server.use(...middlewares);

server.get("/", (_, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${styles}
        </style>
      </head>
      <body>
        <div id="root" />
        <script src="bundle.js"></script>
      </body>
    </html>
    `)
});

server.listen(PORT, function(){
	console.log("server listening on port: " + PORT);
});