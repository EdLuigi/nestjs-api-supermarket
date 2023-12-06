import { RoutePermission } from '@/common/decorator/route-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/common/guard/route-permission.guard';
import { IdFormatValidationPipe } from '@/common/pipe/id-format-validation.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateDoc } from '../documentation/create.doc';
import { FindAllDoc } from '../documentation/find-all.doc';
import { FindOneDoc } from '../documentation/find-one.doc';
import { RemoveDoc } from '../documentation/remove.doc';
import { CreateRolePermissionDto } from '../dto/create-role_permission.dto';
import { CreateRolePermissionUseCase } from '../use-case/create-role-permission.use-case';
import { FindAllRolesPermissionsUseCase } from '../use-case/find-all-roles-permissions.use-case';
import { FindOneRolePermissionUseCase } from '../use-case/find-role-permission.use-case';
import { RemoveRolePermissionUseCase } from '../use-case/remove-role-permission.use-case';

@ApiTags('Roles-Permissions')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('roles-permissions')
export class RolesPermissionsController {
  constructor(
    private readonly createRolePermissionUseCase: CreateRolePermissionUseCase,
    private readonly findAllRolesPermissionsUseCase: FindAllRolesPermissionsUseCase,
    private readonly findOneRolePermissionUseCase: FindOneRolePermissionUseCase,
    private readonly removeRolePermissionUseCase: RemoveRolePermissionUseCase,
  ) {}

  @Post()
  @RoutePermission('create-role-permission')
  @CreateDoc()
  create(@Body() createRolesPermissionDto: CreateRolePermissionDto) {
    return this.createRolePermissionUseCase.execute(createRolesPermissionDto);
  }

  @Get()
  @RoutePermission('find-all-roles-permissions')
  @FindAllDoc()
  findAll() {
    return this.findAllRolesPermissionsUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-role-permission')
  @FindOneDoc()
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findOneRolePermissionUseCase.execute(id);
  }

  @Delete(':id')
  @RoutePermission('delete-role-permission')
  @RemoveDoc()
  remove(@Param('id', IdFormatValidationPipe) id: number) {
    return this.removeRolePermissionUseCase.execute(id);
  }
}
