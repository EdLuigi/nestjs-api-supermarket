import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class CreatePermissionUseCase {
  constructor(private permissionsService: PermissionsService) {}

  async execute(permissionData: CreatePermissionDto) {
    const duplicateName = await this.permissionsService.findByName(
      permissionData.name,
    );
    if (duplicateName) throw new DuplicateKeyValueError('name');

    return await this.permissionsService.create(permissionData);
  }
}
