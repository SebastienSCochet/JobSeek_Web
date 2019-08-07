import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from '../../model/job-offer';
import {Router} from '@angular/router';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-job-offers-grid',
  templateUrl: './job-offers-grid.component.html',
  styleUrls: ['./job-offers-grid.component.scss']
})
export class JobOffersGridComponent implements OnInit {

  @Input() jobOffers: JobOffer[];

  constructor() { }

  ngOnInit() {
  }
}
