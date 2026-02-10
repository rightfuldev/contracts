export const NatsSubjects = {
  REGISTER: 'gdpr.register',
  HEARTBEAT: 'gdpr.heartbeat',
  REQUEST_REGISTRATION: 'gdpr.request-registration',

  action: (serviceName: string) => `gdpr.action.${serviceName}`,
  processAck: (processId: string) => `gdpr.process.${processId}.ack`,
  processError: (processId: string) => `gdpr.process.${processId}.error`,

  // Wildcard patterns for subscribers
  ACTION_WILDCARD: 'gdpr.action.*',
  PROCESS_ACK_WILDCARD: 'gdpr.process.*.ack',
  PROCESS_ERROR_WILDCARD: 'gdpr.process.*.error',
} as const;