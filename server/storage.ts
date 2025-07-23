import { users, leadCaptures, dataRoomRequests, type User, type InsertUser, type LeadCapture, type InsertLeadCapture, type DataRoomRequest, type InsertDataRoomRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLeadCapture(leadCapture: InsertLeadCapture): Promise<LeadCapture>;
  createDataRoomRequest(dataRoomRequest: InsertDataRoomRequest): Promise<DataRoomRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leadCaptures: Map<number, LeadCapture>;
  private dataRoomRequests: Map<number, DataRoomRequest>;
  private currentUserId: number;
  private currentLeadId: number;
  private currentDataRoomId: number;

  constructor() {
    this.users = new Map();
    this.leadCaptures = new Map();
    this.dataRoomRequests = new Map();
    this.currentUserId = 1;
    this.currentLeadId = 1;
    this.currentDataRoomId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLeadCapture(insertLeadCapture: InsertLeadCapture): Promise<LeadCapture> {
    const id = this.currentLeadId++;
    const leadCapture: LeadCapture = {
      ...insertLeadCapture,
      id,
      createdAt: new Date()
    };
    this.leadCaptures.set(id, leadCapture);
    return leadCapture;
  }

  async createDataRoomRequest(insertDataRoomRequest: InsertDataRoomRequest): Promise<DataRoomRequest> {
    const id = this.currentDataRoomId++;
    const dataRoomRequest: DataRoomRequest = {
      ...insertDataRoomRequest,
      id,
      createdAt: new Date()
    };
    this.dataRoomRequests.set(id, dataRoomRequest);
    return dataRoomRequest;
  }
}

export const storage = new MemStorage();
