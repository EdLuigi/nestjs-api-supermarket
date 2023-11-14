import { Injectable } from '@nestjs/common';
import { RolesPermissionsService } from '../service/roles_permissions.service';

@Injectable()
export class FindAllRolesPermissionsUseCase {
  constructor(private rolePermissionsService: RolesPermissionsService) {}

  async execute() {
    return await this.rolePermissionsService.findAll();
  }
}
