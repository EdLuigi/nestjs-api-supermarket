import { BadFormatError } from '@/common/error/bad-format.error';
import { Injectable } from '@nestjs/common';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class FindOnePermissionUseCase {
  constructor(private permissionsService: PermissionsService) {}

  async execute(id: number) {
    if (isNaN(id)) throw new BadFormatError('id');

    return await this.permissionsService.findOne(id);
  }
}
