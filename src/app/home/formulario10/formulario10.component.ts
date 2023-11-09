import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-formulario10',
  templateUrl: './formulario10.component.html',
  styleUrls: ['./formulario10.component.css']
})
export class Formulario10Component implements OnInit {
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public signatureOpt: Object = {
    'minWidth': 5,
    'canvasWidth': '100%',
    'canvasHeight': 200

  }
  public menuItemsStore: any = [];
  public usersData: any;
  public usersDataForm: any = [];
  public customerDetail: any = [];
  public disabled = true
  public selectUsers:any;
  public id: number;
  public idUsers:any;
  public validAdmin: boolean = true
  @Output() questionResult9: EventEmitter<boolean> = new EventEmitter();
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
      residentName: [Menssage.empty, Validators.compose([Validators.required])],
      chooseDate: [Menssage.empty, Validators.compose([Validators.required])],
      herebyAuthorize: [Menssage.empty, Validators.compose([Validators.required])],
      discloseObtain: [Menssage.empty, Validators.compose([Validators.required])],
      namePersonAgency: [Menssage.empty, Validators.compose([Validators.required])],
      address: [Menssage.empty, Validators.compose([Validators.required])],
      clientName: [Menssage.empty, Validators.compose([Validators.required])],
      clientSignature: [Menssage.empty, Validators.compose([Validators.required])],
      dateTodaysClient: [Menssage.empty, Validators.compose([Validators.required])],
      directorName: [Menssage.empty, Validators.compose([Validators.required])],
      directorSignature: [Menssage.empty, Validators.compose([Validators.required])],
      dateTodaysDirector: [Menssage.empty, Validators.compose([Validators.required])],
      usersClientId: [this.usersData.user.id, Validators.compose([Validators.required])],
      clientsProyectsId:[this.usersData.user.clientsProyectsId]
      
    })
    this.getAuthorizationReleaseInformation(this.idUsers.id)
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
      this.createAuthorizationReleaseInformation(item)
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

  disableAuthorizationReleaseInformation(item: any){
    this.form.controls['residentName'].disable()
    this.form.controls['chooseDate'].disable()
    this.form.controls['herebyAuthorize'].disable()
    this.form.controls['discloseObtain'].disable()
    this.form.controls['namePersonAgency'].disable()
    this.form.controls['address'].disable()
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

    this.form.controls['residentName'].setValue(item.residentName)
    this.form.controls['chooseDate'].setValue(item.chooseDate)
    this.form.controls['herebyAuthorize'].setValue(item.herebyAuthorize)
    this.form.controls['discloseObtain'].setValue(item.discloseObtain)
    this.form.controls['namePersonAgency'].setValue(item.namePersonAgency)
    this.form.controls['address'].setValue(item.clientName)
    this.form.controls['clientName'].setValue(item.clientName)
    this.form.controls['clientSignature'].setValue(item.clientSignature)
    this.form.controls['dateTodaysClient'].setValue(item.dateTodaysClient)
  }

  createAuthorizationReleaseInformation(item: any){
    this.alert.loading();
    this._https.createAuthorizationReleaseInformation(item).then((resulta: any)=>{
      this.getAuthorizationReleaseInformation(this.idUsers.id)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getAuthorizationReleaseInformation(item: number){
    this.alert.loading();
    this._https.getAuthorizationReleaseInformation(item).then((resulta: any)=>{
      this.menuItemsStore = resulta.data
      if (this.menuItemsStore.length != 0) {
        this.disableAuthorizationReleaseInformation(resulta.data)
        this.questionResult9.emit(true)
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
  downloadPDF() {
    this.alert.loading();
    // Extraemos el
    const DATA = document.getElementById('htmlDataNueve');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      this.alert.messagefin();
      docResult.save(`${new Date().toISOString()}_Resident_Application_Information.pdf`);
    });
  }
}
