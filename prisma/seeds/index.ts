import { PrismaClient } from '@prisma/client';
import { permissionsSeed } from './permissions.seed';
import { productsSeeds } from './products.seed';
import { rolesPermissionsSeeds } from './roles-permissions.seed';
import { rolesSeed } from './roles.seed';
import { suppliersSeeds } from './suppliers.seed';
import { usersRolesSeeds } from './users-roles.seed';
import { usersSeed } from './users.seed';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: usersSeed,
    skipDuplicates: true,
  });

  await prisma.permission.createMany({
    data: permissionsSeed,
    skipDuplicates: true,
  });

  await prisma.role.createMany({
    data: rolesSeed,
    skipDuplicates: true,
  });

  await prisma.userRole.createMany({
    data: usersRolesSeeds,
    skipDuplicates: true,
  });

  await prisma.rolePermission.createMany({
    data: rolesPermissionsSeeds,
    skipDuplicates: true,
  });

  await prisma.supplier.createMany({
    data: suppliersSeeds,
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: productsSeeds,
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log('Database was seeded correctly');
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
