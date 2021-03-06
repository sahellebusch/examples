import {Server} from 'hapi';
import swagger from 'hapi-swagger';
import inert from 'inert';
import vision from 'vision';

const packageInfo = require('../../package'); /* tslint:disable-line:no-var-requires */

const swaggerPlugin: any = {
  plugin: swagger,
  options: {
    info: {
      title: 'Idiomatic Hapi + Typescript server.',
      version: packageInfo.version
    },
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    }
  }
};

export default {
  name: 'documentation',
  version: packageInfo.version,
  register: (server: Server) => server.register([inert, vision, swaggerPlugin])
};
