/* eslint-disable @typescript-eslint/no-shadow, import/first */
import * as dotenv from 'dotenv';

dotenv.config();
import fs from 'fs';
import path from 'path';
import { createServer } from 'https';
import { WebSocketServer } from 'ws';
import app from './app';

const { PORT, TLS_CERTFILE , TLS_KEYFILE } = process.env;

const tlsServer = createServer({
  cert: fs.readFileSync(
    path.join(
      __dirname,
      TLS_CERTFILE || '../server/certs/localhost.crt',
    ),
    'utf-8',
  ),
  key: fs.readFileSync(
    path.join(
      __dirname,
      TLS_KEYFILE || '../server/certs/localhost.key',
    ),
    'utf-8',
  ),
});

const wsServer = new WebSocketServer({ server: tlsServer });

wsServer.on('connection', (ws) => {
  ws.on('error', console.error);
  ws.on('message', (data) => {
    console.log(`Received message ${data}`);
  });
});

tlsServer.listen(3433, () => console.log('WS server listening on 3433'));
app.listen(PORT);
