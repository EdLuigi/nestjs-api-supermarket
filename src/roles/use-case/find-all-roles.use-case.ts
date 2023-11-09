import { Injectable } from '@nestjs/common';
import { RolesService } from '../service/roles.service';

@Injectable()
export class FindAllRolesUseCase {
  constructor(private rolesService: RolesService) {}

  async execute() {
    return await this.rolesService.findAll();
  }
}
