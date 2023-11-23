import { Injectable } from '@nestjs/common';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class FindOnePermissionUseCase {
  constructor(private permissionsService: PermissionsService) {}

  async execute(id: number) {
    return await this.permissionsService.findOne(id);
  }
}
