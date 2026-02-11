import { GdprAction, LegalBasis, DataCategory } from '../enums';

export interface EntityDefinition {
  name: string;
  stored: boolean;
  processed: boolean;
  dataCategory: DataCategory;
  personalDataTypes: string[];
  legalBasis: LegalBasis;
}

export interface RegistrationMessage {
  serviceName: string;
  sidecarVersion: string;
  entities: EntityDefinition[];
  supportedActions: GdprAction[];
}

export interface HeartbeatMessage {
  serviceName: string;
  timestamp: string;
}

export interface ActionRequestMessage {
  processId: string;
  action: GdprAction;
  userId: string;
  uploadUrl?: string; // presigned S3 URL for EXPORT actions
  s3Key?: string;
}

export interface ActionReceiptMessage {
  processId: string;
  serviceName: string;
  action: GdprAction;
}

export interface ActionCompletionMessage {
  processId: string;
  serviceName: string;
  action: GdprAction;
  result: ActionResult;
}

export interface ActionResult {
  deleted?: DeletedRecord[];
  retained?: RetainedRecord[];
  s3Key?: string; // for EXPORT actions
}

export interface DeletedRecord {
  entity: string;
  recordCount: number;
}

export interface RetainedRecord {
  entity: string;
  reason: string;
  legalBasis: LegalBasis;
}

export interface ActionErrorMessage {
  processId: string;
  serviceName: string;
  action: GdprAction;
  error: string;
}