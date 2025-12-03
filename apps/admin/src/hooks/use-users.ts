'use client';

import { trpc } from '@repo/trpc/react';

// Hook pour lister tous les utilisateurs (admin only)
export function useUsers() {
  return trpc.user.list.useQuery({
    limit: 50,
    offset: 0,
  });
}

// Hook pour récupérer un utilisateur par ID
export function useUser(id: string) {
  return trpc.user.getById.useQuery(
    { id },
    {
      enabled: !!id,
    }
  );
}

// Hook pour supprimer un utilisateur (admin only)
export function useDeleteUser() {
  const utils = trpc.useUtils();

  return trpc.user.delete.useMutation({
    onSuccess: () => {
      utils.user.list.invalidate();
    },
  });
}
