import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from '../../model/job-offer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-offers-grid',
  templateUrl: './job-offers-grid.component.html',
  styleUrls: ['./job-offers-grid.component.scss']
})
export class JobOffersGridComponent implements OnInit {

  @Input() jobOffers: JobOffer[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detail(idJobOffer: number) {
    this.router.navigate([`/job-offers/${idJobOffer}`]);
  }
}
