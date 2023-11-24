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
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductUseCase } from '../use-case/create-product.use-case';
import { FindAllProductsUseCase } from '../use-case/find-all-products.use-case';
import { FindBySupplierUseCase } from '../use-case/find-by-supplier.use-case';
import { FindOneProductUseCase } from '../use-case/find-one-product.use-case';
import { RemoveProductUseCase } from '../use-case/remove-product.use-case';
import { UpdateProductUseCase } from '../use-case/update-product.use-case';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly findOneProductUseCase: FindOneProductUseCase,
    private readonly findBySupplierUseCase: FindBySupplierUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly removeProductUseCase: RemoveProductUseCase,
  ) {}

  @RoutePermission('create-product')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductUseCase.execute(createProductDto);
  }

  @RoutePermission('find-all-products')
  @Get()
  findAll() {
    return this.findAllProductsUseCase.execute();
  }

  @RoutePermission('find-product')
  @Get(':id')
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findOneProductUseCase.execute(id);
  }

  @RoutePermission('find-products-by-supplier')
  @Get('/supplier/:id')
  findBySupplier(@Param('id', IdFormatValidationPipe) supplierId: number) {
    return this.findBySupplierUseCase.execute(supplierId);
  }

  @RoutePermission('update-product')
  @Patch(':id')
  update(
    @Param('id', IdFormatValidationPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.updateProductUseCase.execute(id, updateProductDto);
  }

  @RoutePermission('delete-product')
  @Delete(':id')
  remove(@Param('id', IdFormatValidationPipe) id: number) {
    return this.removeProductUseCase.execute(id);
  }
}
