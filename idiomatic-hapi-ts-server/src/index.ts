import {Server} from 'hapi';
import buildServer from './server';

let server: Server = null;

buildServer().then(newServer => {
  server = newServer;
  return server.start().then(() => {
    const {host, port} = server.info;
    console.log(`Server listening at ${host}:${port}`);
  });
});
