import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.css']
})
export class Formulario4Component implements OnInit {
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
    })
  }
  saveData(item: any){
    console.log(this.form);
    
  }
}
