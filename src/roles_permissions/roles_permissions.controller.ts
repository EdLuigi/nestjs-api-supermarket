import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RolesPermissionsService } from './roles_permissions.service';
import { CreateRolesPermissionDto } from './dto/create-roles_permission.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

//TODO: must have perssioon to use
@UseGuards(JwtGuard)
@Controller('roles-permissions')
export class RolesPermissionsController {
  constructor(
    private readonly rolesPermissionsService: RolesPermissionsService,
  ) {}

  @Post()
  create(@Body() createRolesPermissionDto: CreateRolesPermissionDto) {
    return this.rolesPermissionsService.create(createRolesPermissionDto);
  }

  @Get()
  findAll() {
    return this.rolesPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesPermissionsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesPermissionsService.remove(+id);
  }
}
