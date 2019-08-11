import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoriesService} from '../../service/categories.service';
import {ContractType} from '../../enumeration/contract-type';
import {JobOffersService} from '../../service/job-offers.service';
import {JobOffer} from '../../model/job-offer';
import {Router} from '@angular/router';
import {Enterprise} from '../../model/enterprise';
import {Coordinate} from '../../model/coordinate';
import {Util} from '../../model/util';
import {DEFAULT_COORDINATE} from '../../constants';

@Component({
  selector: 'app-job-offer-creation',
  templateUrl: './job-offer-creation.component.html',
  styleUrls: ['./job-offer-creation.component.scss']
})
export class JobOfferCreationComponent implements OnInit {
  jobCreationForm: FormGroup;
  categories: Category[];
  contractTypes: ContractType[] = [ContractType.HALFTIME, ContractType.FULLTIME];
  longitude = DEFAULT_COORDINATE.longitude;
  latitude = DEFAULT_COORDINATE.latitude;
  markerLongitude = this.longitude;
  markerLatitude = this.latitude;
  zoom = 10;
  jobOffer = new JobOffer();
  enterprise = new Enterprise();

  constructor(private formBuilder: FormBuilder,
              private categoriesService: CategoriesService,
              private jobOffersService: JobOffersService,
              private router: Router) {
    this.jobCreationForm = formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      contractType: [this.contractTypes[0], Validators.required],
      contact: ['', Validators.required],
      place: ['', Validators.required],
      salaryMin: ['', [Validators.required, Validators.min(0)]],
      salaryMax: ['', [Validators.required, Validators.min(0)]],
  });
  }

  ngOnInit() {
    this.categoriesService.findAll().subscribe(c => { this.categories = c; });
  }

  onMapClick($event) {
    this.markerLatitude = $event.coords.lat;
    this.markerLongitude = $event.coords.lng;
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

  setEnterprise($event) {
    console.log($event);
    this.enterprise = $event;
  }

  /**
   * Create the job offer with the form data then redirect to job seek component
   */
  create() {
    this.jobOffer.title = this.title.value;
    this.jobOffer.salaryMin = this.salaryMin.value;
    this.jobOffer.salaryMax = this.salaryMax.value;
    this.jobOffer.description = this.description.value;
    this.jobOffer.place = this.place.value;
    this.jobOffer.contact = this.contact.value;
    this.jobOffer.coordinate = new Coordinate();
    this.jobOffer.coordinate.longitude = this.markerLongitude;
    this.jobOffer.coordinate.latitude = this.markerLatitude;
    this.jobOffer.enterprise = this.enterprise;
    this.jobOffer.category = this.category.value;
    this.jobOffer.contractType = this.contractType.value;
    this.jobOffersService.create(this.jobOffer).subscribe(
      () => this.router.navigate(['/job-offers'])
    );
  }

  /**
   * Form elements
   */

  get title() {
    return this.jobCreationForm.get('title');
  }
  get category() {
    return this.jobCreationForm.get('category');
  }
  get description() {
    return this.jobCreationForm.get('description');
  }
  get contractType() {
    return this.jobCreationForm.get('contractType');
  }
  get contact() {
    return this.jobCreationForm.get('contact');
  }
  get place() {
    return this.jobCreationForm.get('place');
  }
  get salaryMin() {
    return this.jobCreationForm.get('salaryMin');
  }
  get salaryMax() {
    return this.jobCreationForm.get('salaryMax');
  }

}
