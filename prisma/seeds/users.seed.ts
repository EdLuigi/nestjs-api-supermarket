import { User } from '@/users/entities/user.entity';

// password: 123
export const usersSeed: User[] = [
  {
    name: '[user admin]',
    registry: '348.435.361-99',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    name: '[user manager]',
    registry: '462.339.146-98',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    name: '[user employee]',
    registry: '537.095.483-65',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
  {
    name: '[user w/ no userRole]',
    registry: '223.162.491-59',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$CTw1zYIJlYncRVNwmbbVog$vsDZBiy5heHyw1r8TuqwBm8eEBnCOzuuVJE9NTUow10',
    createdAt: new Date(),
  },
];
