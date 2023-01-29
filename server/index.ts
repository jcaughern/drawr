/* eslint-disable @typescript-eslint/no-shadow, import/first */
import * as dotenv from 'dotenv';

dotenv.config();
import fs from 'fs';
import path from 'path';
import { createServer } from 'https';
import WebSocket from 'ws';
import app from './app';

const tlsServer = createServer({
  cert: fs.readFileSync(path.join(__dirname, process.env.TLS_CERTFILE || '../server/certs/localhost.crt'), 'utf-8'),
  key: fs.readFileSync(path.join(__dirname, process.env.TLS_KEYFILE || '../server/certs/localhost.key'), 'utf-8'),
});

const wsServer = new WebSocket.Server({ server: tlsServer });

wsServer.on('connection', (ws) => {
  ws.on('error', console.error);
  ws.on('message', (data) => {
    console.log(`Received message ${data}`);
  });
});

const server = app.listen(3000);

server.on('upgrade', (req, socket, head) => {
  wsServer.handleUpgrade(req, socket, head, (ws) => {
    console.log('upgrade');
    wsServer.emit('connection', ws, req);
  });
});

// server.listen(3000, () => console.log('WS server listening on 3000'));
