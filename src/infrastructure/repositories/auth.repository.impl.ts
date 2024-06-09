import { AuthDatasource } from '../../domain/datasources/auth.datasource';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { AuthRepository } from '../../domain/repositories/auth.repository';


export class AuthRepositoryImpl implements AuthRepository {

  constructor (
    private readonly authDatasource: AuthDatasource
  ){}

  login() {
    throw new Error( 'Method not implemented.' );
  }
  register( registerUserDto: RegisterUserDto ): Promise<UserEntity> {
    return this.authDatasource.register(registerUserDto)
  }
  
}