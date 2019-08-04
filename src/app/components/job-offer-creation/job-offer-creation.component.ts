import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoriesService} from '../../services/categories.service';
import {ContractType} from '../../enumeration/contract-type';

@Component({
  selector: 'app-job-offer-creation',
  templateUrl: './job-offer-creation.component.html',
  styleUrls: ['./job-offer-creation.component.scss']
})
export class JobOfferCreationComponent implements OnInit {
  jobCreationForm: FormGroup;
  categories: Category[];
  contractTypes = [ContractType.HALFTIME, ContractType.FULLTIME]
  longitude = 5.5796662;
  latitude = 50.6325574;
  markerLongitude = this.longitude;
  markerLatitude = this.latitude;
  zoom = 10;

  constructor(private formBuilder: FormBuilder,
              private categoriesService: CategoriesService) {
    this.jobCreationForm = formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      contractType: ['', Validators.required],
      contact: ['', Validators.required],
      place: ['', Validators.required],
      salaryMin: ['', [Validators.required, Validators.min(0)]],
      salaryMax: ['', [Validators.required, Validators.min(0)]],
      enterprise: ['', Validators.required]
  });
  }

  ngOnInit() {
    this.categoriesService.findAll().subscribe(c => { this.categories = c; });
  }

  onMapClick($event) {
    this.markerLatitude = $event.coords.lat;
    this.markerLongitude = $event.coords.lng;
  }

  create() {

  }

  get description() {
    return this.jobCreationForm.get('description');
  }

  insert(tagType: string) {
    let tagString;

    switch (tagType) {
      case 'bold' : tagString = '<b></b>'; break;
      case 'italic' : tagString = '<i></i>'; break;
      case 'underline' : tagString = '<u></u>'; break;
      case 'link' : tagString = '<a href=""></a>'; break;
      case 'header1' : tagString = '<h1></h1>'; break;
      case 'header2' : tagString = '<h2></h2>'; break;
      case 'header3' : tagString = '<h3></h3>'; break;
    }

    this.description.setValue(this.description.value ? this.description.value + tagString : tagString);
  }

}
