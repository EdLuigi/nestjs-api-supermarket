import { AppModule } from '@/app.module';
import { UsersService } from '@/users/service/users.service';
import { UsersRolesService } from '@/users_roles/service/users_roles.service';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../service/auth.service';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { SigninUseCase } from '../use-case/signin.use-case';
import { SignupUseCase } from '../use-case/signup.use-case';
import { SigninTest } from './signin.test';
import { SignupTest } from './signup.test';

describe('AuthController', () => {
  let controller: AuthController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        UsersRolesService,
        JwtStrategy,
        SigninUseCase,
        SignupUseCase,
      ],
      imports: [AppModule, JwtModule.register({})],
    }).compile();

    controller = module.get<AuthController>(AuthController);

    /* Define "global.__CONTROLLER__" as the current controller for testing*/
    global.__CONTROLLER__ = controller;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('signup()', () => SignupTest());
  describe('signin()', () => SigninTest());
});
