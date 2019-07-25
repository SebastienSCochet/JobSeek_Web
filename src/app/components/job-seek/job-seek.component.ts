import { Component, OnInit } from '@angular/core';
import {PreferencesService} from "../../services/preferences.service";
import {Preference} from "../../model/preference";
import {JobOffersService} from "../../services/job-offers.service";
import {Observable} from "rxjs";
import {JobOffer} from "../../model/job-offer";

@Component({
  selector: 'app-job-seek',
  templateUrl: './job-seek.component.html',
  styleUrls: ['./job-seek.component.scss']
})
export class JobSeekComponent implements OnInit {

  private userPreferenceObs: Observable<Preference>;
  private jobOffersObs: Observable<JobOffer[]>;
  private keyword = '';

  constructor(private preferencesService: PreferencesService,
              private jobOffersService: JobOffersService) { }

  ngOnInit() {
    this.userPreferenceObs = this.preferencesService.findByUser();
    this.jobOffersObs = this.jobOffersService.findPreferredOffers(this.keyword);
  }

  searchJobs(keyword: string) {
    this.jobOffersObs = this.jobOffersService.findPreferredOffers(keyword);
  }

}
