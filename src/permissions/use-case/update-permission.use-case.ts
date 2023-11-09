import { BadFormatError } from '@/common/error/bad-format.error';
import { NotFoundPermissionError } from '@/common/error/not-found-permission.error';
import { Injectable } from '@nestjs/common';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class UpdatePermissionUseCase {
  constructor(private permissionsService: PermissionsService) {}

  async execute(id: number, permissionData: UpdatePermissionDto) {
    if (!Number.isInteger(+id)) throw new BadFormatError('id');

    const permissionExists = await this.permissionsService.findOne(id);
    if (!permissionExists) throw new NotFoundPermissionError();

    return await this.permissionsService.update(id, permissionData);
  }
}
