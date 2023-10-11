import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
import { Menssage } from 'src/app/models/router';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-signature-director',
  templateUrl: './signature-director.component.html',
  styleUrls: ['./signature-director.component.css']
})
export class SignatureDirectorComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  @Output() signatureDirector: EventEmitter<string> = new EventEmitter();
  public signatureOpt: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 450,
    'canvasHeight': 200
  };
  public usersData: any;
  public usersDataForm: any = [];
  public customerDetail: any = [];
  constructor(
    private localStore: LocalstoreService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)}

  ngOnInit(): void {
  }
  drawComplete() {
    this.signatureDirector.emit(this.signaturePad.toDataURL())
  }
  clear(){
    this.signaturePad.clear();
  }
  
}
