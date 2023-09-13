import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario11',
  templateUrl: './formulario11.component.html',
  styleUrls: ['./formulario11.component.css']
})
export class Formulario11Component implements OnInit {
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
      clientName: [Menssage.empty, Validators.compose([Validators.required])],
      Unit: [Menssage.empty, Validators.compose([Validators.required])],
      date: [Menssage.empty, Validators.compose([Validators.required])],
      date2: [Menssage.empty, Validators.compose([Validators.required])],
      director: [Menssage.empty, Validators.compose([Validators.required])],
      Sponsor: [Menssage.empty, Validators.compose([Validators.required])],
      HomeGroup: [Menssage.empty, Validators.compose([Validators.required])],
      TMeetings: [Menssage.empty, Validators.compose([Validators.required])],
      Program: [Menssage.empty, Validators.compose([Validators.required])],
      Employment: [Menssage.empty, Validators.compose([Validators.required])],
      Steps: [Menssage.empty, Validators.compose([Validators.required])],
      SponsorName: [Menssage.empty, Validators.compose([Validators.required])],
      HomeGroupName: [Menssage.empty, Validators.compose([Validators.required])],
      MeetingSheet: [Menssage.empty, Validators.compose([Validators.required])],
      EmploymentName: [Menssage.empty, Validators.compose([Validators.required])],
      CurrentStep: [Menssage.empty, Validators.compose([Validators.required])],
      clientName2: [Menssage.empty, Validators.compose([Validators.required])],
      Commitment: [Menssage.empty, Validators.compose([Validators.required])],
      Commitment2: [Menssage.empty, Validators.compose([Validators.required])],
      TMeetingsTwo: [Menssage.empty, Validators.compose([Validators.required])],
      Paid: [Menssage.empty, Validators.compose([Validators.required])],
      StepFive: [Menssage.empty, Validators.compose([Validators.required])],
      ProgramBalance2: [Menssage.empty, Validators.compose([Validators.required])],
      CurrentStep2: [Menssage.empty, Validators.compose([Validators.required])],

    })
  }
  saveData(item: any){
    console.log(this.form);
    
  }


}
