import { z } from 'zod';
import { userRepository } from '../repository';

export const listUsersSchema = z.object({
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
});

export type ListUsersInput = z.infer<typeof listUsersSchema>;

export async function listUsers(_input: ListUsersInput) {
  // TODO: Add pagination
  const users = await userRepository.findAll();

  return users.map((user) => ({
    id: user.id,
    email: user.email,
    name: user.name,
    image: user.image,
    createdAt: user.createdAt,
  }));
}
