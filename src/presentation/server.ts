import express, { Router } from 'express';

interface Options {
  port?: number;
  routes: Router;
}
export class Server {
  public readonly app = express();
  private readonly port: number;
  routes: Router;
  constructor( options: Options ) {

    const { port, routes } = options;

    this.port = port || 3000;
    this.routes = routes;
  }

  start = async () => {

    this.app.use( express.json() );
    this.app.use( express.urlencoded( { extended: true } ) ); // x-www-form

    this.app.use( this.routes );


    this.app.listen( this.port, () => {
      console.log( `Server running on port ${ this.port }` );
    } );
  };
}