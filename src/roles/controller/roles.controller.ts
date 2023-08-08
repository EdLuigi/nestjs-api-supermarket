import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoutePermission } from 'src/auth/decorator/route-permission.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from 'src/auth/guard/route-permission.guard';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RolesService } from '../service/roles.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @RoutePermission('create-role')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @RoutePermission('find-all-roles')
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-role')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @RoutePermission('update-role')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @RoutePermission('delete-role')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
