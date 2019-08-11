import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Enterprise} from '../../model/enterprise';
import {EnterprisesService} from '../../service/enterprises.service';
import {ImagesService} from '../../service/images.service';

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

  /**
   * Get the enterprises of the database and set that
   */
  getEnterprises() {
    this.enterprisesService.findAll(this.enterpriseNameSearch).subscribe(e => this.enterprises = e );
  }

  /**
   * This method allow to show enterprise information by setting the enterprise object (triggered by child component)
   * @param $event Enterprise to show
   */
  showEnterprise($event) {
    this.selectedEnterprise = $event;
    this.imagesService.getDownloadFromStorage(this.selectedEnterprise.logoUrl).subscribe(url => this.logoUrl = url);
    this.onEnterpriseSelected.emit(this.selectedEnterprise);
  }

  /**
   * Show/hide the creation enterprise component by editing the boolean
   */
  showCreationEnterprise() {
    this.enterpriseCreationVisible = !this.enterpriseCreationVisible;
  }

  /**
   * Set the selected enterprise and hide the creation component. (can be show again next)
   * Then emit the selected enterprise to the parent component to be set as the new enterprise of the job offer
   * @param $event : Enterprise
   */
  setSelectedEnterprise($event) {
    this.selectedEnterprise = $event;
    this.enterpriseCreationVisible = false;
    this.onEnterpriseSelected.emit(this.selectedEnterprise);
  }
}
