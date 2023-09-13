import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';

@Component({
  selector: 'app-formulario12',
  templateUrl: './formulario12.component.html',
  styleUrls: ['./formulario12.component.css']
})
export class Formulario12Component implements OnInit {
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
      director: [Menssage.empty, Validators.compose([Validators.required])],
      Sponsor: [Menssage.empty, Validators.compose([Validators.required])],
      HomeGroup: [Menssage.empty, Validators.compose([Validators.required])],
      Meetings90: [Menssage.empty, Validators.compose([Validators.required])],
      ProgramDuesPaid: [Menssage.empty, Validators.compose([Validators.required])],
      Employment: [Menssage.empty, Validators.compose([Validators.required])],
      CompletedAllSteps: [Menssage.empty, Validators.compose([Validators.required])],
      Commitment: [Menssage.empty, Validators.compose([Validators.required])],
      Leadership: [Menssage.empty, Validators.compose([Validators.required])],
      ReciteStep1: [Menssage.empty, Validators.compose([Validators.required])],
      ReciteStep4: [Menssage.empty, Validators.compose([Validators.required])],
      ReciteStep10: [Menssage.empty, Validators.compose([Validators.required])],
      ReciteStep12: [Menssage.empty, Validators.compose([Validators.required])],
      ExplainSponsorship: [Menssage.empty, Validators.compose([Validators.required])],
      ExplainServiceCommitment: [Menssage.empty, Validators.compose([Validators.required])],

      SponsorName2: [Menssage.empty, Validators.compose([Validators.required])],
      HomeGroupName2: [Menssage.empty, Validators.compose([Validators.required])],
      MeetingSheet: [Menssage.empty, Validators.compose([Validators.required])],
      ProgramBalance: [Menssage.empty, Validators.compose([Validators.required])],
      EmployerName: [Menssage.empty, Validators.compose([Validators.required])],
      CurrentStep: [Menssage.empty, Validators.compose([Validators.required])],
      TypeOfCommitment: [Menssage.empty, Validators.compose([Validators.required])],
      WhatDoTheyDo: [Menssage.empty, Validators.compose([Validators.required])],
      ExplainStep1: [Menssage.empty, Validators.compose([Validators.required])],
      ExplainStep4: [Menssage.empty, Validators.compose([Validators.required])],
      ExplainStep10: [Menssage.empty, Validators.compose([Validators.required])],
      ExplainStep12: [Menssage.empty, Validators.compose([Validators.required])],
      acept1: [Menssage.empty, Validators.compose([Validators.required])],
      acept2: [Menssage.empty, Validators.compose([Validators.required])],
      acept3: [Menssage.empty, Validators.compose([Validators.required])],

    })
  }
  saveData(item: any){
    console.log(this.form);
    
  }
}
