import {Preference} from './preference';

export class Search {

  constructor(keyword: string = '', enterprise: string = '', preference: Preference) {
    this.keyword = keyword;
    this.enterprise = enterprise;
    this.preference = preference;
  }

  keyword: string;
  enterprise: string;
  preference: Preference;
}
