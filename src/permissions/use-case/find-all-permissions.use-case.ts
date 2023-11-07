import { Injectable } from '@nestjs/common';
import { PermissionsService } from '../service/permissions.service';

@Injectable()
export class FindAllPermissionsUseCase {
  constructor(private permissionsService: PermissionsService) {}

  async execute() {
    return await this.permissionsService.findAll();
  }
}
