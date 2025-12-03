'use client';

import { trpc } from '@repo/trpc/react';

// Hook pour récupérer l'utilisateur courant
export function useCurrentUser() {
  return trpc.user.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });
}

// Hook pour récupérer un profil utilisateur
export function useUserProfile(userId: string) {
  return trpc.user.getProfile.useQuery(
    { userId },
    {
      enabled: !!userId,
    }
  );
}

// Hook pour mettre à jour le profil
export function useUpdateProfile() {
  const utils = trpc.useUtils();

  return trpc.user.updateProfile.useMutation({
    onSuccess: () => {
      // Invalider le cache après mise à jour
      utils.user.me.invalidate();
    },
  });
}
