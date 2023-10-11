import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-formulario11',
  templateUrl: './formulario11.component.html',
  styleUrls: ['./formulario11.component.css']
})
export class Formulario11Component implements OnInit {
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public picker1: any;
  public picker2: any
  public menuItemsStore: any = [];
  public menuItemsStoreTwo: any = [];
  public usersData: any;
  public usersDataForm: any = [];
  public customerDetail: any = [];
  public disabled = true
  @Output() questionResult10: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private myFormBuilder: FormBuilder,
    private localStore: LocalstoreService,
    private _https:AuthService,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)}

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
      anySteps: [Menssage.empty, Validators.compose([Validators.required])],
      currentStep: [Menssage.empty, Validators.compose([Validators.required])],
      commentsNotes: [Menssage.empty, Validators.compose([Validators.required])],
      chooseDateOne: [Menssage.empty, Validators.compose([Validators.required])],
      directorOne: [Menssage.empty, Validators.compose([Validators.required])],
      commitmentOne: [Menssage.empty, Validators.compose([Validators.required])],
      typeCommitmentOne: [Menssage.empty, Validators.compose([Validators.required])],
      meetingOne: [Menssage.empty, Validators.compose([Validators.required])],
      programDuesPaidOne: [Menssage.empty, Validators.compose([Validators.required])],
      programBalanceOne: [Menssage.empty, Validators.compose([Validators.required])],
      completedStepOne: [Menssage.empty, Validators.compose([Validators.required])],
      currentStepOne: [Menssage.empty, Validators.compose([Validators.required])],
      commentsNotesOne: [Menssage.empty, Validators.compose([Validators.required])],
      usersClientId: [this.usersData.user.id, Validators.compose([Validators.required])],
    })
    this.getPhaseUpProgressTracking(this.usersData.user.id)
  }
  saveData(item: any){
    console.log(this.form);
    if (this.menuItemsStore.length == 0) {
      this.createPhaseUpProgressTracking(item)
    }
    if (this.menuItemsStoreTwo.length == 0) {
      this.createPhaseUpProgressTrackingTwo(item)
    }
  }

  disablePhaseUpProgressTracking(item: any){
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
    this.form.controls['anySteps'].disable()
    this.form.controls['currentStep'].disable()
    this.form.controls['commentsNotes'].disable()

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
    this.form.controls['anySteps'].setValue(item.anySteps)
    this.form.controls['currentStep'].setValue(item.programBalance)
    this.form.controls['commentsNotes'].setValue(item.programBalance)
    this.disabled = false
  }

  createPhaseUpProgressTracking(item: any){
    this.alert.loading();
    this._https.createPhaseUpProgressTracking(item).then((resulta: any)=>{
      this.getPhaseUpProgressTracking(this.usersData.user.id)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getPhaseUpProgressTracking(item: number){
    this.alert.loading();
    this._https.getPhaseUpProgressTracking(item).then((resulta: any)=>{
      this.menuItemsStore = resulta.data
      this.getPhaseUpProgressTrackingTwo(this.usersData.user.id)
      if (this.menuItemsStore.length != 0) {
        this.disablePhaseUpProgressTracking(resulta.data)
        this.questionResult10.emit(true)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  disablePhaseUpProgressTrackingTwo(item: any){

    this.form.controls['chooseDateOne'].disable()
    this.form.controls['directorOne'].disable()
    this.form.controls['commitmentOne'].disable()
    this.form.controls['typeCommitmentOne'].disable()
    this.form.controls['programDuesPaidOne'].disable()
    this.form.controls['programBalanceOne'].disable()
    this.form.controls['completedStepOne'].disable()
    this.form.controls['currentStepOne'].disable()
    this.form.controls['commentsNotesOne'].disable()
    this.form.controls['meetingOne'].disable()
    
    this.form.controls['chooseDateOne'].setValue(item.chooseDate)
    this.form.controls['directorOne'].setValue(item.director)
    this.form.controls['meetingOne'].setValue(item.meeting)
    this.form.controls['commitmentOne'].setValue(item.commitment)
    this.form.controls['typeCommitmentOne'].setValue(item.typeCommitment)
    this.form.controls['programDuesPaidOne'].setValue(item.programDuesPaid)
    this.form.controls['programBalanceOne'].setValue(item.programBalance)
    this.form.controls['completedStepOne'].setValue(item.completedStep)
    this.form.controls['currentStepOne'].setValue(item.currentStep)
    this.form.controls['commentsNotesOne'].setValue(item.commentsNotes)
  }

  createPhaseUpProgressTrackingTwo(item: any){
    const data = {
      chooseDate: item.chooseDateOne,
      director: item.directorOne,
      commitment: item.commitmentOne,
      typeCommitment: item.typeCommitmentOne,
      meeting: item.meetingOne,
      programDuesPaid: item.programDuesPaidOne,
      programBalance: item.programBalanceOne,
      completedStep: item.completedStepOne,
      currentStep: item.currentStepOne,
      commentsNotes: item.commentsNotesOne,
      usersClientId: item.usersClientId
    }
    this.alert.loading();
    this._https.createPhaseUpProgressTrackingTwo(data).then((resulta: any)=>{
      this.getPhaseUpProgressTrackingTwo(this.usersData.user.id)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getPhaseUpProgressTrackingTwo(item: number){
    this.alert.loading();
    this._https.getPhaseUpProgressTrackingTwo(item).then((resulta: any)=>{
      this.menuItemsStoreTwo = resulta.data
      if (this.menuItemsStoreTwo.length != 0) {
        this.disablePhaseUpProgressTrackingTwo(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

}
