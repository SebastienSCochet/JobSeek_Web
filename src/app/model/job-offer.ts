import {Coordinate} from './coordinate';
import {ContractType} from '../enumeration/contract-type';
import {Enterprise} from './enterprise';
import {Category} from './category';

export class JobOffer {
  idJobOffer: number;
  title: string;
  description: string;
  contact: string;
  salyaryMin: number;
  salaryMax: number;
  place: string;
  publishDate: Date;
  contractType: ContractType;
  coordinate: Coordinate;
  enterprise: Enterprise;
  categories: Category[];
}
