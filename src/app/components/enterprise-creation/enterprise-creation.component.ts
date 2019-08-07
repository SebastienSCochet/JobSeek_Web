import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COUNTRIES} from '../../model/constants';
import {Enterprise} from '../../model/enterprise';
import {Address} from '../../model/address';
import {EnterprisesService} from '../../services/enterprises.service';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-enterprise-creation',
  templateUrl: './enterprise-creation.component.html',
  styleUrls: ['./enterprise-creation.component.scss']
})
export class EnterpriseCreationComponent implements OnInit {
  enterpriseForm: FormGroup;
  countries = COUNTRIES;
  file: File;
  message: string;
  successMessage: string;
  enterprise = new Enterprise();
  @Output() onEnterpriseCreated = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private enterprisesService: EnterprisesService,
              private imagesService: ImagesService) {
    this.enterprise = new Enterprise();
    this.enterprise.address = new Address();

    this.enterpriseForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.maxLength(100)],
      description : ['', [Validators.required, Validators.maxLength(500)]],
      logoUrl : ['', Validators.required],
      street : ['', Validators.required],
      number : ['', Validators.required],
      postalCode : ['', Validators.required],
      city : ['', Validators.required],
      country : ['', Validators.required]
    });
  }

  ngOnInit() {}

  create() {
    if (this.file.type.split('/')[0] !== 'image') {
      this.message = '<div class="alert alert-danger">Le type de fichier ne correspond pas.</div>';
      return;
    }

    const ext = this.file.type.split('/')[1];
    const path = `logo/${this.name.value}-${Date.now()}.${ext}`;
    const customMetadata = {
      app: 'JobSeek',
      enterprise: this.enterprise.name
    };

    this.message = '<div class="alert alert-info">Veuillez patienter...</div>';

    this.imagesService.uploadToStorage(path, this.file, customMetadata).then(
      () => {
        this.imagesService.getDownloadFromStorage(path).subscribe((url) => {
          this.enterprise.name = this.name.value;
          this.enterprise.description = this.description.value;
          this.enterprise.logoUrl = this.logoUrl.value;
          this.enterprise.address = new Address();
          this.enterprise.address.street = this.street.value;
          this.enterprise.address.number = this.number.value;
          this.enterprise.address.city = this.city.value;
          this.enterprise.address.postalCode = this.postalCode.value;
          this.enterprise.address.country = this.country.value;
          this.enterprise.logoUrl = path;
          this.enterprisesService.save(this.enterprise).subscribe(e => {
            this.enterprise = e;
            this.onEnterpriseCreated.emit(e);
            this.enterpriseForm.reset();
            this.successMessage = '<div class="alert alert-info">L\'entreprise a bien été référencée.</div>';
          });
          this.message = '';

        });
      }
    ).catch(() => this.message = 'Une erreur est survenue pendant le téléchargement.');
  }

  setFile(event: FileList) {
    this.file = event.item(0);
  }

  get name() {
    return this.enterpriseForm.get('name');
  }

  get description() {
    return this.enterpriseForm.get('description');
  }

  get logoUrl() {
    return this.enterpriseForm.get('logoUrl');
  }

  get street() {
    return this.enterpriseForm.get('street');
  }

  get number() {
    return this.enterpriseForm.get('number');
  }

  get postalCode() {
    return this.enterpriseForm.get('postalCode');
  }

  get city() {
    return this.enterpriseForm.get('city');
  }

  get country() {
    return this.enterpriseForm.get('country');
  }
}
