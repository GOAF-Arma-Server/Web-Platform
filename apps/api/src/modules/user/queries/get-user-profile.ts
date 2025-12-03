import { z } from 'zod';
import { userRepository } from '../repository';

export const getUserProfileSchema = z.object({
  userId: z.string().uuid(),
});

export type GetUserProfileInput = z.infer<typeof getUserProfileSchema>;

export async function getUserProfile(input: GetUserProfileInput) {
  const userWithProfile = await userRepository.findWithProfile(input.userId);

  if (!userWithProfile) {
    return null;
  }

  return {
    id: userWithProfile.id,
    email: userWithProfile.email,
    name: userWithProfile.name,
    image: userWithProfile.image,
    profile: userWithProfile.profile
      ? {
          discordId: userWithProfile.profile.discordId,
          steamId: userWithProfile.profile.steamId,
          armaPlayerId: userWithProfile.profile.armaPlayerId,
          rank: userWithProfile.profile.rank,
          unit: userWithProfile.profile.unit,
          joinedAt: userWithProfile.profile.joinedAt,
        }
      : null,
  };
}
