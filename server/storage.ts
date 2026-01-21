import { db, databaseEnabled } from "./db";
import {
  inquiries,
  type InsertInquiry,
  type Inquiry
} from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  constructor(private readonly database: NonNullable<typeof db> = db!) {
    if (!database) {
      throw new Error("Database is not configured");
    }
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await this.database
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }
}

class InMemoryStorage implements IStorage {
  private idCounter = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    // Mimic a persisted record so the client receives a valid shape.
    const inquiry: Inquiry = {
      id: this.idCounter++,
      createdAt: new Date(),
      ...insertInquiry,
    };

    // eslint-disable-next-line no-console
    console.warn("Persisting inquiry in memory only; configure DATABASE_URL to enable storage.");
    return inquiry;
  }
}

export const storage: IStorage = databaseEnabled && db
  ? new DatabaseStorage(db)
  : new InMemoryStorage();
