import { RoutePermission } from '@/auth/decorator/route-permission.decorator';
import { JwtGuard } from '@/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/auth/guard/route-permission.guard';
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
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import { CreateSupplierUseCase } from '../use-cases/create-supplier.use-case';
import { FindAllSuppliersUseCase } from '../use-cases/find-all-suppliers.use-case';
import { FindOneSupplierUseCase } from '../use-cases/find-one-supplier.use-case';
import { RemoveSupplierUseCase } from '../use-cases/remove-supplier.use-case';
import { UpdateSupplierUseCase } from '../use-cases/update-supplier.use-case';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('suppliers')
export class SuppliersController {
  constructor(
    private readonly createSupplierUseCase: CreateSupplierUseCase,
    private readonly findAllSuppliersUseCase: FindAllSuppliersUseCase,
    private readonly findOneSupplierUseCase: FindOneSupplierUseCase,
    private readonly updateSupplierUseCase: UpdateSupplierUseCase,
    private readonly removeSupplierUseCase: RemoveSupplierUseCase,
  ) {}

  @Post()
  @RoutePermission('create-supplier')
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.createSupplierUseCase.execute(createSupplierDto);
  }

  @Get()
  @RoutePermission('find-all-suppliers')
  findAll() {
    return this.findAllSuppliersUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-supplier')
  findOne(@Param('id') id: string) {
    return this.findOneSupplierUseCase.execute(+id);
  }

  @Patch(':id')
  @RoutePermission('update-supplier')
  update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.updateSupplierUseCase.execute(+id, updateSupplierDto);
  }

  @Delete(':id')
  @RoutePermission('delete-supplier')
  remove(@Param('id') id: string) {
    return this.removeSupplierUseCase.execute(+id);
  }
}
