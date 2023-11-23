import { GetUser } from '@/common/decorator/get-user.decorator';
import { RoutePermission } from '@/common/decorator/route-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/common/guard/route-permission.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { FindAllUsersUseCase } from '../use-case/find-all-users.use-case';
import { FindMeUseCase } from '../use-case/find-me.use-case';
import { FindUserUseCase } from '../use-case/find-user.use-case';
import { RemoveUserUseCase } from '../use-case/remove-user.use-case';
import { UpdateUserUseCase } from '../use-case/update-user.use-case';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly findMeUseCase: FindMeUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly findUserUseCase: FindUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly removeUserUseCase: RemoveUserUseCase,
  ) {}

  @Get('me')
  @RoutePermission('find-me')
  findMe(@GetUser('id') userId: number) {
    return this.findMeUseCase.execute(userId);
  }

  @Get()
  @RoutePermission('find-all-users')
  findAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-user')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findUserUseCase.execute(id);
  }

  @Patch()
  @RoutePermission('update-me')
  updateMe(
    @GetUser('id') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUseCase.execute(userId, updateUserDto);
  }

  @Patch(':id')
  @RoutePermission('update-user')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }

  @Delete(':id')
  @RoutePermission('delete-user')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.removeUserUseCase.execute(id);
  }
}
