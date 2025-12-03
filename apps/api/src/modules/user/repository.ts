import { eq } from 'drizzle-orm';
import { db } from '@/db';
import {
  type NewProfile,
  type NewUser,
  type Profile,
  profiles,
  type User,
  users,
} from '@/db/schema';

export const userRepository = {
  // Find operations
  async findById(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  },

  async findByEmail(email: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return result[0];
  },

  async findAll(): Promise<User[]> {
    return db.select().from(users);
  },

  async findWithProfile(userId: string): Promise<(User & { profile: Profile | null }) | undefined> {
    const result = await db
      .select()
      .from(users)
      .leftJoin(profiles, eq(users.id, profiles.userId))
      .where(eq(users.id, userId))
      .limit(1);

    if (!result[0]) return undefined;

    return {
      ...result[0].users,
      profile: result[0].profiles,
    };
  },

  // Create operations
  async create(data: NewUser): Promise<User> {
    const result = await db.insert(users).values(data).returning();
    return result[0]!;
  },

  async createProfile(data: NewProfile): Promise<Profile> {
    const result = await db.insert(profiles).values(data).returning();
    return result[0]!;
  },

  // Update operations
  async update(id: string, data: Partial<NewUser>): Promise<User | undefined> {
    const result = await db
      .update(users)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return result[0];
  },

  async updateProfile(userId: string, data: Partial<NewProfile>): Promise<Profile | undefined> {
    const result = await db
      .update(profiles)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(profiles.userId, userId))
      .returning();
    return result[0];
  },

  // Delete operations
  async delete(id: string): Promise<boolean> {
    const result = await db.delete(users).where(eq(users.id, id)).returning();
    return result.length > 0;
  },
};
