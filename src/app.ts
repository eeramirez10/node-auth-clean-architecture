import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(
  () => {

    main();
  }
)();

async function main() {

  const server = new Server( {
    port: 3100,
    routes: AppRoutes.routes
  } );
  server.start();
}