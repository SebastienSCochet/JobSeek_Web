import {Preference} from './preference';
import {Coordinate} from './coordinate';

export class Search {

  constructor(keyword: string = '', enterprise: string = '', preference: Preference, coordinate: Coordinate) {
    this.keyword = keyword;
    this.enterprise = enterprise;
    this.preference = preference;
    this.coordinate = coordinate;
  }

  keyword: string;
  enterprise: string;
  preference: Preference;
  coordinate: Coordinate;
}
