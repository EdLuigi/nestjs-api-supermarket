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
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../service/products.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @RoutePermission('create-product')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @RoutePermission('find-all-products')
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @RoutePermission('find-product')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @RoutePermission('find-products-by-supplier')
  @Get('/supplier/:id')
  findBySupplier(@Param('id') id: string) {
    return this.productsService.findBySupplier(+id);
  }

  @RoutePermission('update-product')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @RoutePermission('delete-product')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
