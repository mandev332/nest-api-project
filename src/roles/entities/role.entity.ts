import { UUID } from 'crypto';

export class Role {
  id: UUID;
  role_type: string;
  get: boolean;
  set: boolean;
  put: boolean;
  del: boolean;
}
