import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-formulario8',
  templateUrl: './formulario8.component.html',
  styleUrls: ['./formulario8.component.css']
})
export class Formulario8Component implements OnInit {
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public menuItemsStore: any = [];
  public usersData: any;
  public usersDataForm: any = [];
  public customerDetail: any = [];
  public disabled = true
  public selectUsers:any;
  public id: number;
  public idUsers:any;
  public validAdmin: boolean = true
  @Output() questionResult7: EventEmitter<boolean> = new EventEmitter();
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
    this.getTypesOfForms(6)
    this.getGeneralForms(this.idUsers.id, 6)
    
  }
  initial(){
    this.form = this.myFormBuilder.group({
      clientName: [Menssage.empty, Validators.compose([Validators.required])],
      clientSignature: [Menssage.empty, Validators.compose([Validators.required])],
      dateTodaysClient: [Menssage.empty, Validators.compose([Validators.required])],
      directorName: [{value: Menssage.empty, disabled: true}, Validators.compose([Validators.nullValidator])],
      directorSignature: [{value: Menssage.empty, disabled: true}, Validators.compose([Validators.nullValidator])],
      dateTodaysDirector: [{value: Menssage.empty, disabled: true}, Validators.compose([Validators.nullValidator])],
      usersClientId: [this.idUsers.id],
      clientsProyectsId:[this.usersData.user.clientsProyectsId],
      typesOfFormsId: [6],
    })
    if (this.selectUsers) {
      this.form.controls['directorName'].enable()
      this.form.controls['directorSignature'].enable()
      this.form.controls['dateTodaysDirector'].enable()
      this.validAdmin = false
    }
  }
  saveData(item: any){
    console.log(this.form);
    if (this.menuItemsStore.length == 0) {
      this.createGeneralForms(item)
    }else{
      if (this.usersData.user.rolAppId == 1) {
        this.editGeneralForms(item)
      }
    }
  }
  signatureClients(item: string) {
    console.log(item);
    this.form.controls['clientSignature'].setValue(item)
  }
  signatureDirector(item: string) {
      console.log(item);
      this.form.controls['directorSignature'].setValue(item)
  }

  disableGeneralForms(item: any){
    this.id = item.id
    this.form.controls['clientName'].disable()
    this.form.controls['clientSignature'].disable()
    this.form.controls['dateTodaysClient'].disable()
    if (this.selectUsers) {
      this.form.controls['directorName'].enable()
      this.form.controls['directorSignature'].enable()
      this.form.controls['dateTodaysDirector'].enable()
    }
    if (item.directorName != null) {
      this.form.controls['directorName'].setValue(item.directorName)
      this.form.controls['directorSignature'].setValue(item.directorSignature)
      this.form.controls['dateTodaysDirector'].setValue(item.dateTodaysDirector)
      this.form.controls['directorName'].disable()
      this.form.controls['directorSignature'].disable()
      this.form.controls['dateTodaysDirector'].disable()
      this.validAdmin = true
      this.disabled = false
    }

    this.form.controls['clientName'].setValue(item.clientName)
    this.form.controls['clientSignature'].setValue(item.clientSignature)
    this.form.controls['dateTodaysClient'].setValue(item.dateTodaysClient)
  }

  createGeneralForms(item: any){
    this.alert.loading();
    this._https.createGeneralForms(item).then((resulta: any)=>{
      this.getGeneralForms(this.idUsers.id, 6)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }
  editGeneralForms(item: any){
    this.alert.loading();
    this._https.editGeneralForms(this.id,item).then((resulta: any)=>{
      this.getGeneralForms(this.idUsers.id, 1)
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
        this.questionResult7.emit(true)
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
