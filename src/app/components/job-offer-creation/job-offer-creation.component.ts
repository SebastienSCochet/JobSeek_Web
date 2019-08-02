import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-job-offer-creation',
  templateUrl: './job-offer-creation.component.html',
  styleUrls: ['./job-offer-creation.component.scss']
})
export class JobOfferCreationComponent implements OnInit {
  jobCreationForm: FormGroup;

  constructor() {
    this.jobCreationForm = new FormGroup({
      title: new FormControl(['', Validators.required]),
      description: new FormControl(['', Validators.required])
    });
  }

  ngOnInit() {
  }

}
