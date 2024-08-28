import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { GetUnitsService } from '../../services/get-units.services';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsComponent, ReactiveFormsModule, HeaderComponent, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent implements OnInit {

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {}


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group ({
      hour: '',
      showClosed: true
    })
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit(): void {
    if(!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true)
    } else {
      this.filteredResults = this.results;
    } 
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
