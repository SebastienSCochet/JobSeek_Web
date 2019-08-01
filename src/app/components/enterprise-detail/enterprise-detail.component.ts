import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../model/enterprise';
import {ActivatedRoute} from '@angular/router';
import {EnterprisesService} from '../../services/enterprises.service';

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss']
})
export class EnterpriseDetailComponent implements OnInit {

  enterprise: Enterprise;

  constructor(private route: ActivatedRoute,
              private enterprisesService: EnterprisesService) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('idEnterprise');
    this.enterprisesService.findById(id).subscribe(enterprise => this.enterprise = enterprise);
  }

}
