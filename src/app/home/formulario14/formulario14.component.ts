import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-formulario14',
  templateUrl: './formulario14.component.html',
  styleUrls: ['./formulario14.component.css']
})
export class Formulario14Component implements OnInit {

  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public menuItemsStore: any = [];
  public menuItemsStoreTwo: any = [];
  public usersData: any;
  public usersDataForm: any = [];
  public customerDetail: any = [];
  public disabled = true
  public selectUsers:any;
  public id: number;
  public idUsers:any;
  constructor(
    private myFormBuilder: FormBuilder,
    private localStore: LocalstoreService,
    private _https:AuthService,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)
      this.selectUsers = this.localStore.getItem(Menssage.selectUsers)
      this.idUsers = this.selectUsers ? this.selectUsers : this.usersData.user}

  ngOnInit(): void {
    this.initial()
  }
  initial(){
    this.form = this.myFormBuilder.group({
      clientName: [Menssage.empty, Validators.compose([Validators.required])],
      unit: [Menssage.empty, Validators.compose([Validators.required])],
      chooseDate: [Menssage.empty, Validators.compose([Validators.required])],
      director: [Menssage.empty, Validators.compose([Validators.required])],
      sponsor: [Menssage.empty, Validators.compose([Validators.required])],
      sponsorName: [Menssage.empty, Validators.compose([Validators.required])],
      homeGroup: [Menssage.empty, Validators.compose([Validators.required])],
      homeGroupName: [Menssage.empty, Validators.compose([Validators.required])],
      meeting: [Menssage.empty, Validators.compose([Validators.required])],
      meetingSheet: [Menssage.empty, Validators.compose([Validators.required])],
      programDuesPaid: [Menssage.empty, Validators.compose([Validators.required])],
      programBalance: [Menssage.empty, Validators.compose([Validators.required])],
      employment: [Menssage.empty, Validators.compose([Validators.required])],
      employmentName: [Menssage.empty, Validators.compose([Validators.required])],
      completedSteps: [Menssage.empty, Validators.compose([Validators.required])],
      currentStep: [Menssage.empty, Validators.compose([Validators.required])],
      commitment: [Menssage.empty, Validators.compose([Validators.required])],
      typeCommitment: [Menssage.empty, Validators.compose([Validators.required])],

      leadership: [Menssage.empty, Validators.compose([Validators.required])],
      whatDo: [Menssage.empty, Validators.compose([Validators.required])],
      futureGoals: [Menssage.empty, Validators.compose([Validators.required])],
      reciteStep: [Menssage.empty, Validators.compose([Validators.required])],
      explainStep: [Menssage.empty, Validators.compose([Validators.required])],
      reciteStepFour: [Menssage.empty, Validators.compose([Validators.required])],
      explainStepFour: [Menssage.empty, Validators.compose([Validators.required])],
      reciteStepTen: [Menssage.empty, Validators.compose([Validators.required])],
      explainStepTen: [Menssage.empty, Validators.compose([Validators.required])],
      reciteStepTwelve: [Menssage.empty, Validators.compose([Validators.required])],
      explainStepTwelve: [Menssage.empty, Validators.compose([Validators.required])],
      reciteTwelveMajor: [Menssage.empty, Validators.compose([Validators.required])],
      explainSponsorship: [Menssage.empty, Validators.compose([Validators.required])],
      explainserviceCommitment: [Menssage.empty, Validators.compose([Validators.required])],
      moveOutPlan: [Menssage.empty, Validators.compose([Validators.required])],
      directorComments: [Menssage.empty, Validators.compose([Validators.required])],
      graduteProgram: [Menssage.empty, Validators.compose([Validators.required])],
      dateCompletion: [Menssage.empty, Validators.compose([Validators.required])],
      directorSignature: [Menssage.empty, Validators.compose([Validators.required])],
      usersClientId: [this.selectUsers.id, Validators.compose([Validators.required])],
      clientsProyectsId:[this.usersData.user.clientsProyectsId]
    })
    this.getPhaseUpProgressTrackingThree(this.idUsers.id)
  }
  saveData(item: any){
    console.log(this.form);
    if (this.menuItemsStore.length == 1) {
      this.createPhaseUpProgressTrackingThree(item)
    }
  }

  disablePhaseUpProgressTrackingThree(item: any){
    this.form.controls['clientName'].disable()
    this.form.controls['unit'].disable()
    this.form.controls['chooseDate'].disable()
    this.form.controls['director'].disable()
    this.form.controls['sponsor'].disable()
    this.form.controls['sponsorName'].disable()
    this.form.controls['homeGroup'].disable()
    this.form.controls['homeGroupName'].disable()
    this.form.controls['meeting'].disable()
    this.form.controls['meetingSheet'].disable()
    this.form.controls['programDuesPaid'].disable()
    this.form.controls['programBalance'].disable()
    this.form.controls['employment'].disable()
    this.form.controls['employmentName'].disable()
    this.form.controls['completedSteps'].disable()
    this.form.controls['currentStep'].disable()
    this.form.controls['commitment'].disable()
    this.form.controls['typeCommitment'].disable()
    this.form.controls['leadership'].disable()
    this.form.controls['whatDo'].disable()
    this.form.controls['reciteStep'].disable()
    this.form.controls['explainStep'].disable()
    this.form.controls['reciteStepFour'].disable()
    this.form.controls['explainStepFour'].disable()
    this.form.controls['reciteStepTen'].disable()
    this.form.controls['explainStepTen'].disable()
    this.form.controls['reciteStepTwelve'].disable()
    this.form.controls['explainStepTwelve'].disable()
    this.form.controls['reciteTwelveMajor'].disable()
    this.form.controls['explainSponsorship'].disable()
    this.form.controls['explainserviceCommitment'].disable()
    this.form.controls['moveOutPlan'].disable()
    this.form.controls['directorComments'].disable()
    this.form.controls['graduteProgram'].disable()
    this.form.controls['dateCompletion'].disable()
    this.form.controls['directorSignature'].disable()
    this.form.controls['moveOutPlan'].disable()
    this.form.controls['futureGoals'].disable()
    
    this.form.controls['clientName'].setValue(item.clientName)
    this.form.controls['unit'].setValue(item.unit)
    this.form.controls['chooseDate'].setValue(item.chooseDate)
    this.form.controls['director'].setValue(item.director)
    this.form.controls['sponsor'].setValue(item.sponsor)
    this.form.controls['sponsorName'].setValue(item.sponsorName)
    this.form.controls['homeGroup'].setValue(item.homeGroup)
    this.form.controls['homeGroupName'].setValue(item.homeGroupName)
    this.form.controls['meeting'].setValue(item.meeting)
    this.form.controls['meetingSheet'].setValue(item.meetingSheet)
    this.form.controls['programDuesPaid'].setValue(item.programDuesPaid)
    this.form.controls['programBalance'].setValue(item.programBalance)
    this.form.controls['employment'].setValue(item.employment)
    this.form.controls['employmentName'].setValue(item.employmentName)
    this.form.controls['completedSteps'].setValue(item.completedSteps)
    this.form.controls['currentStep'].setValue(item.currentStep)
    this.form.controls['commitment'].setValue(item.commitment)
    this.form.controls['typeCommitment'].setValue(item.typeCommitment)
    this.form.controls['leadership'].setValue(item.leadership)
    this.form.controls['whatDo'].setValue(item.whatDo)
    this.form.controls['futureGoals'].setValue(item.futureGoals)
    this.form.controls['reciteStep'].setValue(item.reciteStep)
    this.form.controls['explainStep'].setValue(item.explainStep)
    this.form.controls['reciteStepFour'].setValue(item.reciteStepFour)
    this.form.controls['explainStepFour'].setValue(item.explainStepFour)
    this.form.controls['reciteStepTen'].setValue(item.reciteStepTen)
    this.form.controls['explainStepTen'].setValue(item.explainStepTen)
    this.form.controls['reciteStepTwelve'].setValue(item.reciteStepTwelve)
    this.form.controls['explainStepTwelve'].setValue(item.explainStepTwelve)
    this.form.controls['reciteTwelveMajor'].setValue(item.reciteTwelveMajor)
    this.form.controls['explainSponsorship'].setValue(item.explainSponsorship)
    this.form.controls['explainserviceCommitment'].setValue(item.explainserviceCommitment)
    this.form.controls['moveOutPlan'].setValue(item.moveOutPlan)
    this.form.controls['directorComments'].setValue(item.directorComments)
    this.form.controls['graduteProgram'].setValue(item.graduteProgram)
    this.form.controls['directorSignature'].setValue(item.directorSignature)
    this.disabled = false
  }

  createPhaseUpProgressTrackingThree(item: any){
    this.alert.loading();
    this._https.createPhaseUpProgressTrackingThree(item).then((resulta: any)=>{
      this.getPhaseUpProgressTrackingThree(this.idUsers.id)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getPhaseUpProgressTrackingThree(item: number){
    this.alert.loading();
    this._https.getPhaseUpProgressTrackingThree(item).then((resulta: any)=>{
      this.menuItemsStore = resulta.data
      if (this.menuItemsStore.length == 2) {
        this.disablePhaseUpProgressTrackingThree(resulta.data[1])
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  signatureDirector(item: string) {
    console.log(item);
    this.form.controls['directorSignature'].setValue(item)
  }


}
