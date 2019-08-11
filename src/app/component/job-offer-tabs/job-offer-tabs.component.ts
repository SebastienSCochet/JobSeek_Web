import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationTab} from '../../enumeration/navigation-tab';

@Component({
  selector: 'app-job-offer-tabs',
  templateUrl: './job-offer-tabs.component.html',
  styleUrls: ['./job-offer-tabs.component.scss']
})
export class JobOfferTabsComponent implements OnInit {

  @Output() private changeEvent = new EventEmitter();
  events = [NavigationTab.GRID, NavigationTab.MAP];
  private selectedTab: NavigationTab = NavigationTab.GRID;

  constructor() { }

  ngOnInit() {

  }

  /**
   * Change the selected tab
   * @param tab : selected tab
   */
  changeTab(tab: NavigationTab) {
    this.selectedTab = tab;
    this.changeEvent.emit(tab);
  }

  /**
   * Return true if the navigation tab is active
   * @param navigationTab tab
   */
  isActive(navigationTab: NavigationTab): boolean {
    return this.selectedTab === navigationTab;
  }
}
