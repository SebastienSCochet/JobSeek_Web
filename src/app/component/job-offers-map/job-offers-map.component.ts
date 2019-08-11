import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from '../../model/job-offer';
import {Router} from '@angular/router';
import {DEFAULT_COORDINATE} from '../../constants';

@Component({
  selector: 'app-job-offers-map',
  templateUrl: './job-offers-map.component.html',
  styleUrls: ['./job-offers-map.component.scss']
})
export class JobOffersMapComponent implements OnInit {

  @Input() jobOffers: JobOffer[];
  lat = DEFAULT_COORDINATE.latitude;
  lng = DEFAULT_COORDINATE.longitude;
  zoom = 10;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  /**
   * Method called when the user click on a marker
   * @param idJobOffer : selected job offer id
   */
  viewDetail(idJobOffer: number) {
    this.router.navigate(['/job-offers', idJobOffer]);
  }
}
