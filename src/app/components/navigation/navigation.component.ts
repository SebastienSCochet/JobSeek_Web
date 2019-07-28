import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationTab} from "../../enumeration/navigation-tab";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() private changeEvent = new EventEmitter();
  private events = [NavigationTab.GRID, NavigationTab.MAP];
  private selectedTab: NavigationTab = NavigationTab.GRID;

  constructor() { }

  ngOnInit() {

  }

  changeTab(tab: NavigationTab) {
    this.selectedTab = tab;
    this.changeEvent.emit(tab);
  }

  isActive(navigationTab: NavigationTab): boolean {
    return this.selectedTab === navigationTab;
  }
}
