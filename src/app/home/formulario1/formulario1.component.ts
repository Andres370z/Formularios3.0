import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  public form: FormGroup;
  public residentApplication: any = [];
  public emergencyContact:any= [];
  public employers:any= [];
  public medications:any= [];
  public treatment:any= [];
  public status:any= [];
  public selectedOption: any;
  public createForm: any;
  public picker1: any;
  public picker2: any
  public menuItems: any[] = [];
  public menuItemsStore: any[];
  public usersData: any;
  public customerDetail: any = [];
  public disabled = true
  public selectUsers:any;
  public idUsers:any;
  @Output() questionResult: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private myFormBuilder: FormBuilder,
    private localStore: LocalstoreService,
    private _https:AuthService,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)
      this.selectUsers = this.localStore.getItem(Menssage.selectUsers)
      this.idUsers = this.selectUsers ? this.selectUsers : this.usersData.user
      console.log(this.idUsers)
    }

  ngOnInit(): void {
    this.initial()
   
  }
  initial(){
    this.form = this.myFormBuilder.group({
      chooseDate: [Menssage.empty, Validators.compose([Validators.required])],
      clientName: [Menssage.empty, Validators.compose([Validators.required])],
      phone: [Menssage.empty, Validators.compose([Validators.required])],
      dateOfBirth: [Menssage.empty, Validators.compose([Validators.required])],
      dlNumber: [Menssage.empty, Validators.compose([Validators.required])],
      state: [Menssage.empty, Validators.compose([Validators.required])],
      expDate: [Menssage.empty, Validators.compose([Validators.required])],
      vehicleQuestion: [Menssage.empty, Validators.compose([Validators.required])],
      ifSo: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      licensPlate: [Menssage.empty, Validators.compose([Validators.required])],
      stateLicens: [Menssage.empty, Validators.compose([Validators.required])],
      emergencyContact: [Menssage.empty, Validators.compose([Validators.required])],
      relationship: [Menssage.empty, Validators.compose([Validators.required])],
      homePhone: [Menssage.empty, Validators.compose([Validators.required])],
      cellPhone: [Menssage.empty, Validators.compose([Validators.required])],
      emergencyContact2: [Menssage.empty, Validators.compose([Validators.required])],
      relationship2: [Menssage.empty, Validators.compose([Validators.required])],
      homePhone2: [Menssage.empty, Validators.compose([Validators.required])],
      cellPhone2: [Menssage.empty, Validators.compose([Validators.required])],
      employers: [Menssage.empty, Validators.compose([Validators.required])],
      adress: [Menssage.empty, Validators.compose([Validators.required])],
      phoneEmploye: [Menssage.empty, Validators.compose([Validators.required])],
      superName: [Menssage.empty, Validators.compose([Validators.required])],
      relationShipStatus: [Menssage.empty, Validators.compose([Validators.required])],
      statusChildren: [Menssage.empty, Validators.compose([Validators.required])],
      statusIfChildren: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusSuicidalThoughts: [Menssage.empty, Validators.compose([Validators.required])],
      statusIfSoWhen: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusCurrent: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusArrested: [Menssage.empty, Validators.compose([Validators.required])],
      statusIfArrested: [Menssage.empty, Validators.compose([Validators.nullValidator])],

      statusArrestedWhen: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusConvicted: [Menssage.empty, Validators.compose([Validators.required])],
      statusForWhat: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusSexOffender: [Menssage.empty, Validators.compose([Validators.required])],
      statusOnProbation: [Menssage.empty, Validators.compose([Validators.required])],
      statusStartDate: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusEndDate: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusOfficerName: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      statusPhone: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      takeMedications: [Menssage.empty, Validators.compose([Validators.required])],
      ifmedications: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      medicationsList: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      mentalHealth: [Menssage.empty, Validators.compose([Validators.required])],
      ifSowhat: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      beenTreatment: [Menssage.empty, Validators.compose([Validators.required])],
      treatmentIfSowhen: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentIfSowhere: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentHalfway: [Menssage.empty, Validators.compose([Validators.required])],
      treatmentIfSowhenOne: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentIfSowhereTwo: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentChoice: [Menssage.empty, Validators.compose([Validators.required])],
      treatmentLastUse: [Menssage.empty, Validators.compose([Validators.required])],
      treatmentLearnAnything: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentLearnAnythingOne: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentHowOften: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentMostImportantToday: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      treatmentHaveAnyGoals: [Menssage.empty, Validators.compose([Validators.nullValidator])],
      usersClientId: [this.idUsers.id],
      clientsProyectsId:[this.usersData.user.clientsProyectsId]
    })
    this.getResidentApplication(this.idUsers.id)
  }
  disableResidentApplication(item: any){
    this.form.controls['chooseDate'].disable()
    this.form.controls['clientName'].disable()
    this.form.controls['phone'].disable()
    this.form.controls['dateOfBirth'].disable()
    this.form.controls['dlNumber'].disable()
    this.form.controls['state'].disable()
    this.form.controls['expDate'].disable()
    this.form.controls['vehicleQuestion'].disable()
    this.form.controls['ifSo'].disable()
    this.form.controls['licensPlate'].disable()
    this.form.controls['stateLicens'].disable()

    this.form.controls['chooseDate'].setValue(item.chooseDate)
    this.form.controls['clientName'].setValue(item.clientName)
    this.form.controls['phone'].setValue(item.phone)
    this.form.controls['dateOfBirth'].setValue(item.dateOfBirth)
    this.form.controls['dlNumber'].setValue(item.dlNumber)
    this.form.controls['state'].setValue(item.state)
    this.form.controls['expDate'].setValue(item.expDate)
    this.form.controls['vehicleQuestion'].setValue(item.vehicleQuestion)
    this.form.controls['ifSo'].setValue(item.ifSo)
    this.form.controls['licensPlate'].setValue(item.licensPlate)
    this.form.controls['stateLicens'].setValue(item.stateLicens)
    this.validButton();
  }
  validButton(){
    if (this.emergencyContact.length >= 2 && this.employers.length != 0
      && this.status.length != 0 && this.medications.length != 0 && this.treatment.length != 0) {
        this.disabled = Menssage.emptyBolean
    }
  }
  disableEmergencyContact(item: any){
    this.form.controls['emergencyContact'].disable()
    this.form.controls['relationship'].disable()
    this.form.controls['homePhone'].disable()
    this.form.controls['cellPhone'].disable()
    this.form.controls['emergencyContact'].setValue(item[0].emergencyContact)
    this.form.controls['relationship'].setValue(item[0].relationship)
    this.form.controls['homePhone'].setValue(item[0].homePhone)
    this.form.controls['cellPhone'].setValue(item[0].cellPhone)
    if (this.emergencyContact.length >= 2) {
      this.form.controls['emergencyContact2'].disable()
      this.form.controls['relationship2'].disable()
      this.form.controls['homePhone2'].disable()
      this.form.controls['cellPhone2'].disable()
      this.form.controls['emergencyContact2'].setValue(item[1].emergencyContact)
      this.form.controls['relationship2'].setValue(item[1].relationship)
      this.form.controls['homePhone2'].setValue(item[1].homePhone)
      this.form.controls['cellPhone2'].setValue(item[1].cellPhone)
    }
    this.validButton();
  }

  disableEmployers(item: any){
    this.form.controls['employers'].disable()
    this.form.controls['adress'].disable()
    this.form.controls['phoneEmploye'].disable()
    this.form.controls['superName'].disable()
    this.form.controls['employers'].setValue(item.employers)
    this.form.controls['adress'].setValue(item.adress)
    this.form.controls['phoneEmploye'].setValue(item.phoneEmploye)
    this.form.controls['superName'].setValue(item.superName)
    this.validButton();
  }

  disableMedications(item: any){
    this.form.controls['takeMedications'].disable()
    this.form.controls['ifmedications'].disable()
    this.form.controls['medicationsList'].disable()
    this.form.controls['mentalHealth'].disable()
    this.form.controls['ifSowhat'].disable()

    this.form.controls['takeMedications'].setValue(item.takeMedications)
    this.form.controls['ifmedications'].setValue(item.ifmedications)
    this.form.controls['medicationsList'].setValue(item.medicationsList)
    this.form.controls['mentalHealth'].setValue(item.mentalHealth)
    this.form.controls['ifSowhat'].setValue(item.ifSoWhat)
    this.validButton();
  }

  disableTreatment(item: any){
    this.form.controls['beenTreatment'].disable()
    this.form.controls['treatmentIfSowhen'].disable()
    this.form.controls['treatmentIfSowhere'].disable()
    this.form.controls['treatmentHalfway'].disable()
    this.form.controls['treatmentIfSowhenOne'].disable()
    this.form.controls['treatmentIfSowhereTwo'].disable()
    this.form.controls['treatmentChoice'].disable()
    this.form.controls['treatmentLastUse'].disable()
    this.form.controls['treatmentLearnAnything'].disable()
    this.form.controls['treatmentLearnAnythingOne'].disable()
    this.form.controls['treatmentHowOften'].disable()
    this.form.controls['treatmentMostImportantToday'].disable()
    this.form.controls['treatmentHaveAnyGoals'].disable()

    this.form.controls['beenTreatment'].setValue(item.beenTreatment)
    this.form.controls['treatmentIfSowhen'].setValue(item.treatmentIfSowhen)
    this.form.controls['treatmentIfSowhere'].setValue(item.treatmentIfSowhere)
    this.form.controls['treatmentHalfway'].setValue(item.treatmentHalfway)
    this.form.controls['treatmentIfSowhenOne'].setValue(item.treatmentIfSowhenOne)
    this.form.controls['treatmentIfSowhereTwo'].setValue(item.treatmentIfSowhereTwo)
    this.form.controls['treatmentChoice'].setValue(item.treatmentChoice)
    this.form.controls['treatmentLastUse'].setValue(item.treatmentLastUse)
    this.form.controls['treatmentLearnAnything'].setValue(item.treatmentLearnAnything)
    this.form.controls['treatmentLearnAnythingOne'].setValue(item.treatmentLearnAnythingOne)
    this.form.controls['treatmentHowOften'].setValue(item.treatmentHowOften)
    this.form.controls['treatmentMostImportantToday'].setValue(item.treatmentMostImportantToday)
    this.form.controls['treatmentHaveAnyGoals'].setValue(item.treatmentHaveAnyGoals)
    this.validButton();

  }

  disableStatus(item: any){
    this.form.controls['relationShipStatus'].disable()
    this.form.controls['statusChildren'].disable()
    this.form.controls['statusIfChildren'].disable()
    this.form.controls['statusSuicidalThoughts'].disable()
    this.form.controls['statusIfSoWhen'].disable()
    this.form.controls['statusCurrent'].disable()
    this.form.controls['statusArrested'].disable()
    this.form.controls['statusIfArrested'].disable()
    this.form.controls['statusArrestedWhen'].disable()
    this.form.controls['statusConvicted'].disable()
    this.form.controls['statusForWhat'].disable()
    this.form.controls['statusSexOffender'].disable()
    this.form.controls['statusOnProbation'].disable()
    this.form.controls['statusStartDate'].disable()
    this.form.controls['statusEndDate'].disable()
    this.form.controls['statusOfficerName'].disable()
    this.form.controls['statusPhone'].disable()

    this.form.controls['relationShipStatus'].setValue(item.relationShipStatus)
    this.form.controls['statusChildren'].setValue(item.statusChildren)
    this.form.controls['statusIfChildren'].setValue(item.statusIfChildren)
    this.form.controls['statusSuicidalThoughts'].setValue(item.statusSuicidalThoughts)
    this.form.controls['statusIfSoWhen'].setValue(item.statusIfSoWhen)
    this.form.controls['statusCurrent'].setValue(item.statusCurrent)
    this.form.controls['statusArrested'].setValue(item.statusArrested)
    this.form.controls['statusIfArrested'].setValue(item.statusIfArrested)
    this.form.controls['statusArrestedWhen'].setValue(item.statusArrestedWhen)
    this.form.controls['statusConvicted'].setValue(item.statusConvicted)
    this.form.controls['statusForWhat'].setValue(item.statusForWhat)
    this.form.controls['statusSexOffender'].setValue(item.statusSexOffender)
    this.form.controls['statusOnProbation'].setValue(item.statusOnProbation)
    this.form.controls['statusStartDate'].setValue(item.statusStartDate)
    this.form.controls['statusEndDate'].setValue(item.statusEndDate)
    this.form.controls['statusOfficerName'].setValue(item.statusOfficerName)
    this.form.controls['statusPhone'].setValue(item.statusPhone)
    this.validButton();
  }

  saveData(){
    console.log(this.form);
    if (this.residentApplication.length === 0) {
      this.createResidentApplication(this.residentApplicationData())
    }
    if (this.residentApplication.length != 0) {
      if (this.emergencyContact.length == 0) {
        this.createEmergencyContact(this.emergencyContactData(1, this.residentApplication))
        this.createEmergencyTwo()
      } else if (this.emergencyContact.length == 1) {
        this.createEmergencyTwo()
      }
      if (this.employers.length == 0) {
        this.createEmployers(this.employersData(this.residentApplication))
      }
      if (this.status.length == 0) {
        this.createStatus(this.statusData(this.residentApplication))
      }
      if (this.medications.length == 0) {
        this.createMedications(this.statusData(this.residentApplication))
      }
      if (this.treatment.length == 0) {
        this.createTreatment(this.statusData(this.residentApplication))
      }
    }
  }

  createEmergencyTwo(){
    if (this.form.controls['emergencyContact2'].value != undefined || this.form.controls['emergencyContact2'].value != '' ) {
      this.createEmergencyContact(this.emergencyContactData(2, this.residentApplication))
    }
  }

  createEmergencyContact(item: any){
    this.alert.loading();
    this._https.createEmergencyContact(item).then((resulta: any)=>{
      this.getEmergencyContact(this.usersData.user.id)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getEmergencyContact(item: number){
    this.alert.loading();
    this._https.getEmergencyContact(item).then((resulta: any)=>{
      this.emergencyContact = resulta.data
      if (this.emergencyContact.length != 0) {
        this.disableEmergencyContact(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  emergencyContactData(item: number, itemList:any):any{
    let emergencyContact: { emergencyContact: string; relationship: string; homePhone: string; cellPhone: string; residentApplicationInformationId: number; };
    if (item == 1) {
      emergencyContact = {
        emergencyContact: this.form.controls['emergencyContact'].value,
        relationship: this.form.controls['relationship'].value,
        homePhone: this.form.controls['homePhone'].value,
        cellPhone: this.form.controls['cellPhone'].value,
        residentApplicationInformationId:itemList.id
      }
    }
    if (item == 2) {
      emergencyContact = {
        emergencyContact: this.form.controls['emergencyContact2'].value,
        relationship: this.form.controls['relationship2'].value,
        homePhone: this.form.controls['homePhone2'].value,
        cellPhone: this.form.controls['cellPhone2'].value,
        residentApplicationInformationId:itemList.id
      }
    }
    
    return emergencyContact;
  }

  createResidentApplication(item: any){
    this.alert.loading();
    this._https.createResidentApplication(item).then((resulta: any)=>{
      this.getResidentApplication(this.usersData.user.id)
      this.createEmergencyContact(this.emergencyContactData(1, resulta.data))
      if (this.form.controls['emergencyContact2'].value != '') {
        this.createEmergencyContact(this.emergencyContactData(2, resulta.data))
      }
      this.createEmployers(this.employersData(resulta.data))
      this.createStatus(this.statusData(resulta.data))
      this.createMedications(this.medicationsData(resulta.data))
      this.createTreatment(this.treatmentData(resulta.data))
      this.createEmergencyTwo()
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getResidentApplication(item: number){
    this.alert.loading();
    this._https.getResidentApplication(item).then((resulta: any)=>{
      this.residentApplication = resulta.data
      if (this.residentApplication.length != 0) {
        this.questionResult.emit(true)
        this.getEmployers(resulta.data.id)
        this.getEmergencyContact(resulta.data.id)
        this.getStatus(resulta.data.id)
        this.getMedications(resulta.data.id)
        this.getTreatment(resulta.data.id)
        this.disableResidentApplication(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err.error.data)
      if (err.error.data != undefined && err.error.data.message == Menssage.faile) {
        this.alert.error(Menssage.error, Menssage.faile);
        this._https.logout()
      }
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  residentApplicationData():any{
    const residentApplication = {
      chooseDate: this.form.controls['chooseDate'].value,
      clientName: this.form.controls['clientName'].value,
      phone: this.form.controls['phone'].value,
      dateOfBirth :this.form.controls['dateOfBirth'].value,
      dlNumber: this.form.controls['dlNumber'].value,
      state: this.form.controls['state'].value,
      expDate: this.form.controls['expDate'].value,
      vehicleQuestion: this.form.controls['vehicleQuestion'].value,
      ifSo: this.form.controls['ifSo'].value,
      licensPlate: this.form.controls['licensPlate'].value,
      stateLicens: this.form.controls['stateLicens'].value,
      usersClientId: this.usersData.user.id,
      clientsProyectsId:this.usersData.user.clientsProyectsId
    }
    return residentApplication;
  }

  createEmployers(item: any){
    this.alert.loading();
    this._https.createEmployers(item).then((resulta: any)=>{
      this.getEmployers(resulta.residentApplicationInformationId)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getEmployers(item: number){
    this.alert.loading();
    this._https.getEmployers(item).then((resulta: any)=>{
      this.employers = resulta.data
      if (this.employers.length != 0) {
        this.disableEmployers(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  employersData(itemList:any):any{
    const employers = {
      employers: this.form.controls['employers'].value,
      adress: this.form.controls['adress'].value,
      phone: this.form.controls['phoneEmploye'].value,
      supervisorName: this.form.controls['superName'].value,
      residentApplicationInformationId:itemList.id
    }
    return employers;
  }

  createStatus(item: any){
    this.alert.loading();
    this._https.createStatus(item).then((resulta: any)=>{
      this.getStatus(resulta.residentApplicationInformationId)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getStatus(item: number){
    this.alert.loading();
    this._https.getStatu(item).then((resulta: any)=>{
      this.status = resulta.data
      if (this.status.length != 0) {
        this.disableStatus(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  statusData(itemList:any):any{
    const Status = {
      relationShipStatus: this.form.controls['relationShipStatus'].value,
      statusChildren: this.form.controls['statusChildren'].value,
      statusIfChildren: this.form.controls['statusIfChildren'].value,
      statusSuicidalThoughts: this.form.controls['statusSuicidalThoughts'].value,
      statusIfSoWhen: this.form.controls['statusIfSoWhen'].value,
      statusCurrent: this.form.controls['statusCurrent'].value,
      statusArrested: this.form.controls['statusArrested'].value,
      statusIfArrested: this.form.controls['statusIfArrested'].value,
      statusArrestedWhen: this.form.controls['statusArrestedWhen'].value,
      statusConvicted: this.form.controls['statusConvicted'].value,
      statusForWhat: this.form.controls['statusForWhat'].value,
      statusSexOffender: this.form.controls['statusSexOffender'].value,
      statusOnProbation: this.form.controls['statusOnProbation'].value,
      statusStartDate: this.form.controls['statusStartDate'].value,
      statusEndDate: this.form.controls['statusEndDate'].value,
      statusOfficerName: this.form.controls['statusOfficerName'].value,
      statusPhone: this.form.controls['statusPhone'].value,
      residentApplicationInformationId:itemList.id
    }
    return Status;
  }

  createMedications(item: any){
    this.alert.loading();
    this._https.createMedications(item).then((resulta: any)=>{
      this.getMedications(resulta.residentApplicationInformationId)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getMedications(item: number){
    this.alert.loading();
    this._https.getMedications(item).then((resulta: any)=>{
      this.medications = resulta.data
      if (this.medications.length != 0) {
        this.disableMedications(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  medicationsData(itemList:any):any{
    const medications = {
      takeMedications: this.form.controls['takeMedications'].value,
      ifmedications: this.form.controls['ifmedications'].value,
      medicationsList: this.form.controls['medicationsList'].value,
      mentalHealth: this.form.controls['mentalHealth'].value,
      ifSowhat: this.form.controls['ifSowhat'].value,
      residentApplicationInformationId:itemList.id
    }
    return medications;
  }

  createTreatment(item: any){
    this.alert.loading();
    this._https.createTreatment(item).then((resulta: any)=>{
      this.getTreatment(resulta.residentApplicationInformationId)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getTreatment(item: number){
    this.alert.loading();
    this._https.getTreatment(item).then((resulta: any)=>{
      this.treatment = resulta.data
      if (this.treatment.length != 0) {
        this.disableTreatment(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  treatmentData(itemList:any):any{
    const treatment = {
      beenTreatment: this.form.controls['beenTreatment'].value,
      treatmentIfSowhen: this.form.controls['treatmentIfSowhen'].value,
      treatmentIfSowhere: this.form.controls['treatmentIfSowhere'].value,
      treatmentHalfway: this.form.controls['treatmentHalfway'].value,
      treatmentIfSowhenOne: this.form.controls['treatmentIfSowhenOne'].value,
      treatmentIfSowhereTwo: this.form.controls['treatmentIfSowhereTwo'].value,
      treatmentChoice: this.form.controls['treatmentChoice'].value,
      treatmentLastUse: this.form.controls['treatmentLastUse'].value,
      treatmentLearnAnything: this.form.controls['treatmentLearnAnything'].value,
      treatmentLearnAnythingOne: this.form.controls['treatmentLearnAnythingOne'].value,
      treatmentHowOften: this.form.controls['treatmentHowOften'].value,
      treatmentMostImportantToday: this.form.controls['treatmentMostImportantToday'].value,
      treatmentHaveAnyGoals: this.form.controls['treatmentHaveAnyGoals'].value,
      residentApplicationInformationId:itemList.id
    }
    return treatment;
  }
  downloadPDF() {
    this.alert.loading();
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'mm');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');
      const imgWidth = 210;
      const pageHeight = 283;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      return doc;
    }).then((docResult) => {
      this.alert.messagefin();
      docResult.save(`${new Date().toISOString()}_Resident_Application_Information.pdf`);
    });
  }
}
