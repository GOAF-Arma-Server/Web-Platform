import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { userRepository } from '../repository';

export const updateUserSchema = z.object({
  name: z.string().min(2).max(255).optional(),
  image: z.string().url().optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export async function updateUser(userId: string, input: UpdateUserInput) {
  const user = await userRepository.findById(userId);

  if (!user) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'User not found',
    });
  }

  const updatedUser = await userRepository.update(userId, input);

  return {
    id: updatedUser?.id,
    email: updatedUser?.email,
    name: updatedUser?.name,
    image: updatedUser?.image,
    updatedAt: updatedUser?.updatedAt,
  };
}
