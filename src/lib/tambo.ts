/**
 * @file tambo.ts
 * @description Central configuration file for Tambo tools
 */

import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";

import { raiseComplaint } from "@/services/complaints";
import { getMaintenanceStatus } from "@/services/maintenance";
import { getSocietyNotices } from "@/services/notices";

/**
 * tools
 */
export const tools: TamboTool[] = [
  {
    name: "raiseComplaint",
    description: "Allows a resident to raise a society complaint",
    tool: raiseComplaint,
    inputSchema: z.object({
      category: z.string(),
      description: z.string(),
      flatNumber: z.string(),
    }),
    outputSchema: z.object({
      status: z.string(),
      complaintId: z.string(),
    }),
  },
  {
    name: "getMaintenanceStatus",
    description: "Fetch maintenance due or payment status for a resident",
    tool: getMaintenanceStatus,
    inputSchema: z.object({
      flatNumber: z.string(),
    }),
    outputSchema: z.object({
      amountDue: z.number(),
      dueDate: z.string(),
      status: z.string(),
    }),
  },
  {
    name: "getSocietyNotices",
    description: "Get latest notices from society management",
    tool: getSocietyNotices,
    inputSchema: z.object({}),
    outputSchema: z.array(
      z.object({
        title: z.string(),
        message: z.string(),
        date: z.string(),
      })
    ),
  },
];

/**
 * components

 */
export const components: TamboComponent[] = [];


