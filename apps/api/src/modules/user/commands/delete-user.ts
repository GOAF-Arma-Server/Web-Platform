import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { userRepository } from '../repository';

export const deleteUserSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteUserInput = z.infer<typeof deleteUserSchema>;

export async function deleteUser(input: DeleteUserInput) {
  const deleted = await userRepository.delete(input.id);

  if (!deleted) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'User not found',
    });
  }

  return { success: true };
}
