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
import { JwtGuard } from '@/auth/guard/jwt.guard';
import { UserHasPermissionGuard } from '@/auth/guard/route-permission.guard';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import { SuppliersService } from '../service/suppliers.service';
import { RoutePermission } from '@/auth/decorator/route-permission.decorator';

@UseGuards(JwtGuard, UserHasPermissionGuard)
@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  @RoutePermission('create-supplier')
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  @RoutePermission('find-all-suppliers')
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  @RoutePermission('find-supplier')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(+id);
  }

  @Patch(':id')
  @RoutePermission('update-supplier')
  update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.suppliersService.update(+id, updateSupplierDto);
  }

  @Delete(':id')
  @RoutePermission('delete-supplier')
  remove(@Param('id') id: string) {
    return this.suppliersService.remove(+id);
  }
}
