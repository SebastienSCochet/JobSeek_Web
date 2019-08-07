import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Enterprise} from '../../model/enterprise';
import {EnterprisesService} from '../../services/enterprises.service';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-enterprise-selection',
  templateUrl: './enterprise-selection.component.html',
  styleUrls: ['./enterprise-selection.component.scss']
})
export class EnterpriseSelectionComponent implements OnInit {

  enterpriseNameSearch: string;
  enterprises: Enterprise[];
  config = {
    class: '',
    placeholder: '',
    max: 5,
    sourceField: ['name']
  };
  logoUrl: string;
  selectedEnterprise: Enterprise;
  enterpriseCreationVisible = false;
  @Output() onEnterpriseSelected = new EventEmitter();
  @Input() inputTouched: boolean;

  constructor(private enterprisesService: EnterprisesService,
              private imagesService: ImagesService) {
  }

  ngOnInit() {
    this.getEnterprises();
  }

  getEnterprises() {
    this.enterprisesService.findAll(this.enterpriseNameSearch).subscribe(e => this.enterprises = e );
  }

  showEnterprise($event) {
    this.selectedEnterprise = $event;
    this.imagesService.getDownloadFromStorage(this.selectedEnterprise.logoUrl).subscribe(url => this.logoUrl = url);
    this.onEnterpriseSelected.emit(this.selectedEnterprise);
  }

  showCreationEnterprise() {
    this.enterpriseCreationVisible = !this.enterpriseCreationVisible;
  }


  setSelectedEnterprise($event) { // $event : Enterprise
    this.selectedEnterprise = $event;
    this.enterpriseCreationVisible = false;
    this.onEnterpriseSelected.emit(this.selectedEnterprise);
  }
}
