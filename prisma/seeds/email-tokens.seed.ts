import { EmailToken } from '@/auth/entities/email-token.entity';

export const emailTokensSeeds: EmailToken[] = [
  {
    id: '1',
    userId: 2,
    email: 'valid_token@email.com',
    createdAt: new Date(),
    dueDate: new Date(new Date().setMinutes(new Date().getMinutes() + 30)), //30 minutes expire time
  },
  {
    id: '2',
    userId: 3,
    email: 'expired_token@email.com',
    createdAt: new Date(),
    dueDate: new Date(),
  },
];
