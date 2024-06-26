

export class CustomError extends Error {

  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super();
  }

  static badRequest( mesage: string ) {
    return new CustomError( 400, mesage );
  }

  static unauthorized( message: string ) {
    return new CustomError( 401, message );
  }

  static forbidden( message: string ) {
    return new CustomError( 403, message );
  }
  static notFound( message: string ) {
    return new CustomError( 404, message );
  }

  static internalServer( message: string = 'Internal Server Error' ) {
   
    return new CustomError( 500, message );
  }
}