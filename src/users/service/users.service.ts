import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    if (isNaN(id)) return null;
    return this.prisma.user.findFirst({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (isNaN(id)) return null;

    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: number) {
    if (isNaN(id)) return null;
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) return;

    await this.prisma.user.delete({
      where: { id },
    });
  }
}
