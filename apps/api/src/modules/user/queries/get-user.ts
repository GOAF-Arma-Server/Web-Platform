import { z } from 'zod';
import { userRepository } from '../repository';

export const getUserByIdSchema = z.object({
  id: z.string().uuid(),
});

export type GetUserByIdInput = z.infer<typeof getUserByIdSchema>;

export async function getUserById(input: GetUserByIdInput) {
  const user = await userRepository.findById(input.id);

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    image: user.image,
    emailVerified: user.emailVerified,
    createdAt: user.createdAt,
  };
}
