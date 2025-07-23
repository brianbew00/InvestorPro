import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadCaptureSchema, insertDataRoomRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead capture form submission
  app.post("/api/lead-capture", async (req, res) => {
    try {
      const validatedData = insertLeadCaptureSchema.parse(req.body);
      const leadCapture = await storage.createLeadCapture(validatedData);
      res.json({ success: true, id: leadCapture.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Data room access request
  app.post("/api/data-room-access", async (req, res) => {
    try {
      const validatedData = insertDataRoomRequestSchema.parse(req.body);
      const dataRoomRequest = await storage.createDataRoomRequest(validatedData);
      res.json({ success: true, id: dataRoomRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
