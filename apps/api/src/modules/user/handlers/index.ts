import { adminProcedure, protectedProcedure, publicProcedure, router } from '@/trpc';
import {
  deleteUser,
  deleteUserSchema,
  updateProfile,
  updateProfileSchema,
  updateUser,
  updateUserSchema,
} from '../commands';
import {
  getUserById,
  getUserByIdSchema,
  getUserProfile,
  getUserProfileSchema,
  listUsers,
  listUsersSchema,
} from '../queries';

export const userRouter = router({
  // Queries
  getById: publicProcedure.input(getUserByIdSchema).query(async ({ input }) => {
    return getUserById(input);
  }),

  getProfile: protectedProcedure.input(getUserProfileSchema).query(async ({ input }) => {
    return getUserProfile(input);
  }),

  me: protectedProcedure.query(async ({ ctx }) => {
    return getUserProfile({ userId: ctx.user.id });
  }),

  list: adminProcedure.input(listUsersSchema).query(async ({ input }) => {
    return listUsers(input);
  }),

  // Commands (Mutations)
  update: protectedProcedure.input(updateUserSchema).mutation(async ({ ctx, input }) => {
    return updateUser(ctx.user.id, input);
  }),

  updateProfile: protectedProcedure.input(updateProfileSchema).mutation(async ({ ctx, input }) => {
    return updateProfile(ctx.user.id, input);
  }),

  delete: adminProcedure.input(deleteUserSchema).mutation(async ({ input }) => {
    return deleteUser(input);
  }),
});
