import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Ciudadano, Data } from '../../interfaces/data.interface';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  @Output()
  enviarData = new EventEmitter<number>();

  public cedula?: number;

  public myForm: FormGroup = this.fb.group({
    cedula: [, [Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
  });

  constructor(private fb: FormBuilder, private dtService: DataService) {}

  submit() {
    this.myForm.markAllAsTouched();
    this.cedula = Math.floor(this.myForm.value.cedula);
  
    //console.log(this.cedula);
    this.enviarData.emit(this.cedula);
  }
}
