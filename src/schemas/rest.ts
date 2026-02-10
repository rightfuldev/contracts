import { z } from 'zod';
import { GdprAction, LegalBasis, DataCategory } from '../enums';

export const RegisterResponseSchema = z.object({
  entities: z
    .array(
      z.object({
        name: z.string().min(1),
        stored: z.boolean(),
        processed: z.boolean(),
        dataCategory: z.nativeEnum(DataCategory),
        personalDataTypes: z.array(z.string().min(1)).min(1),
        legalBasis: z.nativeEnum(LegalBasis),
      }),
    )
    .min(1),
  supportedActions: z.array(z.nativeEnum(GdprAction)).min(1),
});

export const HealthResponseSchema = z.object({
  status: z.literal('ok'),
});

export const DataResponseSchema = z.object({
  userId: z.string().min(1),
  data: z.array(
    z.object({
      entity: z.string().min(1),
      records: z.array(z.record(z.unknown())),
    }),
  ),
});

export const DeleteResponseSchema = z.object({
  userId: z.string().min(1),
  deleted: z.array(
    z.object({
      entity: z.string().min(1),
      recordCount: z.number().int().nonnegative(),
    }),
  ),
  retained: z.array(
    z.object({
      entity: z.string().min(1),
      reason: z.string().min(1),
      legalBasis: z.nativeEnum(LegalBasis),
    }),
  ),
});

export const ExportResponseSchema = z.object({
  userId: z.string().min(1),
  data: z.array(
    z.object({
      entity: z.string().min(1),
      records: z.array(z.record(z.unknown())),
    }),
  ),
});