import { healthRouter } from '@/modules/health/handlers';
import { userRouter } from '@/modules/user/handlers';
import { router } from './index';

export const appRouter = router({
  health: healthRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
