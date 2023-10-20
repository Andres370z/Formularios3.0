import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component implements OnInit {
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
  @Output() questionResult2: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private myFormBuilder: FormBuilder,
    private localStore: LocalstoreService,
    private _https:AuthService,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)
      this.selectUsers = this.localStore.getItem(Menssage.selectUsers)
      this.idUsers = this.selectUsers ? this.selectUsers : this.usersData.user
      console.log(this.usersData)
    }

  ngOnInit(): void {
    this.initial()
    this.getTypesOfForms(1) 
    this.getGeneralForms(this.idUsers.id, 1)
    
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
      typesOfFormsId: [1],
      
    })
    if (this.selectUsers) {
      this.form.controls['directorName'].enable()
      this.form.controls['directorSignature'].enable()
      this.form.controls['dateTodaysDirector'].enable()
      this.validAdmin = false
      console.log("entro")
    }else{
      this.form.controls['directorName'].setValue(null)
      this.form.controls['directorSignature'].setValue(null)
      this.form.controls['dateTodaysDirector'].setValue(null)
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
      this.disabled = false
      this.validAdmin = true
    }
    this.form.controls['clientName'].setValue(item.clientName)
    this.form.controls['clientSignature'].setValue(item.clientSignature)
    this.form.controls['dateTodaysClient'].setValue(item.dateTodaysClient)
   
    
  }

  createGeneralForms(item: any){
    this.alert.loading();
    this._https.createGeneralForms(item).then((resulta: any)=>{
      this.getGeneralForms(this.idUsers.id, 1)
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
        this.questionResult2.emit(true)
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
