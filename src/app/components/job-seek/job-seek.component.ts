import {Component, OnInit} from '@angular/core';
import {PreferencesService} from '../../services/preferences.service';
import {Preference} from '../../model/preference';
import {JobOffersService} from '../../services/job-offers.service';
import {Observable} from 'rxjs';
import {JobOffer} from '../../model/job-offer';
import {Search} from '../../model/search';

@Component({
  selector: 'app-job-seek',
  templateUrl: './job-seek.component.html',
  styleUrls: ['./job-seek.component.scss']
})
export class JobSeekComponent implements OnInit {

  private userPreferenceObs: Observable<Preference>;
  private jobOffers: JobOffer[];

  constructor(private preferencesService: PreferencesService,
              private jobOffersService: JobOffersService) { }

  ngOnInit() {
    this.userPreferenceObs = this.preferencesService.findByUser();
  }

  searchJobs(search: Search) {
    this.jobOffersService.findOffersBySearch(search).subscribe(o => this.jobOffers = o);
  }

}
