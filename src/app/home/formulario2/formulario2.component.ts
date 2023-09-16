import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  constructor(
    private myFormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  initial(){
    this.form = this.myFormBuilder.group({
      acept1: [Menssage.empty, Validators.compose([Validators.required])],
      acept2: [Menssage.empty, Validators.compose([Validators.required])],
      acept3: [Menssage.empty, Validators.compose([Validators.required])],
      acept4: [Menssage.empty, Validators.compose([Validators.required])],
      acept5: [Menssage.empty, Validators.compose([Validators.required])],
      acept6: [Menssage.empty, Validators.compose([Validators.required])],
      acept7: [Menssage.empty, Validators.compose([Validators.required])],
      acept8: [Menssage.empty, Validators.compose([Validators.required])],
      acept9: [Menssage.empty, Validators.compose([Validators.required])],
      acept10: [Menssage.empty, Validators.compose([Validators.required])],
      acept11: [Menssage.empty, Validators.compose([Validators.required])],
      acept12: [Menssage.empty, Validators.compose([Validators.required])],
      acept13: [Menssage.empty, Validators.compose([Validators.required])],
    })
  }
  saveData(item: any){
    console.log(this.form);
    
  }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
