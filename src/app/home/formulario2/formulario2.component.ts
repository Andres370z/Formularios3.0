import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  public form: FormGroup;
  public selectedOption: any;
  public createForm: any;
  public menuItemsStore: any[];
  public usersData: any;
  public disabled = true
  public customerDetail: any = [];
  @Output() questionResult1: EventEmitter<boolean> = new EventEmitter();
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
      stepMeeting: [Menssage.emptyBolean],
      remainAbstinent: [Menssage.emptyBolean],
      abideBy: [Menssage.emptyBolean],
      jobThat: [Menssage.emptyBolean],
      negativeTowards: [Menssage.emptyBolean],
      aftercareProgam: [Menssage.emptyBolean],
      recoverySupportive: [Menssage.emptyBolean],
      supportGroup: [Menssage.emptyBolean],
      changeRecovery: [Menssage.emptyBolean],
      recoveryHouse: [Menssage.emptyBolean],
      appointmentsThat: [Menssage.emptyBolean],
      medication: [Menssage.emptyBolean],
      usersClientId: [this.usersData.user.id],
    })
    this.getRecoveryAgreementPlan(this.usersData.user.id)
  }

  disableRecoveryAgreementPlan(item: any){
    this.disabled = Menssage.emptyBolean
    this.form.get('stepMeeting')?.disable();
    this.form.get('remainAbstinent')?.disable();
    this.form.get('abideBy')?.disable();
    this.form.get('jobThat')?.disable();
    this.form.get('negativeTowards')?.disable();
    this.form.get('aftercareProgam')?.disable();
    this.form.get('recoverySupportive')?.disable();
    this.form.get('supportGroup')?.disable();
    this.form.get('changeRecovery')?.disable();
    this.form.get('recoveryHouse')?.disable();
    this.form.get('appointmentsThat')?.disable();
    this.form.get('medication')?.disable();

    this.form.get('stepMeeting')?.setValue(item.stepMeeting);
    this.form.get('remainAbstinent')?.setValue(item.remainAbstinent);
    this.form.get('abideBy')?.setValue(item.abideBy);
    this.form.get('jobThat')?.setValue(item.jobThat);
    this.form.get('negativeTowards')?.setValue(item.negativeTowards);
    this.form.get('aftercareProgam')?.setValue(item.aftercareProgam);
    this.form.get('recoverySupportive')?.setValue(item.recoverySupportive);
    this.form.get('supportGroup')?.setValue(item.supportGroup);
    this.form.get('changeRecovery')?.setValue(item.changeRecovery);
    this.form.get('recoveryHouse')?.setValue(item.recoveryHouse);
    this.form.get('appointmentsThat')?.setValue(item.appointmentsThat);
    this.form.get('medication')?.setValue(item.medication);
    this.questionResult1.emit(true)
    
  }

  saveData(item: any){
    console.log(this.form);
    if (this.menuItemsStore.length == 0) {
      this.createRecoveryAgreementPlan(item)
    }
  }

  createRecoveryAgreementPlan(item: any){
    this.alert.loading();
    this._https.createRecoveryAgreementPlan(item).then((resulta: any)=>{
      this.getRecoveryAgreementPlan(this.usersData.user.id)
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getRecoveryAgreementPlan(item: number){
    this.alert.loading();
    this._https.getRecoveryAgreementPlan(item).then((resulta: any)=>{
      this.menuItemsStore = resulta.data
      if (this.menuItemsStore.length != 0) {
        this.disableRecoveryAgreementPlan(resulta.data)
      }
      this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      if (err.data != undefined && err.data.message == Menssage.faile) {
        this.alert.error(Menssage.error, Menssage.faile);
        this._https.logout()
      }
      this.alert.error(Menssage.error, Menssage.server);
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
