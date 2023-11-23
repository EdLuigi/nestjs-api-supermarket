import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';
import { Injectable } from '@nestjs/common';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class UpdatePermissionUseCase {
  constructor(private permissionsService: PermissionsService) {}

  async execute(id: number, permissionData: UpdatePermissionDto) {
    const permissionExists = await this.permissionsService.findOne(id);
    if (!permissionExists) throw new NotFoundPermissionError();

    return await this.permissionsService.update(id, permissionData);
  }
}
