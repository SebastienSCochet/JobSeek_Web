import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from '../../model/job-offer';

@Component({
  selector: 'app-job-offers-map',
  templateUrl: './job-offers-map.component.html',
  styleUrls: ['./job-offers-map.component.scss']
})
export class JobOffersMapComponent implements OnInit {

  @Input() private jobOffers: JobOffer[];

  constructor() { }

  ngOnInit() {
  }

}
