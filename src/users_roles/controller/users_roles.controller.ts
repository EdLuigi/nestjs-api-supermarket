import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersRolesService } from '../service/users_roles.service';
import { CreateUsersRoleDto } from '../dto/create-users_role.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

//TODO: must have perssioon to use
@UseGuards(JwtGuard)
@Controller('users-roles')
export class UsersRolesController {
  constructor(private readonly usersRolesService: UsersRolesService) {}

  @Post()
  create(@Body() createUsersRoleDto: CreateUsersRoleDto) {
    return this.usersRolesService.create(createUsersRoleDto);
  }

  @Get()
  findAll() {
    return this.usersRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersRolesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersRolesService.remove(+id);
  }
}
