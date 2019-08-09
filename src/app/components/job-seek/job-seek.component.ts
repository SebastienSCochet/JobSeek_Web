import {Component, OnInit} from '@angular/core';
import {PreferencesService} from '../../services/preferences.service';
import {Preference} from '../../model/preference';
import {JobOffersService} from '../../services/job-offers.service';
import {Observable} from 'rxjs';
import {JobOffer} from '../../model/job-offer';
import {Search} from '../../model/search';
import {NavigationTab} from '../../enumeration/navigation-tab';
import {CoordinatesService} from '../../services/coordinates.service';

@Component({
  selector: 'app-job-seek',
  templateUrl: './job-seek.component.html',
  styleUrls: ['./job-seek.component.scss']
})
export class JobSeekComponent implements OnInit {

  userPreferenceObs: Observable<Preference>;
  jobOffers: JobOffer[];
  gridTab = true;

  constructor(private preferencesService: PreferencesService,
              private jobOffersService: JobOffersService,
              private coordinatesService: CoordinatesService) { }

  ngOnInit() {
    this.userPreferenceObs = this.preferencesService.findByUser();
  }

  /**
   * Method triggered by a child component. Search the jobs based with the specified search object provided by the child component.
   * @param search of the user
   */
  searchJobs(search: Search) {
    this.coordinatesService.updateCoordinate(search.coordinate).subscribe();
    this.jobOffersService.findOffersBySearch(search).subscribe(o => this.jobOffers = o);
  }

  /**
   * Change the selected tab
   * @param tab selected NavigationTab
   */
  changeTab(tab: NavigationTab) {
    this.gridTab = tab === NavigationTab.GRID;
  }
}
