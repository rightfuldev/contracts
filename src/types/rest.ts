import { GdprAction, LegalBasis, DataCategory } from '../enums';

// GET /gdpr/register
export interface RegisterResponse {
  entities: {
    name: string;
    stored: boolean;
    processed: boolean;
    dataCategory: DataCategory;
    personalDataTypes: string[];
    legalBasis: LegalBasis;
  }[];
  supportedActions: GdprAction[];
}

// GET /gdpr/health
export interface HealthResponse {
  status: 'ok';
}

// GET /gdpr/data/{userId}
export interface DataResponse {
  userId: string;
  data: {
    entity: string;
    records: Record<string, unknown>[];
  }[];
}

// DELETE /gdpr/data/{userId}
export interface DeleteResponse {
  userId: string;
  deleted: {
    entity: string;
    recordCount: number;
  }[];
  retained: {
    entity: string;
    reason: string;
    legalBasis: LegalBasis;
  }[];
}

// POST /gdpr/export
export interface ExportResponse {
  userId: string;
  data: {
    entity: string;
    records: Record<string, unknown>[];
  }[];
}