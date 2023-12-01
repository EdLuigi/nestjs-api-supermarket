import { GetUser } from '@/common/decorator/get-user.decorator';
import { RoutePermission } from '@/common/decorator/route-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/common/guard/route-permission.guard';
import { IdFormatValidationPipe } from '@/common/pipe/id-format-validation.pipe';
import { FindMeDoc } from '@/users/documentation/find-me.doc';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FindAllDoc } from '../documentation/find-all.doc';
import { FindOneDoc } from '../documentation/find-one.doc';
import { RemoveDoc } from '../documentation/remove.doc';
import { UpdateMeDoc } from '../documentation/update-me.doc';
import { UpdateDoc } from '../documentation/update.doc';
import { UpdateUserDto } from '../dto/update-user.dto';
import { FindAllUsersUseCase } from '../use-case/find-all-users.use-case';
import { FindMeUseCase } from '../use-case/find-me.use-case';
import { FindUserUseCase } from '../use-case/find-user.use-case';
import { RemoveUserUseCase } from '../use-case/remove-user.use-case';
import { UpdateUserUseCase } from '../use-case/update-user.use-case';

@ApiTags('Users')
@ApiBearerAuth('JWT-auth')
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
  @FindMeDoc()
  findMe(@GetUser('id') userId: number) {
    return this.findMeUseCase.execute(userId);
  }

  @Get()
  @RoutePermission('find-all-users')
  @FindAllDoc()
  findAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-user')
  @FindOneDoc()
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findUserUseCase.execute(id);
  }

  @Patch()
  @RoutePermission('update-me')
  @UpdateMeDoc()
  updateMe(
    @GetUser('id') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUseCase.execute(userId, updateUserDto);
  }

  @Patch(':id')
  @RoutePermission('update-user')
  @UpdateDoc()
  update(
    @Param('id', IdFormatValidationPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }

  @Delete(':id')
  @RoutePermission('delete-user')
  @RemoveDoc()
  remove(@Param('id', IdFormatValidationPipe) id: number) {
    return this.removeUserUseCase.execute(id);
  }
}
