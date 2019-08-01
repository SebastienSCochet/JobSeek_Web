import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category';
import {CategoriesService} from '../../services/categories.service';
import {Preference} from '../../model/preference';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Search} from '../../model/search';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {

  private categories: Category[];
  @Input() private userPreferenceObs: Observable<Preference>;
  private userPreference: Preference;
  @Output() searchEvent = new EventEmitter();
  private criteriaForm: FormGroup;

  constructor(private categoriesService: CategoriesService,
              ) {
    this.criteriaForm = new FormGroup({
      keyword: new FormControl(''),
      enterprise: new FormControl(''),
      distance: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.categoriesService.findAll().subscribe(allCategories => {
      this.categories = allCategories;
      this.userPreferenceObs.subscribe(userPreference => {
        this.userPreference = userPreference;
        this.distance.setValue(userPreference.distanceMax);
        this.salary.setValue(userPreference.salaryMin);
        this.category.setValue(this.categories.find(x => x.label === userPreference.category.label));
        this.search();
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
    this.searchEvent.emit(new Search(this.keyword.value, this.enterprise.value, {
      idPreference: this.userPreference.idPreference,
      category: this.category.value,
      distanceMax: this.distance.value,
      salaryMin: this.salary.value
    }));
  }
}
