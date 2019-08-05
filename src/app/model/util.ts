import {ContractType} from '../enumeration/contract-type';

export class Util {

  static getContractTypeEnumFromString(enumString: string): ContractType {
    switch (enumString) {
      case 'Temps plein': return ContractType.FULLTIME;
      case 'Temps partiel': return ContractType.HALFTIME;
      default: return undefined;
    }
  }
}
