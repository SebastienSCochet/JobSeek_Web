import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../model/enterprise';
import {ActivatedRoute} from '@angular/router';
import {EnterprisesService} from '../../services/enterprises.service';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss']
})
export class EnterpriseDetailComponent implements OnInit {

  enterprise: Enterprise;
  logoUrl: string;

  constructor(private route: ActivatedRoute,
              private imagesService: ImagesService,
              private enterprisesService: EnterprisesService) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('idEnterprise');
    this.enterprisesService.findById(id).subscribe(enterprise => {
      this.enterprise = enterprise;
      this.imagesService.getDownloadFromStorage(this.enterprise.logoUrl).subscribe(
        url => this.logoUrl = url
      );
    });
  }

}
