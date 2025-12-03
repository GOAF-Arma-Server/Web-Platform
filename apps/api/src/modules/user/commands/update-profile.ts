import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { userRepository } from '../repository';

export const updateProfileSchema = z.object({
  discordId: z.string().optional(),
  steamId: z.string().optional(),
  armaPlayerId: z.string().optional(),
  rank: z.string().max(100).optional(),
  unit: z.string().max(255).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export async function updateProfile(userId: string, input: UpdateProfileInput) {
  const userWithProfile = await userRepository.findWithProfile(userId);

  if (!userWithProfile) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'User not found',
    });
  }

  // Create profile if it doesn't exist
  if (!userWithProfile.profile) {
    const newProfile = await userRepository.createProfile({
      userId,
      ...input,
    });

    return {
      discordId: newProfile.discordId,
      steamId: newProfile.steamId,
      armaPlayerId: newProfile.armaPlayerId,
      rank: newProfile.rank,
      unit: newProfile.unit,
      joinedAt: newProfile.joinedAt,
    };
  }

  // Update existing profile
  const updatedProfile = await userRepository.updateProfile(userId, input);

  return {
    discordId: updatedProfile!.discordId,
    steamId: updatedProfile!.steamId,
    armaPlayerId: updatedProfile!.armaPlayerId,
    rank: updatedProfile!.rank,
    unit: updatedProfile!.unit,
    joinedAt: updatedProfile!.joinedAt,
  };
}
