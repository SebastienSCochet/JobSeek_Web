import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../model/enterprise';
import {EnterprisesService} from '../../services/enterprises.service';

@Component({
  selector: 'app-enterprise-selection',
  templateUrl: './enterprise-selection.component.html',
  styleUrls: ['./enterprise-selection.component.scss']
})
export class EnterpriseSelectionComponent implements OnInit {

  private enterprises: Enterprise[];
  private config = {
    class: 'form-control',
    max: 5,
    placeholder: 'Nom de l\'entreprise',
    sourceField: ['name']
  };
  private enterpriseNameSearch: string;

  constructor(private enterprisesService: EnterprisesService) { }

  ngOnInit() {
    this.getEnterprises();
  }

  getEnterprises() {
    this.enterprisesService.findAll(this.enterpriseNameSearch).subscribe(e => this.enterprises = e);
  }

}
