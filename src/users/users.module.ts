import { Global, Module } from '@nestjs/common';
import { UsersController } from './controller';
import { UsersService } from './service/users.service';

@Global()
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
