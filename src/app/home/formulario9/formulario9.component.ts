import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import {SignaturePad} from 'angular2-signaturepad'
import { LocalstoreService } from 'src/app/service/localstore.service';
import { AuthService } from 'src/app/service/auth.service';
import { AlertService } from 'src/app/service/alert.service';
@Component({
  selector: 'app-formulario9',
  templateUrl: './formulario9.component.html',
  styleUrls: ['./formulario9.component.css']
})
export class Formulario9Component implements OnInit {
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public signatureOpt: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 200
  };
  public menuItemsStore: any = [];
  public usersData: any;
  public usersDataForm: any = [];
  public customerDetail: any = [];
  public disabled = true
  @Output() questionResult8: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private myFormBuilder: FormBuilder,
    private localStore: LocalstoreService,
    private _https:AuthService,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)}

  ngOnInit(): void {
    this.initial()
    this.getTypesOfForms(7)
    this.getGeneralForms(this.usersData.user.id, 7)
    
  }
  initial(){
    this.form = this.myFormBuilder.group({
      clientName: [Menssage.empty, Validators.compose([Validators.required])],
      clientSignature: [Menssage.empty, Validators.compose([Validators.required])],
      dateTodaysClient: [Menssage.empty, Validators.compose([Validators.required])],
      directorName: [Menssage.empty],
      directorSignature: [Menssage.empty],
      dateTodaysDirector: [Menssage.empty],
      usersClientId: [this.usersData.user.id],
      typesOfFormsId: [7],
    })
  }
  saveData(item: any){
    console.log(this.form);
    if (this.menuItemsStore.length == 0) {
      this.createGeneralForms(item)
    }
  }
  signatureClients(item: string) {
      console.log(item);
      this.form.controls['directorSignature'].setValue(item)
  }
  signatureDirector(item: string) {
      console.log(item);
      this.form.controls['clientSignature'].setValue(item)
  }

  disableGeneralForms(item: any){
    this.form.controls['clientName'].disable()
    this.form.controls['clientSignature'].disable()
    this.form.controls['dateTodaysClient'].disable()
    this.form.controls['directorName'].disable()
    this.form.controls['directorSignature'].disable()
    this.form.controls['dateTodaysDirector'].disable()

    this.form.controls['clientName'].setValue(item.clientName)
    this.form.controls['clientSignature'].setValue(item.clientSignature)
    this.form.controls['dateTodaysClient'].setValue(item.dateTodaysClient)
    this.form.controls['directorName'].setValue(item.directorName)
    this.form.controls['directorSignature'].setValue(item.directorSignature)
    this.form.controls['dateTodaysDirector'].setValue(item.dateTodaysDirector)
    this.disabled = false
  }

  createGeneralForms(item: any){
    this.alert.loading();
    this._https.createGeneralForms(item).then((resulta: any)=>{
      this.getGeneralForms(this.usersData.user.id, 7)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getGeneralForms(item: number, iten: number){
    const list = {
      usersClientId: item,
      typrFormId: iten
    }
    this.alert.loading();
    this._https.getGeneralForms(list).then((resulta: any)=>{
      this.menuItemsStore = resulta.data
      if (this.menuItemsStore.length != 0) {
        this.disableGeneralForms(resulta.data)
        this.questionResult8.emit(true)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getTypesOfForms(item: number){
    this.alert.loading();
    this._https.getTypesOfForms(item).then((resulta: any)=>{
      this.usersDataForm = resulta.data
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }
}
