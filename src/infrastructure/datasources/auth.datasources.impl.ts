import { AuthDatasource } from '../../domain/datasources/auth.datasource';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustomError } from '../../domain/errors/custom.error';


export class AuthDatasourceImpl implements AuthDatasource {
  login() {
    throw new Error( 'Method not implemented.' );
  }
  async register( registerUserDto: RegisterUserDto ): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {



      return new UserEntity(
        '1',
        name,
        email,
        password,
        [ "ADMIN_ROLE" ]
      );



    } catch ( error ) {
      if ( error instanceof CustomError ) {
        throw error;
      }

      console.log( error );

      throw CustomError.internalServer();
    }
  }

}