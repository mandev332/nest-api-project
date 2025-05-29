import { UUID } from 'crypto';

export class User {
  id?: UUID;
  fio: FIO;
  birthdate: Date;
  imageurl: string;
  phone: string;
  position: POSITION;
  address: string;
  login: string;
  password: string;
  createat: Date;
}

type POSITION = 'USER' | 'ADMIN' | 'SUPERADMIN';

class FIO {
  firstname: string;
  lastname: string;
  middlename: string;
}
