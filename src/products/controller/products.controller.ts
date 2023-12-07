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
import { FindBySupplierDoc } from '../documentation/find-by-supplier.doc';
import { FindOneDoc } from '../documentation/find-one.doc';
import { RemoveDoc } from '../documentation/remove.doc';
import { UpdateDoc } from '../documentation/update.doc';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductUseCase } from '../use-case/create-product.use-case';
import { FindAllProductsUseCase } from '../use-case/find-all-products.use-case';
import { FindBySupplierUseCase } from '../use-case/find-by-supplier.use-case';
import { FindOneProductUseCase } from '../use-case/find-one-product.use-case';
import { RemoveProductUseCase } from '../use-case/remove-product.use-case';
import { UpdateProductUseCase } from '../use-case/update-product.use-case';

@ApiTags('Products')
@ApiBearerAuth('JWT-auth')
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

  @Post()
  @RoutePermission('create-product')
  @CreateDoc()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductUseCase.execute(createProductDto);
  }

  @Get()
  @RoutePermission('find-all-products')
  @FindAllDoc()
  findAll() {
    return this.findAllProductsUseCase.execute();
  }

  @Get(':id')
  @RoutePermission('find-product')
  @FindOneDoc()
  findOne(@Param('id', IdFormatValidationPipe) id: number) {
    return this.findOneProductUseCase.execute(id);
  }

  @Get('/supplier/:id')
  @RoutePermission('find-products-by-supplier')
  @FindBySupplierDoc()
  findBySupplier(@Param('id', IdFormatValidationPipe) supplierId: number) {
    return this.findBySupplierUseCase.execute(supplierId);
  }

  @Patch(':id')
  @RoutePermission('update-product')
  @UpdateDoc()
  update(
    @Param('id', IdFormatValidationPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.updateProductUseCase.execute(id, updateProductDto);
  }

  @Delete(':id')
  @RoutePermission('delete-product')
  @RemoveDoc()
  remove(@Param('id', IdFormatValidationPipe) id: number) {
    return this.removeProductUseCase.execute(id);
  }
}
