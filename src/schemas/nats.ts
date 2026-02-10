import { z } from 'zod';
import { GdprAction, LegalBasis, DataCategory } from '../enums';

export const EntityDefinitionSchema = z.object({
  name: z.string().min(1),
  stored: z.boolean(),
  processed: z.boolean(),
  dataCategory: z.nativeEnum(DataCategory),
  personalDataTypes: z.array(z.string().min(1)).min(1),
  legalBasis: z.nativeEnum(LegalBasis),
});

export const RegistrationMessageSchema = z.object({
  serviceName: z.string().min(1),
  sidecarVersion: z.string().min(1),
  entities: z.array(EntityDefinitionSchema).min(1),
  supportedActions: z.array(z.nativeEnum(GdprAction)).min(1),
});

export const HeartbeatMessageSchema = z.object({
  serviceName: z.string().min(1),
  timestamp: z.string().datetime(),
});

export const ActionRequestMessageSchema = z.object({
  processId: z.string().min(1),
  action: z.nativeEnum(GdprAction),
  userId: z.string().min(1),
  uploadUrl: z.string().url().optional(),
});

export const DeletedRecordSchema = z.object({
  entity: z.string().min(1),
  recordCount: z.number().int().nonnegative(),
});

export const RetainedRecordSchema = z.object({
  entity: z.string().min(1),
  reason: z.string().min(1),
  legalBasis: z.nativeEnum(LegalBasis),
});

export const ActionResultSchema = z.object({
  deleted: z.array(DeletedRecordSchema).optional(),
  retained: z.array(RetainedRecordSchema).optional(),
  s3Key: z.string().min(1).optional(),
});

export const ActionReceiptMessageSchema = z.object({
  processId: z.string().min(1),
  serviceName: z.string().min(1),
  action: z.nativeEnum(GdprAction),
});

export const ActionCompletionMessageSchema = z.object({
  processId: z.string().min(1),
  serviceName: z.string().min(1),
  action: z.nativeEnum(GdprAction),
  result: ActionResultSchema,
});

export const ActionErrorMessageSchema = z.object({
  processId: z.string().min(1),
  serviceName: z.string().min(1),
  action: z.nativeEnum(GdprAction),
  error: z.string().min(1),
});