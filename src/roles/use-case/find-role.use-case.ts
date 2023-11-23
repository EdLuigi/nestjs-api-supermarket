import { Injectable } from '@nestjs/common';
import { RolesService } from '../service/roles.service';

@Injectable()
export class FindOneRoleUseCase {
  constructor(private rolesService: RolesService) {}

  async execute(id: number) {
    return await this.rolesService.findOne(id);
  }
}
