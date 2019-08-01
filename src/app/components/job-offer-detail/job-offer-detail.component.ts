import { Component, OnInit } from '@angular/core';
import {JobOffersService} from '../../services/job-offers.service';
import {JobOffer} from '../../model/job-offer';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.scss']
})
export class JobOfferDetailComponent implements OnInit {
  private jobOffer: JobOffer;

  constructor(private jobOffersService: JobOffersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getOffer();
  }

  getOffer() {
    const id: number = +this.route.snapshot.paramMap.get('idJobOffer');
    this.jobOffersService.findOfferById(id).subscribe(offer => this.jobOffer = offer);
  }

  delete() {
    this.jobOffersService.deleteById(this.jobOffer.idJobOffer).subscribe(
      () => this.router.navigate(['/job-offers'])
    );
  }
}
