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
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import { CreateSupplierUseCase } from '../use-case/create-supplier.use-case';
import { FindAllSuppliersUseCase } from '../use-case/find-all-suppliers.use-case';
import { FindOneSupplierUseCase } from '../use-case/find-one-supplier.use-case';
import { RemoveSupplierUseCase } from '../use-case/remove-supplier.use-case';
import { UpdateSupplierUseCase } from '../use-case/update-supplier.use-case';

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
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findOneSupplierUseCase.execute(id);
  }

  @Patch(':id')
  @RoutePermission('update-supplier')
  update(
    @Param('id', IdFormatValidationPipe) id: number,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.updateSupplierUseCase.execute(id, updateSupplierDto);
  }

  @Delete(':id')
  @RoutePermission('delete-supplier')
  remove(@Param('id', IdFormatValidationPipe) id: number) {
    return this.removeSupplierUseCase.execute(id);
  }
}
