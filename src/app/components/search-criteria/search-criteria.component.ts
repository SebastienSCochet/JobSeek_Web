import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category';
import {CategoriesService} from '../../services/categories.service';
import {Preference} from '../../model/preference';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {

  private categories: Category[];
  private criteriaForm: FormGroup;
  @Input() private userPreferenceObs: Observable<Preference>;
  @Output() searchEvent = new EventEmitter();

  constructor(private categoriesService: CategoriesService,
              private fb: FormBuilder
              ) {}

  ngOnInit() {
    this.categoriesService.findAll().subscribe(allCategories => {
      this.categories = allCategories;
      this.userPreferenceObs.subscribe(userPreference => {
        this.criteriaForm = this.fb.group({
          keyword: [ '' ],
          enterprise: [ '' ],
          distance: [ userPreference.distanceMax, [
            Validators.required
          ]],
          salary: [ userPreference.salaryMin, [
            Validators.required
          ]],
          category: [ this.categories.find(x => x.label === userPreference.category.label),
            Validators.required
          ]
        });
      });
    });
  }

  get category() {
    return this.criteriaForm.get('category');
  }
  get enterprise() {
    return this.criteriaForm.get('enterprise');
  }
  get keyword() {
    return this.criteriaForm.get('keyword');
  }
  get distance() {
    return this.criteriaForm.get('distance');
  }
  get salary() {
    return this.criteriaForm.get('salary');
  }

  search() {
    console.log(this.keyword.value);
    this.searchEvent.emit(this.keyword.value);
  }
}
