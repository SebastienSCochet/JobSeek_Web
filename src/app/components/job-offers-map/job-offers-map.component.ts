import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from '../../model/job-offer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-offers-map',
  templateUrl: './job-offers-map.component.html',
  styleUrls: ['./job-offers-map.component.scss']
})
export class JobOffersMapComponent implements OnInit {

  @Input() private jobOffers: JobOffer[];
  lat = 50.6325574;
  lng = 5.5796662;
  zoom = 10;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  viewDetail(idJobOffer: number) {
    this.router.navigate(['/job-offers', idJobOffer]);
  }
}
