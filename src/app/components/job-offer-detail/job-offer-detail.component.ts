import { Component, OnInit } from '@angular/core';
import {JobOffersService} from '../../services/job-offers.service';
import {JobOffer} from '../../model/job-offer';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from "../../services/users.service";
import {Role} from "../../model/role";

@Component({
  selector: 'app-job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.scss']
})
export class JobOfferDetailComponent implements OnInit {
  private jobOffer: JobOffer;
  isAdmin: boolean;

  constructor(private jobOffersService: JobOffersService,
              private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getOffer();
    this.usersService.getConnectedUser().subscribe(u => this.isAdmin = u.role === Role.ADMIN );
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
