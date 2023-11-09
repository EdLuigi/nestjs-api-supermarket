import { BadFormatError } from '@/common/error/bad-format.error';
import { Injectable } from '@nestjs/common';
import { RolesService } from '../service/roles.service';

@Injectable()
export class FindOneRoleUseCase {
  constructor(private rolesService: RolesService) {}

  async execute(id: number) {
    if (Number.isInteger(+id)) throw new BadFormatError('id');

    return await this.rolesService.findOne(id);
  }
}
