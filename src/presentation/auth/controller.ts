import { Request, Response } from 'express';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';


export class AuthController {
  constructor() { }

  registerUser = ( req: Request, res: Response ) => {

    const body = req.body as RegisterUserDto;


    const [ error, registerUserDto ] = RegisterUserDto.create( body );
    if ( error ) return res.status( 400 ).json( { error } );
    res.json( registerUserDto );
  };

  loginUser = ( req: Request, res: Response ) => {
    res.json( 'Login controller' );
  };
}