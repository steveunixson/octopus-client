import WebSocket from 'ws';
import log from './helpers/WinstonLogger.class';

const ws = new WebSocket('ws://localhost:9020');

ws.on('open', (): void => {
  ws.send('something');
});

ws.on('message', (data): void => {
  log.info(JSON.stringify(data));
});

setInterval((): void => {
  ws.send(Math.random());
}, 100);
