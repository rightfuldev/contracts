# gdpr-contracts

Shared contracts for the GDPR Sidecar system. Includes TypeScript types, Zod validation schemas, shared enums, and NATS subject definitions for communication between the GDPR Service and GDPR Sidecar.

## Installation

```bash
npm install gdpr-contracts
```

## Usage

```typescript
import { /* types, schemas, enums, subjects */ } from 'gdpr-contracts';
```

## Package Contents

| Module | Description |
|--------|-------------|
| `enums` | Shared enumerations for GDPR operations |
| `types` | TypeScript type definitions |
| `schemas` | Zod validation schemas for runtime validation |
| `subjects` | NATS subject definitions for service communication |

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev

# Clean build output
npm run clean
```

## License

ISC
