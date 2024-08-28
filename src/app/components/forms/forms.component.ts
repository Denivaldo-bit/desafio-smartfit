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

  results = [];
  formGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {}


  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data=> console.log(data));
    this.formGroup = this.formBuilder.group ({
      hour: '',
      showClosed: false
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value)
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
