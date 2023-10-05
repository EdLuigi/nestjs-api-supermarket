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
import { RoutePermission } from '@/auth/decorator/route-permission.decorator';
import { JwtGuard } from '@/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/auth/guard/route-permission.guard';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { PermissionsService } from '../service/permissions.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @RoutePermission('create-permission')
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @RoutePermission('find-all-permissions')
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-permission')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(':id')
  @RoutePermission('update-permission')
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  @RoutePermission('delete-permission')
  remove(@Param('id') id: string) {
    return this.permissionsService.remove(+id);
  }
}
