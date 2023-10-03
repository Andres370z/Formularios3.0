import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import {SignaturePad} from 'angular2-signaturepad'
@Component({
  selector: 'app-formulario9',
  templateUrl: './formulario9.component.html',
  styleUrls: ['./formulario9.component.css']
})
export class Formulario9Component implements OnInit {
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public signatureOpt: Object = {
    'minWidth': 5,
    'canvasWidth': '100%',
    'canvasHeight': 200

  }
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
    
    })
  }
  
  saveData(item: any){
    console.log(this.form);
    
  }
  drawComplete(){

  }
  drawStart(){

  }

}
