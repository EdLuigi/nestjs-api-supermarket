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
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateDoc } from '../documentation/create.doc';
import { FindAllDoc } from '../documentation/find-all.doc';
import { FindOneDoc } from '../documentation/find-one.doc';
import { RemoveDoc } from '../documentation/remove.doc';
import { UpdateDoc } from '../documentation/update.doc';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { CreateRoleUseCase } from '../use-case/create-role.use-case';
import { FindAllRolesUseCase } from '../use-case/find-all-roles.use-case';
import { FindOneRoleUseCase } from '../use-case/find-role.use-case';
import { RemoveRoleUseCase } from '../use-case/remove-role.use-case';
import { UpdateRoleUseCase } from '../use-case/update-role.use-case';

@ApiTags('Roles')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('roles')
export class RolesController {
  constructor(
    private readonly createRoleUseCase: CreateRoleUseCase,
    private readonly findAllRolesUseCase: FindAllRolesUseCase,
    private readonly findOneRoleUseCase: FindOneRoleUseCase,
    private readonly updateRoleUseCase: UpdateRoleUseCase,
    private readonly removeRoleUseCase: RemoveRoleUseCase,
  ) {}

  @Post()
  @RoutePermission('create-role')
  @CreateDoc()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.createRoleUseCase.execute(createRoleDto);
  }

  @Get()
  @RoutePermission('find-all-roles')
  @FindAllDoc()
  findAll() {
    return this.findAllRolesUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-role')
  @FindOneDoc()
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findOneRoleUseCase.execute(id);
  }

  @Patch(':id')
  @RoutePermission('update-role')
  @UpdateDoc()
  update(
    @Param('id', IdFormatValidationPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.updateRoleUseCase.execute(id, updateRoleDto);
  }

  @Delete(':id')
  @RoutePermission('delete-role')
  @RemoveDoc()
  remove(@Param('id', IdFormatValidationPipe) id: number) {
    return this.removeRoleUseCase.execute(id);
  }
}
