import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public picker1: any;
  public picker2: any
  constructor(
    private myFormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  initial(){
    this.form = this.myFormBuilder.group({
      date: [Menssage.empty, Validators.compose([Validators.required])],
      names: [Menssage.empty, Validators.compose([Validators.required])],
      phone: [Menssage.empty, Validators.compose([Validators.required])],
      birthdate: [Menssage.empty, Validators.compose([Validators.required])],
      dlNumber: [Menssage.empty, Validators.compose([Validators.required])],
      state: [Menssage.empty, Validators.compose([Validators.required])],
      expDate: [Menssage.empty, Validators.compose([Validators.required])],
      vehicleQuestion: [Menssage.empty, Validators.compose([Validators.required])],
      ifSo: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      licensPlate: [Menssage.empty, Validators.compose([Validators.required])],
      state2: [Menssage.empty, Validators.compose([Validators.required])],
      emergency: [Menssage.empty, Validators.compose([Validators.required])],
      relationship: [Menssage.empty, Validators.compose([Validators.required])],
      homePhone: [Menssage.empty, Validators.compose([Validators.required])],
      cellPhone: [Menssage.empty, Validators.compose([Validators.required])],
      emergency2: [Menssage.empty, Validators.compose([Validators.required])],
      relationship2: [Menssage.empty, Validators.compose([Validators.required])],
      homePhone2: [Menssage.empty, Validators.compose([Validators.required])],
      cellPhone2: [Menssage.empty, Validators.compose([Validators.required])],
      employers: [Menssage.empty, Validators.compose([Validators.required])],
      adress: [Menssage.empty, Validators.compose([Validators.required])],
      phoneEmploye: [Menssage.empty, Validators.compose([Validators.required])],
      superName: [Menssage.empty, Validators.compose([Validators.required])],
      statusQuestion: [Menssage.empty, Validators.compose([Validators.required])],
      childrenQuestion: [Menssage.empty, Validators.compose([Validators.required])],
      ifChildren: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      suicidalThoughts: [Menssage.empty, Validators.compose([Validators.required])],
      IfSoWhen0: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      Current: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      Arrested: [Menssage.empty, Validators.compose([Validators.required])],
      ifArrested: [Menssage.empty, Validators.compose([Validators.nullValidator])],

      ArrestedWhen: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      Convicted: [Menssage.empty, Validators.compose([Validators.required])],
      forWhat: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      sexOffender: [Menssage.empty, Validators.compose([Validators.required])],
      Probation: [Menssage.empty, Validators.compose([Validators.required])],
      StartendDate: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      OfficerName: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      Phone3: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      medications: [Menssage.empty, Validators.compose([Validators.required])],
      ifmedications: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      medicationsList: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      mentalHealth: [Menssage.empty, Validators.compose([Validators.required])],
      ifSowhat: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatment: [Menssage.empty, Validators.compose([Validators.required])],
      ifSowhen: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      ifSowhere: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      halfway: [Menssage.empty, Validators.compose([Validators.required])],
      ifSowhen2: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      ifSowhere2: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      choice: [Menssage.empty, Validators.compose([Validators.required])],
      lastUse: [Menssage.empty, Validators.compose([Validators.required])],
      Learn: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      Learn1: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      HowOften: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      MostImportantToday: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      HaveAnyGoals: [Menssage.empty, Validators.compose([Validators.nullValidator])],



    })
  }
  saveData(){
    console.log(this.form);
    
  }
}
