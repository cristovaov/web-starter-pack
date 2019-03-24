const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(
  express.static(path.resolve(__dirname, 'static'), { extensions: ['html'] })
);

app.listen(port, () =>
  console.log(
    `Listening on port http://localhost:${port}!\n\nPress ^C to exit.`
  )
);

process.on('SIGINT', () => process.exit(1));
