import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario10',
  templateUrl: './formulario10.component.html',
  styleUrls: ['./formulario10.component.css']
})
export class Formulario10Component implements OnInit {
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
      residentName: [Menssage.empty, Validators.compose([Validators.required])],
      authorize: [Menssage.empty, Validators.compose([Validators.required])],
      date: [Menssage.empty, Validators.compose([Validators.required])],
      information: [Menssage.empty, Validators.compose([Validators.required])],
      Holding: [Menssage.empty, Validators.compose([Validators.required])],
      Address: [Menssage.empty, Validators.compose([Validators.required])],
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
