import { User } from '@/users/entities/user.entity';

export const usersSeed: User[] = [
  {
    name: 'user admin',
    registry: 'user1',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    name: 'user manager',
    registry: 'user2',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    name: 'user employee',
    registry: 'user3',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
];
