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
import { RoutePermission } from 'src/auth/decorator/route-permission.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from 'src/auth/guard/route-permission.guard';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../products.service';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @RoutePermission('create-product')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @RoutePermission('find-all-products')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-product')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Get('/supplier/:id')
  @RoutePermission('find-products-by-supplier')
  findBySupplier(@Param('id') id: string) {
    return this.productsService.findBySupplier(+id);
  }

  @Patch(':id')
  @RoutePermission('update-product')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @RoutePermission('delete-product')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
