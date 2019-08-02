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
      salaryMax: ['', [Validators.required, Validators.min(0)]]
  });
  }

  ngOnInit() {
    this.categoriesService.findAll().subscribe(c => { this.categories = c; });
  }

  create() {

  }

}
