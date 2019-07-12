import {Address} from './address';
import {Coordinate} from './coordinate';

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
}
