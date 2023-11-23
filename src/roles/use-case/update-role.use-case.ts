import { NotFoundRoleError } from '@/common/error/not-found-role.error';
import { RolesService } from '@/roles/service/roles.service';
import { Injectable } from '@nestjs/common';
import { UpdateRoleDto } from '../dto/update-role.dto';

@Injectable()
export class UpdateRoleUseCase {
  constructor(private rolesService: RolesService) {}

  async execute(id: number, updateRoleData: UpdateRoleDto) {
    const roleExists = await this.rolesService.findOne(id);
    if (!roleExists) throw new NotFoundRoleError();

    return await this.rolesService.update(roleExists.id, updateRoleData);
  }
}
