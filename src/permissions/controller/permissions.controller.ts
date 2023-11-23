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
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { CreatePermissionUseCase } from '../use-case/create-permission.use-case';
import { FindAllPermissionsUseCase } from '../use-case/find-all-permissions.use-case';
import { FindOnePermissionUseCase } from '../use-case/find-one-permission.use-case';
import { RemovePermissionUseCase } from '../use-case/remove-permission.use-case';
import { UpdatePermissionUseCase } from '../use-case/update-permission.use-case';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(
    private readonly createPermissionUseCase: CreatePermissionUseCase,
    private readonly findAllPermissionsUseCase: FindAllPermissionsUseCase,
    private readonly findOnePermissionUseCase: FindOnePermissionUseCase,
    private readonly updatePermissionUseCase: UpdatePermissionUseCase,
    private readonly removePermissionUseCase: RemovePermissionUseCase,
  ) {}

  @Post()
  @RoutePermission('create-permission')
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.createPermissionUseCase.execute(createPermissionDto);
  }

  @Get()
  @RoutePermission('find-all-permissions')
  findAll() {
    return this.findAllPermissionsUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-permission')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOnePermissionUseCase.execute(id);
  }

  @Patch(':id')
  @RoutePermission('update-permission')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.updatePermissionUseCase.execute(id, updatePermissionDto);
  }

  @Delete(':id')
  @RoutePermission('delete-permission')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.removePermissionUseCase.execute(id);
  }
}
