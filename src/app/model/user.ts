import {Address} from './address';
import {Coordinate} from './coordinate';
import {Preference} from './preference';
import {Role} from './role';

export class User {
  idUser: number;
  firstname: string;
  lastname: string;
  birth: Date;
  email: string;
  password: string;
  avatarUrl: string;
  coordinate: Coordinate;
  address: Address;
  preference: Preference;
  role: Role;
}
