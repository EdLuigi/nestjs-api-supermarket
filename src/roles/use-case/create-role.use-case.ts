import { DuplicateKeyValueError } from '@/common/error/duplicate-key-value.error';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { RolesService } from '../service/roles.service';

@Injectable()
export class CreateRoleUseCase {
  constructor(private rolesService: RolesService) {}

  async execute(roleData: CreateRoleDto) {
    const duplicateName = await this.rolesService.findByName(roleData.name);
    if (duplicateName) throw new DuplicateKeyValueError('name');

    return await this.rolesService.create(roleData);
  }
}
