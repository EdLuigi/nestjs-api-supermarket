import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoutePermission } from '@/auth/decorator/route-permission.decorator';
import { JwtGuard } from '@/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/auth/guard/route-permission.guard';
import { CreateRolesPermissionDto } from '../dto/create-roles_permission.dto';
import { RolesPermissionsService } from '../service/roles_permissions.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('roles-permissions')
export class RolesPermissionsController {
  constructor(
    private readonly rolesPermissionsService: RolesPermissionsService,
  ) {}

  @Post()
  @RoutePermission('create-role-permission')
  create(@Body() createRolesPermissionDto: CreateRolesPermissionDto) {
    return this.rolesPermissionsService.create(createRolesPermissionDto);
  }

  @Get()
  @RoutePermission('find-all-roles-permissions')
  findAll() {
    return this.rolesPermissionsService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-role-permission')
  findOne(@Param('id') id: string) {
    return this.rolesPermissionsService.findOne(+id);
  }

  @Delete(':id')
  @RoutePermission('delete-role-permission')
  remove(@Param('id') id: string) {
    return this.rolesPermissionsService.remove(+id);
  }
}
