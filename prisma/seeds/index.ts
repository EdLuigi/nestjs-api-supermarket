import { PrismaClient } from '@prisma/client';
import { usersSeed } from './users.seed';
import { permissionsSeed } from './permissions.seed';

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
