import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from '../../model/job-offer';
import {JobOffersService} from '../../services/job-offers.service';
import {Router} from "@angular/router";
import {Preference} from "../../model/preference";
import {Observable} from "rxjs";

@Component({
  selector: 'app-job-offers-grid',
  templateUrl: './job-offers-grid.component.html',
  styleUrls: ['./job-offers-grid.component.scss']
})
export class JobOffersGridComponent implements OnInit {

  @Input() private jobOffers: JobOffer[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detail(idJobOffer: number) {
    this.router.navigate([`/job-offers/${idJobOffer}`]);
  }
}
