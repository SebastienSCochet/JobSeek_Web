import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from "../../model/job-offer";
import {Router} from "@angular/router";
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-job-offer-box',
  templateUrl: './job-offer-box.component.html',
  styleUrls: ['./job-offer-box.component.scss']
})
export class JobOfferBoxComponent implements OnInit {

  @Input() offer: JobOffer;
  logoUrl: string;

  constructor(private imagesService: ImagesService, private router: Router) { }

  ngOnInit() {
    this.imagesService.getDownloadFromStorage(this.offer.enterprise.logoUrl).subscribe(
      url => this.logoUrl = url
    );
  }

  detail(idJobOffer: number) {
    this.router.navigate([`/job-offers/${idJobOffer}`]);
  }

}
