import { User } from 'src/users/entities/user.entity';

export const usersSeed: User[] = [
  {
    id: 1,
    registry: 'user1',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    id: 2,
    registry: 'user2',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    id: 3,
    registry: 'user3',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    id: 4,
    registry: 'user4',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    id: 5,
    registry: 'user5',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
];
