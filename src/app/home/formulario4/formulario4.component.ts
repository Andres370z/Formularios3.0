import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.css']
})
export class Formulario4Component implements OnInit {
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
      acept5: [Menssage.empty, Validators.compose([Validators.required])],
      acept6: [Menssage.empty, Validators.compose([Validators.required])],
    })
  }
  drawStart(){

  }
  drawComplete(){
    
  }
  saveData(item: any){
    console.log(this.form);
    
  }
}
